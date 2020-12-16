export function sumOrMultiply(x: number, y: number) {
  if (x < 10 && y < 10) {
    return x + y;
  }

  return x * y;
}
