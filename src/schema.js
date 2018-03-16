const {
  makeExecutableSchema,
} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
type Contact {
   contactId: ID!
   firstname: String
   lastname: String
   phone: String
   address: String
   email: String
}
type Query {
   Contact: [Contact]
}
type Mutation {
  # A mutation to add a new channel to the list of channels
  addContact(name: String!): Contact
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = { schema };
