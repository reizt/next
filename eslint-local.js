const likeParent = /^\.\.\//;
const likeSharedParent = /^(\.\.\/){1,}@\w+/;
const likeParentPrivate = /^(\.\.\/).*\/_\w+$/;
const isValidImport = (value) => {
  const isParent = likeParent.test(value);
  const isSharedParent = likeSharedParent.test(value);
  const isParentPrivate = likeParentPrivate.test(value);
  return !isParent || (isSharedParent && !isParentPrivate);
};

const noRestrictedImport = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Any modules referenced from subdirectories must be in the @shared scope',
      recommended: 'error',
    },
    messages: {
      restrictedImport: 'Importing from restricted module is not allowed',
    },
    schema: [],
  },
  create(ctx) {
    return {
      ImportDeclaration(node) {
        if (!isValidImport(node.source.value)) {
          ctx.report({
            node,
            messageId: 'restrictedImport',
          });
        }
      },
    };
  },
};

export default {
  meta: {
    name: 'local',
    version: '0.0.0',
  },
  rules: {
    'no-restricted-import': noRestrictedImport,
  },
};
