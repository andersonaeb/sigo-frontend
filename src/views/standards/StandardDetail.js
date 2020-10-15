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

const StandardDetail = ({match}) => {
  
  const history = useHistory()

  let [standard, setStandard] = useState([]);
  let [modal, setModal] = useState(false);
  let excluding = false;

  const toggle = ()=> { setModal(!modal); }

  const remove = () => {
    excluding = true;
    axios
      .delete(process.env.REACT_APP_STANDARD_HOST + "/v1/standards/" + match.params.id)
      .then((res) => {
        setModal(!modal);
        history.push('/standards')
      })
      .catch((error) => {
        console.error("Error", error);
      });    
  }

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_STANDARD_HOST + "/v1/standards/" + match.params.id)
      .then((res) => {
        setStandard(res.data);
      })
      .catch((error) => {
        console.error("Error", error);
        history.push('/standards')
      });
  }, []);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            ID da norma técnica: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td>Título</td>
                    <td><strong>{standard.title}</strong></td>
                  </tr>
                  <tr>
                    <td>Código</td>
                    <td><strong>{standard.code}</strong></td>
                  </tr>
                  <tr>
                    <td>Categoria</td>
                    <td><strong>{standard.category}</strong></td>
                  </tr>
                  <tr>
                    <td>Palavras-chave</td>
                    <td><strong>{standard.keywords}</strong></td>
                  </tr>
                  <tr>
                    <td>Descrição</td>
                    <td>{standard.description}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-right">
                <CButton                  
                    color="danger"                    
                    className="mt-2"
                    onClick={toggle}
                  >Excluir norma
                  </CButton>
                  <CModal show={modal} onClose={toggle}>
                    <CModalHeader closeButton>Excluir norma</CModalHeader>
                    <CModalBody>
                      Tem certeza que deseja excluir a norma técnica <strong>{standard.title}</strong>?
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

export default StandardDetail
