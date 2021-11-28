import { RequestHandler } from 'express';

// todo: wrap express router
const safe =
  (handler: RequestHandler): RequestHandler =>
  (req, res, next) =>
    handler
      .call(null, req, res, next)
      .catch((error: Error): void => next(error));

export default safe;
