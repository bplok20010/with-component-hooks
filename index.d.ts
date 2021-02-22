import React from "react";
interface Props {
  children: () => React.ReactElement;
}
declare function WithComponentHooks(target: Props): React.ReactElement;
declare function WithComponentHooks(target: React.Component): React.Component;
export default WithComponentHooks;
