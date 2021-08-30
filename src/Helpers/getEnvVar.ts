/**
 * Helper for fetching env vars
 * @param key - The key to use when fetching an env var
 * @returns - The wanted env var or undefined
 */
export const getEnvVar = (key: string) => {
  let value;
  try {
    value = process.env[key];
  } catch (err) {
    console.log(`Couldn't Fetch ${key} >>> ${err}`);
  }
  return value;
};