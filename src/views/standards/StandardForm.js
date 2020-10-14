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
  CSelect
} from '@coreui/react'
import axios from "axios";

const PartnerDetail = () => {
  
  const history = useHistory()
  
  const [errorInsert, setErrorInsert] = React.useState(0)
  
  let inserting = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    inserting = true;

    const partner = {
      companyName: event.target.companyName.value,
      cnpj: event.target.cnpj.value,
      state: event.target.state.value,
      city: event.target.city.value
    };

    axios
      .post("http://localhost:8080/v1/partners", partner)
      .then((res) => {
        inserting = false;
        history.push('/partners')
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
            Inserir nova empresa
          </CCardHeader>
          <CCardBody>
            <CAlert color="danger" show={errorInsert} closeButton>
              Erro ao inserir empresa, verifique os dados informados.
            </CAlert>
            <CForm onSubmit={handleSubmit} className="form-horizontal">
              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="companyName">Nome da empresa:</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="companyName" name="companyName" placeholder="Empresa" />                  
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="cnpj">CNPJ:</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="cnpj" name="cnpj" maxLength="14" placeholder="CNPJ" />                  
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="Estado">Estado:</CLabel>
                </CCol>
                <CCol xs="12" md="9">                  
                  <CSelect custom id="state" name="state">
                    <option>Selecione um estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    <option value="EX">Estrangeiro</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3" className="col-form-label">
                  <CLabel htmlFor="cidade">Cidade:</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="city" name="city" placeholder="Cidade" />                  
                </CCol>
              </CFormGroup>
              <div className="text-right">
              <CButton     
                  type="submit"             
                  color="success"                  
                  className="mt-2">
                  {"Inserir empresa"}{" "}{inserting ? (<i className="fa fa-spin fa-circle-o-notch" />) : null}
                </CButton>
            </div>
            </CForm>            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PartnerDetail
