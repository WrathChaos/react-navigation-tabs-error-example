//  Singleton Error Instance
const createError = (error) => (error instanceof Error ? error : new Error(error));

export default createError;
