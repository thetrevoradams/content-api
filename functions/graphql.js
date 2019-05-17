import { ApolloServer, gql } from 'apollo-server-lambda'
import { Egghead } from '../contentSources/egghead'

const typeDefs = gql`
  type Content {
    title: String
    published_at: String
    description: String
    duration: Int
    thumbnail: String
    url: String
    tags: [String]
    type: String
  }
  type Query {
    hello: String
    contentGroup: [Content!]
  }
`

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return `Hello from Netlify function. https://bit.ly/2UXh0fD`
    },
    contentGroup: (root, args, context) => {
      return Egghead
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

exports.handler = server.createHandler()
