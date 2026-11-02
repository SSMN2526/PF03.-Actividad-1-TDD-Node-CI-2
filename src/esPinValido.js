  export function esPinValido(pin) {
    if (typeof pin !== "string") return false;
    return /^(\d{4}|\d{6})$/.test(pin) && !/^(\d)\1+$/.test(pin);
  }