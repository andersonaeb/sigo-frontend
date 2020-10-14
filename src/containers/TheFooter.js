import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>        
        <span className="ml-1">TCC Arquitetura de Software Distribuído</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">PUC Minas</span>        
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
