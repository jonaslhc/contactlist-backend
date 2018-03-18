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
  addContact(firstName: String!, lastName: String!,
  phone: String!, address: String, email: String): Contact
  modifyContact(contactId: String!, firstName: String, lastName: String,
  phone: String, address: String, email: String): Contact
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = { schema };
