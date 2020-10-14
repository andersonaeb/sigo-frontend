import React from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { SignIn } from "aws-amplify-react";
import NotificationAlert from "react-notification-alert";
import Log from "../../../utils/Logger/Log";
import logo from '../../../assets/img/brand/logo_black.png'

class DefaultSignIn extends SignIn {
  constructor(props) {
    super(props);

    this.state = {
      isLoggingIn: false
    };
    this.onSignIn = this.onSignIn.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  error(err) {    
    Log.error(err, "DefaultAuth.SignIn");
    const options = {
      place: "tl",
      message: (
        <div>
          <div>{err.message ? "Usuário e/ou senha inválidos" : err}</div>
        </div>
      ),
      type: "danger",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.notify.notificationAlert(options);
  }

  async onSignIn() {
    if (!this.inputs.username) {
      this.error("O E-mail não deve ser vazio");
    } else if (!this.inputs.password) {
      this.error("A senha não deve ser vazias");
    } else {
      this.setState({ isLoggingIn: true });
      await this.signIn();
      this.setState({ isLoggingIn: false });
    }
  }

  render() {    
    const { authState } = this.props;
    if (
      authState !== "signIn" &&
      authState !== "signedUp" &&
      authState !== "signedOut"
    ) {
      return null;
    }

    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <NotificationAlert
          ref={c => {
            this.notify = c;
          }}
        />
        <CContainer>
          <CRow className="justify-content-center row">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <div className="text-center mb-5">
                      <img src={logo} height="60" alt="Sigo"/>
                    </div>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Acesse sua conta</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" key="username" name="username" onChange={this.handleInputChange} placeholder="E-mail" autoComplete="E-mail" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" key="password" name="password" onChange={this.handleInputChange} placeholder="Password" autoComplete="current-password" />
                      </CInputGroup>
                      <div className="text-right">
                          <CButton color="primary" className="px-4" onClick={this.onSignIn}>
                            {"Entrar"}{" "}{this.state.isLoggingIn ? (<i className="fa fa-spin fa-circle-o-notch" />) : null}
                          </CButton>
                      </div>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

// export default DefaultSignIn;
export default DefaultSignIn;
