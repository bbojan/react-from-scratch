export type WithSearchParamsType = { search: Record<string, string> };

export function withUrlParams<T>(Component: React.ComponentType<T>) {
  const searchParams = new URLSearchParams(window.location.search);

  // ?
  // ?id=1&name=chris
  const search = Object.fromEntries(searchParams.entries());
  // search  = { id: 1, name: chris}

  return function (props: T) {
    return <Component {...props} search={search} />;
  };
}
