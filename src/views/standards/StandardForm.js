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
  CSelect,
  CTextarea
} from '@coreui/react'
import axios from "axios";

const StandardForm = () => {
  
  const history = useHistory()
  
  const [errorInsert, setErrorInsert] = React.useState(0)
  
  let inserting = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    inserting = true;

    const standard = {
      title: event.target.title.value,
      code: event.target.code.value,
      category: event.target.category.value,
      keywords: event.target.keywords.value,
      description: event.target.description.value
    };

    axios
      .post(process.env.REACT_APP_STANDARD_HOST + "/v1/standards", standard)
      .then((res) => {
        inserting = false;
        history.push('/standards')
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
            Inserir nova norma técnica
          </CCardHeader>
          <CCardBody>
            <CAlert color="danger" show={errorInsert} closeButton>
              Erro ao inserir norma, verifique os dados informados.
            </CAlert>
            <CForm onSubmit={handleSubmit} className="form-horizontal">
              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="title">Título da norma:</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="title" name="title" placeholder="Título" />                  
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="code">Código:</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="code" name="code" placeholder="Código" />                  
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="category">Categoria:</CLabel>
                </CCol>
                <CCol xs="12" md="9">                  
                  <CSelect custom id="category" name="category">
                    <option>Selecione uma categoria</option>
                    <option value="Informação e documentação">Informação e documentação</option>
                    <option value="Têxteis e do vestuário">Têxteis e do vestuário</option>
                    <option value="Segurança contra incêndio">Segurança contra incêndio</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="keywords">Palavras-chaves:</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="keywords" name="keywords" placeholder="Palavras-chaves" />                  
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
                    placeholder="Explicação sobre a norma técnica..." 
                  />
                </CCol>
              </CFormGroup>
              <div className="text-right">
              <CButton     
                  type="submit"             
                  color="success"                  
                  className="mt-2">
                  {"Inserir norma"}{" "}{inserting ? (<i className="fa fa-spin fa-circle-o-notch" />) : null}
                </CButton>
            </div>
            </CForm>            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default StandardForm
