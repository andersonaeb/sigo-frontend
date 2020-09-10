import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/icon.png'


const defaultProps = {};

class DefaultHeader extends Component {

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Sigo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Sigo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>          
        </Nav>
        <Nav className="ml-auto" navbar>          
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/1.png'} className="img-avatar" alt="" />
            </DropdownToggle>
            <DropdownMenu right>                            
              <DropdownItem><i className="fa fa-wrench"></i> Configurações</DropdownItem>              
              <DropdownItem divider />              
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Sair</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = {
  children: PropTypes.node,
  onLogout: PropTypes.func
};

DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
