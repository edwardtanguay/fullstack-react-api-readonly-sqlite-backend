# Fullstack React site that uses backend API with SQLite data source

This is an example of a fullstack app that has an API in the backend which serves data from a db.sqlite file, i.e. a SQLite database. An SQLite database has the advantage that it is simply a file which can be copied, moved and deleted like any other file yet enables an quite robust SQL experience providing the ability to have dozens or hundreds of tables, and the powerful SQL query language with JOIN, UNION, GROUP BY, DISTINCT, etc. A disadvantage of SQLite is the lack of user management including authentication/authorization, but you can handle this externally, and particularly if you have a readonly SQLite database for which all data in the database is accessible to any user, as is the case in this project, SQLite gives you a very fast solution to data querying for an API.

![grafik](https://starters.tanguay.eu/images/starters/sqliteReadonly.png)

## features

- Node/Express API
- TypeScript
  - two interfaces: `IRawBooks`, `IBooks`
- ES6 modules
- three simple routes:
  - `/` - API instructions
  - `/books` - all books
  - `/books/3` - book with id 3
- simple MVC structure
  - `server.ts` - responsible for req/res routes
  - `model.ts` - responsible for data functions
- simple example of custom middleware (logger)
- `config.ts` has centralized data 
- `test.rest` used for manual testing (need [REST Client VSCode extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client))
- cors implemented

## install

- go to your projects directory
  - e.g. `cd ~/projects`
- in your projects directory, create your new site e.g. **backend001** by cloning this project 
  - `git clone git@github.com:edwardtanguay/backend-simple-readonly-json-api.git backend001`
- open your newly created site in VSCode
  - `code backend001`
- inside VSCode, open the VSCode terminal
  - **CTRL-`**
- delete the connection to this repository by deleting the Git repository
  - `rm -rf .git`
- create a new local Git repository
  - `git init -b main`
- install node_modules
  - `npm i`
- start your site and click given link to view website
  - `npm run dev`

## more starters, templates and frameworks

https://starters.tanguay.eu
