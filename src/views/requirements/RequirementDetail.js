import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CBadge
} from '@coreui/react'
import axios from "axios";

const RequirementDetail = ({match}) => {
  
  const history = useHistory()

  let [requirement, setRequirement] = useState([]);
  let [modal, setModal] = useState(false);
  let excluding = false;

  const toggle = ()=> { setModal(!modal); }

  const remove = () => {
    excluding = true;
    axios
      .delete(process.env.REACT_APP_PARTNER_HOST + "/v1/requirements/" + match.params.id)
      .then((res) => {
        setModal(!modal);
        history.push('/requirements')
      })
      .catch((error) => {
        console.error("Error", error);
      });    
  }
  
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
  
  const formatDate = (dateString) => {
    if(dateString) {
      let date = new Date(dateString);
      return date.getUTCDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    } else {
      return '';
    }
  }

  useEffect(() => {    
    axios
      .get(process.env.REACT_APP_PARTNER_HOST + "/v1/requirements/" + match.params.id)
      .then((res) => {
        setRequirement(res.data);
      })
      .catch((error) => {
        console.error("Error", error);
        history.push('/requirements')
      });
  }, []);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            ID do requerimento: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Título</td>
                    <td>{requirement.title}</td>
                  </tr>
                  <tr>
                    <td>Código da Norma Técnica</td>
                    <td>{requirement.standardCode}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>
                      <CBadge color={getBadge(requirement.status)}>
                        {getStatus(requirement.status)}
                      </CBadge>
                    </td>
                  </tr>                    
                  <tr>
                    <td>Validade do requerimento</td>
                    <td>{formatDate(requirement.validity)}</td>
                  </tr>
                  <tr>
                    <td>Descrição</td>
                    <td>{requirement.description}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-right">
                <CButton                  
                    color="danger"                    
                    className="mt-2"
                    onClick={toggle}
                  >Excluir requerimento
                  </CButton>
                  <CModal show={modal} onClose={toggle}>
                    <CModalHeader closeButton>Excluir requerimento</CModalHeader>
                    <CModalBody>
                      Tem certeza que deseja excluir o requerimento <strong>{requirement.title}</strong>?
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="danger" onClick={remove}>                        
                        {"Excluir"}{" "}{excluding ? (<i className="fa fa-spin fa-circle-o-notch" />) : null}
                      </CButton>
                      <CButton color="secondary" onClick={toggle}>Cancelar</CButton>
                    </CModalFooter>
                  </CModal>
              </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RequirementDetail
