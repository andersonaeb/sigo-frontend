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

const Standards = () => {
  
  const history = useHistory()

  let [standards, setStandards] = useState([]);
  let currentPage = 1;

  useEffect(() => {    
    const url = process.env.REACT_APP_STANDARD_HOST + "/v1/standards";
    axios
      .get(url)
      .then((res) => {
        setStandards(res.data.content);
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
            <h4 id="process" className="card-title mb-0">Normas Técnicas</h4>
            <CButton                  
                  color="primary"
                  size="sm"
                  className="mt-2"
                  onClick={() => {history.push('/standards/insert')}}
                >Inserir nova norma
                </CButton>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={standards}
            fields={[
              { key: 'id', _classes: 'font-weight-bold' },
              { key: 'title', label: 'Título' },
              { key: 'code', label: 'Código' },
              { key: 'keywords', label: 'keywords' }
            ]}            
            tableFilter={{label: "Filtrar", placeholder: "digite um valor"}}
            hover
            noItemsViewSlot={<div className='text-center'>Nenhuma norma técnica cadastrada</div>}
            sorter                        
            activePage={currentPage}
            clickableRows
            onRowClick={(item) => history.push(`/standards/view/${item.id}`)}
          
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Standards