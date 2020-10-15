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
  CButton
} from '@coreui/react'

const Partners = () => {
  
  const history = useHistory()

  let [partners, setPartners] = useState([]);
  let currentPage = 1;

  useEffect(() => {    
    const url = process.env.REACT_APP_PARTNER_HOST + "/v1/partners";
    axios
      .get(url)
      .then((res) => {
        setPartners(res.data.content);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <h4 id="process" className="card-title mb-0">Consultorias e Assessorias</h4>
            <CButton                  
                  color="primary"
                  size="sm"
                  className="mt-2"
                  onClick={() => {history.push('/partners/insert')}}
                >Inserir nova empresa
                </CButton>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={partners}
            fields={[
              { key: 'id', _classes: 'font-weight-bold' },
              { key: 'companyName', label: 'Empresa' },
              { key: 'cnpj', label: 'CNPJ' }              
            ]}            
            tableFilter={{label: "Filtrar", placeholder: "digite um valor"}}
            hover
            noItemsViewSlot={<div className='text-center'>Nenhuma empresa cadastrada</div>}
            sorter                        
            activePage={currentPage}
            clickableRows
            onRowClick={(item) => history.push(`/partners/view/${item.id}`)}
          
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Partners