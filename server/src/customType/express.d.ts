declare namespace Express {
  interface Request {
    userId?: string;
  }

  interface Response {
    headers: {
      Authorization?: string;
    };
  }
}
