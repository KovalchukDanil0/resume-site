export function EnumX<T extends object, K extends keyof T>(obj: T, val: T[K]) {
  const values = Object.values(obj);
  return values[(values.indexOf(val) + 1) % values.length];
}
