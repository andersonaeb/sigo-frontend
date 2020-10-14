import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";

import {  
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CBadge
} from '@coreui/react'

const Requirements = () => {
  
  const history = useHistory()

  let [requirements, setRequirement] = useState([]);
  let currentPage = 1;

  useEffect(() => {        
    axios
      .get("http://localhost:8080/v1/requirements")
      .then((res) => {
        setRequirement(res.data.content);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const getBadge = (status)=>{
    switch (status) {
      case 'CLOSED': return 'success'
      case 'IN_PROGRESS': return 'secondary'
      case 'OPEN': return 'warning'
      default: return 'primary'
    }
  }

  const getStatus = (status)=>{
    switch (status) {
      case 'CLOSED': return 'Atendido'
      case 'IN_PROGRESS': return 'Em atendimento'
      case 'OPEN': return 'Não Atendido'
      default: return ''
    }
  }

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <h4 id="process" className="card-title mb-0">Requerimentos</h4>
            <CButton                  
                  color="primary"
                  size="sm"
                  className="mt-2"
                  onClick={() => {history.push('/requirements/insert')}}
                >Inserir novo requerimento
                </CButton>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={requirements}
            fields={[
              { key: 'id', _classes: 'font-weight-bold' },
              { key: 'title', label: 'Título' },
              { key: 'standardCode', label: 'Norma Técnica' },
              { key: 'status', label: 'Status' }
            ]}            
            tableFilter={{label: "Filtrar", placeholder: "digite um valor"}}
            hover
            noItemsViewSlot={<div className='text-center'>Nenhum requerimento cadastrado</div>}
            sorter                        
            activePage={currentPage}
            clickableRows
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {getStatus(item.status)}
                    </CBadge>
                  </td>
                )
            }}
            onRowClick={(item) => history.push(`/requirements/view/${item.id}`)}
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Requirements