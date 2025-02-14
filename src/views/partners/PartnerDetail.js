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
  CModalFooter
} from '@coreui/react'
import axios from "axios";

const PartnerDetail = ({match}) => {
  
  const history = useHistory()

  let [partner, setPartner] = useState([]);
  let [modal, setModal] = useState(false);
  let excluding = false;

  const toggle = ()=> { setModal(!modal); }

  const remove = () => {
    excluding = true;
    axios
      .delete(process.env.REACT_APP_PARTNER_HOST + "/v1/partners/" + match.params.id)
      .then((res) => {
        setModal(!modal);
        history.push('/partners')
      })
      .catch((error) => {
        console.error("Error", error);
      });    
  }

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_PARTNER_HOST + "/v1/partners/" + match.params.id)
      .then((res) => {
        setPartner(res.data);
      })
      .catch((error) => {
        console.error("Error", error);
        history.push('/partners')
      });
  }, []);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            ID da empresa: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Nome da empresa</td>
                    <td>{partner.companyName}</td>
                  </tr>
                  <tr>
                    <td>CNPJ</td>
                    <td>{partner.cnpj}</td>
                  </tr>
                  <tr>
                    <td>Estado</td>
                    <td>{partner.state}</td>
                  </tr>
                  <tr>
                    <td>Cidade</td>
                    <td>{partner.city}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-right">
                <CButton                  
                    color="danger"                    
                    className="mt-2"
                    onClick={toggle}
                  >Excluir Empresa
                  </CButton>
                  <CModal show={modal} onClose={toggle}>
                    <CModalHeader closeButton>Excluir empresa</CModalHeader>
                    <CModalBody>
                      Tem certeza que deseja excluir a empresa <strong>{partner.companyName}</strong>?
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

export default PartnerDetail
