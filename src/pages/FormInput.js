import React from 'react'
import Styled from 'styled-components'
import { Container, Row, Col, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { insertDataTable } from '../redux/actions/formInput'

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
  constructor() {
    super()
    this.state = {
      id: '',
      fullName: 'asas',
      email: 'asas@gmail.com',
      phone: '082323'
    }
  }
  Submit = async data => {
    let id = this.props.dataContacts.length + 1
    // console.log(id)

    let addData = {
      id: 3,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone
    }
    let newData = this.props.dataContacts.concat(addData)
    // console.log(newData)

    this.props.dispatch(insertDataTable(newData))
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm="3" />
          <Col sm="5">
            <Form
              onSubmit={event => {
                event.preventDefault()
                this.Submit(this.state)
              }}
            >
              <FormTitle> INPUT DATA</FormTitle>
              <InputText
                type="text"
                placeholder="Full Name"
                value={this.state.fullName}
                onChange={event => {
                  this.setState({
                    fullName: event.target.value
                  })
                }}
                required
              />
              <InputText
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={event => {
                  this.setState({
                    email: event.target.value
                  })
                }}
                required
              />
              <InputText
                type="text"
                placeholder="Telephone"
                value={this.state.phone}
                onChange={event => {
                  this.setState({
                    phone: event.target.value
                  })
                }}
                required
              />
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

const mapStateToProps = state => {
  // console.log(state.getData.Data)

  return {
    dataContacts: state.getData.dataContacts
  }
}

export default connect(mapStateToProps)(FormInput)
