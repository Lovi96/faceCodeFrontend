export let statusCodeMap: Map<number, string> = new Map<number, string>();

statusCodeMap.set(200, 'Ok');
statusCodeMap.set(110, 'Email address is already in use');
statusCodeMap.set(111, 'Invalid email address');
statusCodeMap.set(120, 'Invalid name');
statusCodeMap.set(130, 'Invalid birth year');
statusCodeMap.set(140, 'Invalid password');
statusCodeMap.set(115, 'Invalid email or password');

export class FCException {
  static get(status: number): string {
    return statusCodeMap.get(status);
  }
}
