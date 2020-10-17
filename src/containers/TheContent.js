import React, { Suspense, useState } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import { Auth } from 'aws-amplify';

// routes config
import { AdminRoutes, PartnerRoutes, ManagerRoutes } from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {

  let [routes, setRoutes] = useState([]);  

  Auth.currentAuthenticatedUser().then(user => {
    switch(user.signInUserSession.accessToken.payload['cognito:groups'][0]) {
      case 'admin':
        setRoutes(AdminRoutes);
        break;
      case 'partner':
        setRoutes(PartnerRoutes);
        break;
      case 'manager':
        setRoutes(ManagerRoutes);
        break;
      default:
    }
  });

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
