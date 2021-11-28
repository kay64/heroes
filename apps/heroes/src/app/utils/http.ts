import { ServerError } from '@heroes/api-interfaces';

type HttpResponse<T> = {
  status: number;
  headers: Record<string, string>;
  body: T;
};

type HttpClient = {
  get: <Out>(
    path: string,
    query?: Record<string, string>,
    headers?: Record<string, string>,
  ) => Promise<HttpResponse<Out>>;

  post: <In, Out>(
    path: string,
    body: In,
    query?: Record<string, string>,
    headers?: Record<string, string>,
  ) => Promise<HttpResponse<Out>>;

  updateToken: (token: string | undefined) => void;
};

class HttpError extends Error {
  constructor(
    public status: number,
    public timestamp: string,
    message: string,
  ) {
    super(message);
  }
}

const successfulStatuses = new Set([200, 201, 204]);

const createFetchHeaders = (
  headers?: Record<string, string>,
  enhancer?: (headers: Headers) => void,
): Headers => {
  const fetchHeaders = new Headers();

  fetchHeaders.set('Content-Type', 'application/json');
  if (headers) {
    Object.entries(headers).forEach(([name, value]) =>
      fetchHeaders.set(name, value),
    );
  }

  enhancer?.call(null, fetchHeaders);

  return fetchHeaders;
};

const parseResponse = async <Out>(
  response: Response,
): Promise<HttpResponse<Out>> => {
  const { status } = response;
  const body = await response.json();

  const headers: Record<string, string> = {};
  response.headers.forEach((value, key) => {
    headers[key] = value;
  });

  return {
    status,
    headers,
    body,
  };
};

const createHttpError = async (response: Response): Promise<HttpError> => {
  const httpResponse = await parseResponse<ServerError>(response);

  return new HttpError(
    httpResponse.status,
    httpResponse.body.timestamp,
    httpResponse.body.message,
  );
};

const createHttpClient = (): HttpClient => {
  let token: string | undefined = undefined;

  const withToken = (headers: Headers): void => {
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  };

  return {
    get: async <Out>(
      path: string,
      query: Record<string, string> | undefined,
      headers: Record<string, string> | undefined,
    ): Promise<HttpResponse<Out>> => {
      const response = await fetch(path, {
        method: 'GET',
        headers: createFetchHeaders(headers, withToken),
      });

      return parseResponse(response);
    },

    post: async <In, Out>(
      path: string,
      body: In,
      query: Record<string, string> | undefined,
      headers: Record<string, string> | undefined,
    ): Promise<HttpResponse<Out>> => {
      const response = await fetch(path, {
        method: 'POST',
        headers: createFetchHeaders(headers, withToken),
        body: JSON.stringify(body),
      });

      if (!successfulStatuses.has(response.status)) {
        throw await createHttpError(response);
      }

      return parseResponse(response);
    },

    updateToken: (nextToken) => {
      token = nextToken;
    },
  };
};

const http = createHttpClient();

export default http;
