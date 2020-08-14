import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import unsplash from './unsplash'

const App = () => {
  // react hooks (useState)
  const [results, setResults] = useState([])
  const [count, setCount] = useState(0)

  const onSubmitHandle = async (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      const searchTerm = event.target.value
      const response = await unsplash.get('/search/photos', {
        params: { query: searchTerm },
      })
      const results = response.data.results
      setResults(results) // re-render
    }
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Search Images</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form action="get">
            <TextField
              id="filled-basic"
              label="Search Keyword"
              variant="outlined"
              onKeyPress={onSubmitHandle}
            />
          </form>
        </Grid>
      </Grid>
      <Grid container>
        {results &&
          results.map((result: any) => {
            return (
              <div key={result.id}>
                <Grid item xs={4}>
                  <img src={result.urls.small} alt="" />
                </Grid>
              </div>
            )
          })}
      </Grid>
    </Container>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
