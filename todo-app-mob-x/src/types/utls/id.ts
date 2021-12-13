let id = 0;

export const createNewID = () => {
  // return ++id;
  return Date.now() + id++;
};
