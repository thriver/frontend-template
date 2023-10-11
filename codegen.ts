import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: 'src/**/*.{ts,tsx}',
  ignoreNoDocuments: true,
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        {
          add: {
            content:
              '/** THIS FILE IS AUTO-GENERATED **/\n/** DO NOT EDIT! **/\n/* eslint-disable */\n'
          }
        },
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'fragment-matcher'
      ]
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  },
  config: {
    namingConvention: 'keep',
    avoidOptionals: {
      field: true
    },
    nonOptionalTypename: true,
    skipTypeNameForRoot: true,
    immutableTypes: true,
    declarationKind: 'interface',
    dedupeOperationSuffix: true,
    onlyOperationTypes: true,
    arrayInputCoercion: false
  }
}

export default config
