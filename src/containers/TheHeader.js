import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Auth } from 'aws-amplify';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CLink,
  CBreadcrumbRouter
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import axios from "axios";

// routes config
import { AdminRoutes, PartnerRoutes, ManagerRoutes } from '../routes'

import logo from '../assets/img/brand/logo_black.png'

import { 
  TheHeaderDropdown,
}  from './index'

const TheHeader = () => {
  
  let [group, setGroup] = useState([]);
  let [routes, setRoutes] = useState([]);  

  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const getGroupName = (group) => {
    if(group === 'manager') {
      return 'Gestor';
    } else if(group === 'partner') {
      return 'Consultor';
    } else {
      return group;
    }
  }

  Auth.currentAuthenticatedUser().then(user => {
    
    setGroup(user.signInUserSession.accessToken.payload['cognito:groups'][0])

    axios.defaults.headers.common = {
      Authorization: 'Bearer ' + user.signInUserSession.accessToken.jwtToken,
    };

    switch(group) {
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
    <CHeader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">        
        <img src={logo} height="30" alt="Sigo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>        
      </CHeaderNav>
      <CHeaderNav className="px-3">     
        <div className="mark group-name">
            {getGroupName(group)}
        </div>   
        <TheHeaderDropdown/>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink>
          </div>
      </CSubheader>

    </CHeader>
  )
}

export default TheHeader
