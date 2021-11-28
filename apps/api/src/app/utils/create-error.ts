import { ServerError } from '@heroes/api-interfaces';

const createError = (message: string): ServerError => ({
  message,
  timestamp: new Date().toISOString(),
});

export default createError;
