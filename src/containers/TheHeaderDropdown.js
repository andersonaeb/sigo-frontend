import React from 'react'
import {  
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'

import Log from '../utils/Logger/Log';

import { Auth } from 'aws-amplify';

const TheHeaderDropdown = () => {
  
  const signOut = (e) => {
    e.preventDefault()
    Auth.signOut()    
    .catch(err => Log.error(JSON.stringify(err), 'TheHeader'));
  }
  
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/1.png'}
            className="c-avatar-img"
            alt="Sigo"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem><i className="fa fa-wrench"></i> Configurações</CDropdownItem>              
        <CDropdownItem divider />              
        <CDropdownItem onClick={e => signOut(e)}><i className="fa fa-lock"></i> Sair</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
