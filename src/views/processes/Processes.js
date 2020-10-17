import React, { useState, useEffect } from 'react'
import axios from "axios";

import {  
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CBadge
} from '@coreui/react'

const Processes = () => {
  
  let [processes, setProcesses] = useState([]);
  let currentPage = 1;

  const getBadge = (status)=>{
    switch (status) {
      case 'Em andamento': return 'success'
      case 'Parado': return 'danger'
      default: return 'primary'
    }
  }

  useEffect(() => {    

    const url = process.env.REACT_APP_PROCESS_HOST + "/v1/processes";
    axios
      .get(url, { crossDomain: false })
      .then((res) => {
        setProcesses(res.data.processes);
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
            <h4 id="process" className="card-title mb-0">Gestão do Processo Industrial</h4>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={processes}
            fields={[
              { key: 'taskName', label: 'Nome da tarefa' },
              { key: 'assignedTo', label: 'Atribuido para' },
              { key: 'status', label: 'Status' }        
            ]}            
            tableFilter={{label: "Filtrar", placeholder: "digite um valor"}}
            hover
            noItemsViewSlot={<div className='text-center'>Nenhuma tarefa encontrada</div>}
            sorter                        
            activePage={currentPage}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }}        
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Processes