import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import { Header } from './header'

//solo acepta import dinamicos archivos con un export default (ver user-detail-page.tsx)
const UserDetail = lazy(() => import('./user-detail-page'))

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <h1>HOME</h1>
          </Route>

          <Route path="/users" exact>
            <h1>Users</h1>
            {['pepito', 'menganito', 'fulanito'].map(name => (
              <Link to={`/users/${name}`} key={name}>
                {name}
              </Link>
            ))}
          </Route>
          <Route path="/users/:name" component={UserDetail} />
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
