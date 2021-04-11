import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

const Router = () => (
  <Switch>
    <Route exact path="/" component={() => <>Home of @[Project Name Placeholder]@</>} />
    <Route path="/*" component={() => <Redirect to={{ pathname: '/' }} />} />
  </Switch>
)

export default Router
