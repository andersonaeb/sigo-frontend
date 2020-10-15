import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CAlert,
  CTextarea
} from '@coreui/react'
import axios from "axios";

const RequirementForm = () => {
  
  const history = useHistory()
  
  const [errorInsert, setErrorInsert] = React.useState(0)
  
  let inserting = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    inserting = true;

    const requirement = {
      title: event.target.title.value,
      status: 'OPEN',
      standardCode: event.target.standardCode.value,
      description: event.target.description.value,
      validity: event.target.validity.value
    };

    axios
      .post(process.env.REACT_APP_PARTNER_HOST + "/v1/requirements", requirement)
      .then((res) => {
        inserting = false;
        history.push('/requirements')
      })
      .catch((error) => {
        inserting = false;
        setErrorInsert(10);
        console.error("Error", error);
      });    
  }

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Inserir novo requerimento
          </CCardHeader>
          <CCardBody>
            <CAlert color="danger" show={errorInsert} closeButton>
              Erro ao inserir requerimento, verifique os dados informados.
            </CAlert>
            <CForm onSubmit={handleSubmit} className="form-horizontal">
              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="title">Título:</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="title" name="title" placeholder="Título do requerimento" required />                  
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="standardCode">Código da Norma Técnica (Opcional):</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="standardCode" name="standardCode" placeholder="Código da norma técnica" />                  
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="Validade">Validade (Opcional):</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="date" id="validity" name="validity" placeholder="Validade" />                  
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                  <CCol md="3" className="col-form-label">
                    <CLabel htmlFor="description">Descrição</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="description" 
                      id="description" 
                      rows="9"
                      placeholder="Explicação sobre o requerimento..." 
                    />
                  </CCol>
                </CFormGroup>
              <div className="text-right">
              <CButton     
                  type="submit"             
                  color="success"                  
                  className="mt-2">
                  {"Inserir requerimento"}{" "}{inserting ? (<i className="fa fa-spin fa-circle-o-notch" />) : null}
                </CButton>
            </div>
            </CForm>            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RequirementForm
