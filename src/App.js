import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

// AWS Amplify
import Amplify from 'aws-amplify';
import { VerifyContact, withAuthenticator } from 'aws-amplify-react';
import { DefaultConfirmSignIn, DefaultForgotPassword, DefaultSignIn, DefaultRequireNewPassword} from './containers/DefaultAuth'
import aws_exports from './aws-exports';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

Amplify.configure(aws_exports);

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default withAuthenticator(App, false, [
  <DefaultSignIn federated={aws_exports.federated}/>,
  <DefaultConfirmSignIn/>,
  <VerifyContact/>,   
  <DefaultForgotPassword/>,
  <DefaultRequireNewPassword/>
]);