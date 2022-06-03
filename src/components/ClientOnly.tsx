import { PropsWithChildren } from "react";
import { useClientOnly } from "../hooks/useClientOnly";

export const ClientOnly = ({ children }: PropsWithChildren<{}>) => {
  const hasMounted = useClientOnly();

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};
