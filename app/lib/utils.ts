export class EnumX {
  static of<T extends object>(e: T) {
    const values = Object.values(e);
    return {
      next: <K extends keyof T>(v: T[K]) =>
        values[(values.indexOf(v) + 1) % values.length],
    };
  }
}
