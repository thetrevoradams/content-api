# content-api

This is a [GraphQL](https://graphql.org/) API set up to run on Netlify (lambda) [functions](https://www.netlify.com/docs/functions/). 

### Basics
 - Most data is pulled from local `JSON` files, whose structure match the schema structure
 - Some data is fetched from various APIs
 - The `site/index.html` file is in place to allow a `GraphiQL` interface to be shown when the the root level domain is visited when deployed

---

This is easily customizable for those wishing to fork or copy the setup. 
 - Simply update the files within the `contentSources` folder (and rename import paths for renamed files within `functions/graphql`)
 - Likewise, update API paths for fetched data within `functions/graphql`
