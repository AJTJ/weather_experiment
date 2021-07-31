import type { FindWeatherQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindWeatherQuery($data: String!, $queryType: String!) {
    weather: getWeather(data: $data, queryType: $queryType) {
      data
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ weather }: CellSuccessProps<FindWeatherQuery>) => {
  return (
    <section>
      <h1>{weather.city}</h1>
      <h2>
        <img src={weather.icon} style={{ maxWidth: '2rem' }} alt="" />
        <span>
          {weather.temp}°F and {weather.conditions}
        </span>
      </h2>
    </section>
  )
}
