# Thriver - Frontend Template

This is a barebones frontend application designed to be used as a jumping-off-point for React+GraphQL projects. It is built with the following technologies:

- [Vite](https://vitejs.dev/)

  Vite is a JavaScript bundler with a focus on speed. It's used here to package the application together for the browser, with support for hot module reloading during development.

- [React](https://reactjs.org/)

  React is a reactive UI framework that allows you to build reusable components. It can be used in both the browser and native environments. We use it here to render the UI and manage state.

  - [React Router](https://reactrouter.com/)

    React Router is a frontend routing framework for React. It's what turns React from a simple component library into a full frontend application framework. We use it here for defining a URL structure for our application, and providing fast client-side routing between pages.

- [Apollo Client](https://www.apollographql.com/docs/react/)

  Apollo is the de-facto standard GraphQL client for React. It provides a simple interface for executing GraphQL queries and mutations, and caching the results. We use it here to communicate with our GraphQL API.

- [GraphQL Code Generator](https://www.graphql-code-generator.com/)

  GraphQL Code Generator is the modern replacement for Apollo's own code generation tools. It allows us to utilize GraphQL's strongly-typed schema to generate TypeScript types for our queries, mutations, and fragments, as well as React hooks for executing them which automatically use Apollo under the hood.

- [TypeScript](https://www.typescriptlang.org/)

  TypeScript is a statically-typed superset of JavaScript. It allows us to catch bugs at compile-time, and provides a better development experience with features like auto-complete and type checking.

- [GraphQL](https://graphql.org/)

  GraphQL is a strongly-typed query language for APIs with built-in support for introspection. It allows us to define the schema in our API application, and consume it from the frontend with

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
