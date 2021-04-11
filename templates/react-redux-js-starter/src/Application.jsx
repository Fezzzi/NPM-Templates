import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import createRootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'
import Router from './components/Router'
import { PageContent, PageWrapper } from './styles/blocks/page'

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const history = createBrowserHistory()

  const store = createStore(createRootReducer(history),
    compose(applyMiddleware(routerMiddleware(history), sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : v => v))

  sagaMiddleware.run(rootSaga)

  return (
    <Provider store={store}>
      <PageWrapper id="scrollRoot">
        <ConnectedRouter history={history}>
          <PageContent>
            <Router />
          </PageContent>
        </ConnectedRouter>
      </PageWrapper>
    </Provider>
  )
}
