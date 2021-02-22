var React = require("react");

var P_KEY = "__$RCH__";

module.exports = function WithComponentHooks(target) {
  /**
   * @examples
   * class MyApp extends React.Component {
   *  render(){
   *    return <WithComponentHooks>{() => {
   *      const [value, setValue] = React.useState(0)
   *      ...
   *      return <button>test</button>
   *    }}</WithComponentHooks>
   *  }
   * }
   */
  if (typeof target === "object" && target !== null && target.children) {
    return typeof target.children === "function"
      ? target.children()
      : target.children;
  }

  /**
   * @examples
   * class MyApp extends React.Component {
   *  render(){
   *    const [value, setValue] = React.useState(0)
   *    ...
   *    return <button>test</button>
   *  }
   * }
   */
  if (target.__$S_HOOKS__) {
    return target;
  }

  target.__$S_HOOKS__ = true;

  var render = target.prototype.render;

  target.prototype.render = function () {
    var Component = this[P_KEY];
    if (!Component) {
      Component = this[P_KEY] = render.bind(this);
    }
    return React.createElement(Component);
  };

  return target;
};
