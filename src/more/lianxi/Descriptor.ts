export function classDescriptor(description: string) {
  return function (target: Function) {}
}
export function propDesciptor(description: string) {
  return function (target: any, propName: string) {}
}
export function printObj(obj: object) {}
