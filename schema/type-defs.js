const { gql } = require('apollo-server');

const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		username: String!
		age: Int!
		nationality: Nationality!
    friends: [User]
	}

  type Movie {
    id: ID!
    name: String!
    year: Int!
    isInTheaters: Boolean!
  }

	type Query {
		users: [User!]!
    user(id: ID!): User!
    movies: [Movies!]!
    movie(name: String!): Movie!
	}

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;

module.exports = { typeDefs };
