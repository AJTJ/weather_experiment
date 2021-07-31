Redwood PR
- need --typescript annotation for the TS docs
- the @redwoodjs/forms does not seem to ship types with it.
- running  yarn rw type-check produces this:

```
src/functions/graphql.ts:16:5 - error TS2322: Type 'ServicesCollection' is not assignable to type 'Services'.
  Index signatures are incompatible.
    Type 'Services' is not assignable to type 'Resolver'.
      Type 'Services' provides no match for the signature '(...args: unknown[]): unknown'.

16     services: makeServices({ services }),
       ~~~~~~~~

  ../node_modules/@redwoodjs/api/dist/makeMergedSchema/makeMergedSchema.d.ts:11:5
    11     services: Services;
           ~~~~~~~~
    The expected type comes from property 'services' which is declared here on type '{ schemas: { [key: string]: { schema: Record<string, unknown>; resolvers: Record<string, unknown>; }; }; services: Services; schemaDirectives?: { [name: string]: typeof SchemaDirectiveVisitor; }; schemaOptions?: Partial<...>; }'


Found 1 error.

error Command failed with exit code 2.
```
- running `yarn rw generate cell GetWeather` and then deleting all the files that are produced seems to leave error artifacts in VSCode which required me to run `Developer: Reload Window` for them to go away
