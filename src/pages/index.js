import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { searchTodos } from '../graphql/queries'

async function search(variables) {
  let result
  try {
    result = await API.graphql({
      query: searchTodos,
      variables,
      authMode: 'AWS_IAM',
    })
  } catch (error) {
    result = error
  }
  return result
}

export default function HomePage(props) {
  const [todos, setTodos] = useState()

  useEffect(() => {
    ;(async () => {
      setTodos(
        await search({
          sort: { direction: 'asc', field: 'id' },
        })
      )
    })()
  }, [])

  return (
    <main>
      <h1>Todos</h1>
      <pre>
        <code>{JSON.stringify(todos, null, 2)}</code>
      </pre>
    </main>
  )
}
