import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import client from './graphql-client'
import router from './router.tsx'

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </React.Suspense>
  )
}

export default App
