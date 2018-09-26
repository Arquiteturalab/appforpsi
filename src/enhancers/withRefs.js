import {withProps} from 'recompose';

export const withRefs = withProps(() => {
  const refs = {};

  return {
    getRefs: () => {
      return refs;
    },
    registerRef: (name, element) => {
      refs[name] = element;
    }
  };
});
