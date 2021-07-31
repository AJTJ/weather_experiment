import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import WeatherCell from 'src/components/WeatherCell'

enum SearchEnum {
  zip = 'zip',
  city = 'city',
}

const HomePage = () => {
  const [searchType, setSearchType] = useState(SearchEnum.zip)
  const [input, setInput] = useState(undefined)
  const onSubmit = ({ data }) => {
    setInput(data)
  }

  return (
    <>
      <h1>Get My Weather</h1>
      <div>
        <div>Search by:</div>
        <button
          onClick={() => {
            setSearchType(SearchEnum.zip)
            setInput(undefined)
          }}
        >
          Zip
        </button>
        <button
          onClick={() => {
            setSearchType(SearchEnum.city)
            setInput(undefined)
          }}
        >
          City
        </button>
      </div>
      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        {searchType === SearchEnum.zip && (
          <TextField
            name="data"
            placeholder="Zip code"
            maxLength="5"
            validation={{ required: true, pattern: /^\d{5}$/ }}
          />
        )}
        {searchType === SearchEnum.city && (
          <TextField
            name="data"
            placeholder="City Name"
            validation={{ required: true }}
          />
        )}
        <Submit>Go</Submit>
      </Form>
      {input && <WeatherCell data={input} queryType={searchType} />}
    </>
  )
}

export default HomePage
