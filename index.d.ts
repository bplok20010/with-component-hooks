import React from "react";
interface Props {
  children: () => React.ReactNode;
}
declare function withComponentHooks(
  target: React.ReactElement<Props>
): React.ReactNode;
declare function withComponentHooks(target: React.Component): React.Component;
export default withComponentHooks;
