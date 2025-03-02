# MARVEL IOP

## Intro

MARVEL IOP is a client frontend application to view the Marvel Characters from API.

## Technical Stack

- [Vite](https://vite.dev/)
- [Node](https://nodejs.org/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Node Package Manager](https://www.npmjs.com/)

## Translation

Not implemented yet, but must be located into `public/locales` folder

## Environment Variables

Env variables are handled differently according to the environment. For local
development, they should be added to a file `.env`, an `.env.example` is
provided with empty fields.

| Environment Variable        | Description                                                  | Example Value                                                                           |
| --------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| NODE_ENV                    | Development or Production                                    | development                                                                             |

### System requirements

- Node.js version: `^v22.14`
- React version: `^19.0.0`
- Package manager: `npm`
- Vite Version: `^6.1.0`
- React Router: `^7.2.0`

## Commands

Start dev server

Obtain an API key from marvel, set the file
REMOVE.env.local with the keys and save

```perl
VITE_REACT_APP_PUBLIC_API_KEY="SET_YOUR_PUBLIC_KEY"
VITE_REACT_APP_PRIVATE_API_KEY="SET_YOUR_PRIVATE_KEY"
```

Rename the REMOVE.env.local to env.local

```sh
mv REMOVE.env.local .env.local
```

The run the serve:

```sh
npm run dev
```

Generate production build:

```sh
npm run build
```

Run the tests:

```sh
npm run test
```

Run the test-coverage:

```sh
npm run test:coverage
```

### ToDo

Schemas: Not implemented yet, but must be located into `src/schema` folder
Jest: finalize Jest configuration, currently have an issue with types.
e2e: setup e2e environment, Cypress.
Ally: validate if required update the components to be wcag 2.1 compliance
MSW: add MockServiceWorker service, providing responses on local, with the mock responses from src/mocks
Pagination: Create and add pagination component
Search: Add more search options included in the API contract
Attribution text: its required to publish the site.

### Endpoint

This app depends on Marvel endpoints, if the endpoint is updated, maybe the app should not work and must be updated.

### Support contact

- [Emiliano M. Esteban](mailto:eoeb@gft.com)
