import { GraphQLResolverMap } from 'apollo-graphql';

/**
 * Helper function which allows you to build a map of reference-resolvers. This could
 * should be used with the
 *
 * references: {
 *      "User": {
 *
 *      }
 * }
 *
 */

import Container from '@utils/Container';

const references: GraphQLResolverMap = {};
const ResolveReference = (classCallback: () => any, controller: () => any) => {
  const name = classCallback().name;
  if (!name) throw new Error('Were not able to find class callback anme ' + name);

  return (_: unknown, key: string) => {
    const parentInstance = Container.getContainer().get<any>(controller());

    const func = (...args: unknown[]) => parentInstance[key](...args);
    references[name] = { __resolveReference: func };
  };
};

export default Object.assign(ResolveReference, {
  getAllReferenceResolvers: () => references,
});
