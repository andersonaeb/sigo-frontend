import React from 'react'
import {  
  CCard,
  CCardBody,  
  CCardHeader,
  CCol
} from '@coreui/react'

const Dashboard = () => {
  return (
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>POC TCC Puc Minas</strong>
        </CCardHeader>
        <CCardBody>
          Este projeto é uma prova de conceito, do curso de pós-graduação de Arquitetura de Software Distribuido
          da PUC Minas - Belo Horizonte.
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default Dashboard
