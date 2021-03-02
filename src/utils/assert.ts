export const assert = (exp?: boolean, msg?: string) => {
  if (!exp) {
    throw new Error(msg || `Assertion failed <${exp}> does not evaluate to true`);
  }
};
