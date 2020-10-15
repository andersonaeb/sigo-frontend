import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Auth } from 'aws-amplify';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink
} from '@coreui/react'

import logo from '../assets/img/brand/logo_black.png'

import { 
  TheHeaderDropdown,
}  from './index'

const TheHeader = () => {
  
  let [group, setGroup] = useState([]);

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
    if(group == 'manager') {
      return 'Gestor';
    } else if(group == 'partner') {
      return 'Consultor';
    } else {
      return group;
    }
  }

  Auth.currentAuthenticatedUser().then(user => setGroup(user.signInUserSession.accessToken.payload['cognito:groups'][0]));

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

    </CHeader>
  )
}

export default TheHeader
