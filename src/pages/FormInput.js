import React from 'react'
import Styled from 'styled-components'
import { Container, Row, Col, Button } from 'reactstrap'

const Form = Styled.form`
    background: #f5f3f3;
    border-radius: 10px;
    overflow: hidden;
    margin-top:50px;
    margin-bottom:20px;
`
const FormTitle = Styled(Col)`
    display: block;
    font-family: bold;
    font-size: 30px;
    color: #4b2354;
    line-height: 1.2;
    text-align: center;
    margin-top:10%;
`
const InputText = Styled.input`
  box-sizing: border-box;
  padding-left:20px;
  margin: auto;
  margin-top:20px;
  display: block;
  width: 80%;
  height:50px;
  border:none;
  outline-style: none;
  border-radius: 20px;
  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);
`
const InputButton = Styled(Button)`
  box-sizing: border-box;
  margin: auto;
  margin-top:40px;
  margin-bottom:20%;
  width: 80%;
  height:50px;
  border:none;
  border-radius: 20px;
  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);
`
class FormInput extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="3" />
          <Col sm="5">
            <Form>
              <FormTitle> INPUT DATA</FormTitle>
              <InputText type="text" placeholder="Full Name" required />
              <InputText type="email" placeholder="Email" required />
              <InputText type="text" placeholder="Telephone" required />
              <InputButton style={{ display: 'block' }} color="success">
                Input{' '}
              </InputButton>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default FormInput
