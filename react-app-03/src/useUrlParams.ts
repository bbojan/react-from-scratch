export const useUrlParams = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const search = Object.fromEntries(searchParams.entries());

  return search;
};
