const SCSS_REGEX = /\.scss$/;

module.exports = function({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        if (
          path.node.callee.name === 'require' &&
          SCSS_REGEX.test(path.node.arguments[0].value) &&
          !t.isLogicalExpression(path.parent)
        ) {
          path.parentPath.replaceWith(
            t.logicalExpression(
              '&&',
              t.identifier('__BROWSER__'),
              path.node
            )
          );

          path.skip();
        }
      }
    },
  };
};