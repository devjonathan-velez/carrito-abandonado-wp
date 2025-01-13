export function removePlusSign(phoneNumber: string): string {
    return phoneNumber.startsWith('+') ? phoneNumber.slice(1) : phoneNumber;
  }
  