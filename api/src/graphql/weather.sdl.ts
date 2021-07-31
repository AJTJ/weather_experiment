export const schema = gql`
  type Weather {
    data: String!
    city: String!
    conditions: String!
    temp: Int!
    icon: String!
  }

  type Query {
    getWeather(data: String!, queryType: String!): Weather!
  }
`
