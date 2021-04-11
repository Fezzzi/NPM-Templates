This document describes the **Nohejbal App - Web Application** project by providing:
 - overview of the stack used
 - instructions on how to run the project and use other scripts
 - high level description of the architecture 
 - documentation for the internal structure

## Stack
Only technologies with significant effect on the project's architecture are listed, logically grouped together.
  - [React](https://reactjs.org/)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom) + [history](https://www.npmjs.com/package/history) + [react-router-redux](https://www.npmjs.com/package/react-router-redux) + [connected-react-router](https://github.com/supasate/connected-react-router)
  - [redux](https://redux.js.org/) + [redux-saga](https://redux-saga.js.org/)
  - [prop-types](https://www.npmjs.com/package/prop-types)
  - [axios](https://www.npmjs.com/package/axios)
  - [styled-components](https://styled-components.com/)
  - [babel](https://babeljs.io/) + [webpack](https://webpack.js.org/)

## CLI scripts
The project uses `npm` package manager. Even though the scripts alone can be executed
using `yarn` package manager as well, their correct functioning cannot be guaranteed because
`yarn` uses different techniques of package version resolving than `npm` and only `package-lock.json` is provided.

**Start the proxy and the development servers**
```
npm start # proxy defaults to port 8080, dev to 8081
```

**Start only the proxy server**
```
npm start-proxy # proxy defaults to port 8080
```

**Start only the development server**
```
npm start-dev # dev server defaults to port 8081
```

**Transpile and bundle the application**
```
npm run build # outputs to the /WEB/dist directory
```

**Build the latest WEB documentation from JSDocs + generate docs entrypoint**
```
npm run build-docs # outputs to the /WEB/docs directory
```

**Performs eslint code style linting**
```
npm run lint # outputs indentified errors and warnings to the console
```

**Performs eslint code style linting and attempts to fix the issues** 
```
npm run lint-fix # outputs unresolvable issues to the console
```

**Installs git hooks used during development**
```
npm run configure
```

### Running the Web application locally
In the `/WEB` directory:
  1. execute `npm install` to download packages from the npm repository
  1. execute `npm start` to start webpack dev server on its default port `8081`

## Architecture
Application architecture ...
