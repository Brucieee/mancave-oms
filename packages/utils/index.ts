/**
 * Determines the default URL for the application.
 */
export const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export { formatDate, formatDateTime } from './lib/date';
