import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

// AWS Amplify
import { Auth } from 'aws-amplify';
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

Auth.configure(aws_exports);

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
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