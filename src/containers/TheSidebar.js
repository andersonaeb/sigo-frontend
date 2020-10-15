import React, { useState } from 'react'
import { Auth, nav } from 'aws-amplify';
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

// sidebar nav config
import { AdminNav, PartnerNav, ManagerNav } from './_nav'

import logo from '../assets/img/brand/logo.png'

const TheSidebar = () => {
  
  let [navigator, setNavigator] = useState([]);
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow);

  Auth.currentAuthenticatedUser().then(user => {
    switch(user.signInUserSession.accessToken.payload['cognito:groups'][0]) {
      case 'admin':
        setNavigator(AdminNav);
        break;
      case 'partner':
        setNavigator(PartnerNav);
        break;
      case 'manager':
        setNavigator(ManagerNav);
        break;
      default:
    }
  });

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src={logo} className="c-sidebar-brand-full m-3" alt="Sigo" height="30"/>
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigator}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
