const port = process.env.SERVER_PORT ? `:${process.env.SERVER_PORT}` : ''

export const config = {
  baseURL: `${window.location.protocol}//${window.location.hostname}${port}/api`,
  withCredentials: true,
  credentials: 'same-origin',
  timeout: 8000,
}
