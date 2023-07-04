class AppError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
    this.stack = this.stack;
  }
}
