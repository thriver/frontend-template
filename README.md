# Thriver - Frontend Template

This is a barebones frontend application designed to be used as a jumping-off-point for React+GraphQL projects. It is built with the following technologies:

- [Vite](https://vitejs.dev/) for development and bundling
- [React](https://reactjs.org/) for the frontend
- [Apollo Client](https://www.apollographql.com/docs/react/) for GraphQL
- [GraphQL Code Generator](https://www.graphql-code-generator.com/) for generating TypeScript types from GraphQL queries
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [GraphQL](https://graphql.org/) for the interface between frontend and backend

## Setup

```bash
# Install dependencies
$ npm install
# Regenerate GraphQL, hooks, etc; run this any time you change the GraphQL schema or queries
$ npm run gql:codegen
# Run the development server
$ npm run dev
```

## Basic Structure

This repo is structured into two main directories:

- `src/pages` - Top-level "pages" that are rendered by React Router
- `src/components` - Reusable components that are used by pages and may be shared across pages

## GraphQL

GraphQL queries are defined inline inside pages and components using the `gql` tag from `@apollo/client`. For example:

```tsx
import { gql } from '@apollo/client'

gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`
```

Upon running `npm run gql:codegen`, this will automatically produce TypeScript types for the query's input and output, as well as a React hook for executing the query. For example:

```tsx
import { useUserQuery } from '../generated/graphql'

// ...

const { data, loading, error } = useUserQuery({
  variables: { id: '123' }
})
```

### Fragments

Fragments should be defined at the component level, and declare the fields of data that the component needs. For example, for a `UserPreview` component:

```tsx
import { gql } from '@apollo/client'

gql`
  fragment UserPreview on User {
    name
    email
  }
`
```

This fragment can then be used in a query:

```tsx
import { gql } from '@apollo/client'

gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      ...UserPreview
    }
  }
`
```

The fragment will be automatically resolved; you don't need to do anything special to make it work.
