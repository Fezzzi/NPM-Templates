# @[Project Name Placeholder]@

## Stack
Only technologies with significant effect on the project's architecture are listed, logically grouped together.
  - [React](https://reactjs.org/)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom) + [history](https://www.npmjs.com/package/history) + [react-router-redux](https://www.npmjs.com/package/react-router-redux) + [connected-react-router](https://github.com/supasate/connected-react-router)
  - [redux](https://redux.js.org/) + [redux-saga](https://redux-saga.js.org/)
  - [prop-types](https://www.npmjs.com/package/prop-types)
  - [axios](https://www.npmjs.com/package/axios)
  - [styled-components](https://styled-components.com/)
  - [babel](https://babeljs.io/) + [webpack](https://webpack.js.org/)

### Environmental variables
- `SERVER_PORT` - **Required** (in case it is not left blank on purpose)
- `PROXY_PORT` - Port dev proxy starts on, defaults to `8080`
- `DEV_PORT` - Port dev server start on, defaults to `8081`
- `DEBUG` - Makes login/logout bypass authentication, will be replaced after auth is properly implemented on both BE and FE

### Setting up the application
1. execute `npm install` or `yarn install`
1. copy `.env.example` > `.env` and set environmental variables accordingly
1. preferably run `npm run configure` or `yarn configure` to install git hooks. **Notice**, these expect the root of git
   repository (the `.git` file) to be located under the `../` path. In case of different structure, head to the `package.json`
   file and modify appropriate script.

### Running the application locally
1. execute `npm install` to download packages from the npm repository
1. execute `npm start` to start webpack dev server on its default port `8081`


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
npm run build # outputs to the ./dist directory
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
