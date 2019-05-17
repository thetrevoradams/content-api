import { ApolloServer, gql } from 'apollo-server-lambda'
import { Egghead } from '../contentSources/egghead'
import { JavaScriptAir } from '../contentSources/javascriptAir'

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
  type Source {
    name: String
    content: [Content!]
  }
  type Query {
    hello: String
    contentGroup(name: String): [Source!]
  }
`

const sourcesArr = [
  { name: 'Egghead', content: Egghead },
  { name: 'JavaScript Air', content: JavaScriptAir }
]

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return `Hello from Netlify function. https://bit.ly/2UXh0fD`
    },
    contentGroup: async (root, args, context) => {
      if (args.name) {
        const result = await sourcesArr.find(item => item.name === args.name)
        return [result]
      }
      return sourcesArr
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
})

exports.handler = server.createHandler()
