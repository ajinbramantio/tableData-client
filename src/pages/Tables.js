import React from 'react'
import { connect } from 'react-redux'
import Styled from 'styled-components'
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

const FormTitle = Styled(Col)`
    display: block;
    font-family: bold;
    font-size: 30px;
    color: #4b2354;
    line-height: 1.2;
    text-align: center;
`
const InputText = Styled.input`
  box-sizing: border-box;
  padding-left:20px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  width: 80%;
  height:50px;
  border:none;
  outline-style: none;
  border-radius: 20px;
  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);
`
class Tables extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      id: '',
      fullName: '',
      email: '',
      phone: ''
    }

    this.toggleEdit = this.toggleEdit.bind(this)
  }
  toggleEdit(data) {
    this.setState(prevState => ({
      modal: !prevState.modal,
      id: data.id,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone
    }))
  }
  cancelEdit(data) {
    this.setState({
      modal: !data.modal
    })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" xs="12">
            <Table
              xs="12"
              style={{
                backgroundColor: '#f5f3f3',
                marginTop: '50px',
                marginBottom: '100px'
              }}
              bordered
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>No. Tlpn</th>
                  <th colSpan="2" style={{ textAlign: 'center' }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.dataContacts.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.fullName}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>
                        {' '}
                        <Button
                          color="warning"
                          onClick={event => {
                            this.toggleEdit(data)
                          }}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        {' '}
                        <Button color="danger">remove</Button>
                      </td>
                    </tr>
                  )
                })}

                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleEdit}
                  className={this.props.className}
                >
                  <ModalHeader
                    toggle={event => {
                      event.preventDefault()
                      this.cancelEdit(this.state)
                    }}
                  >
                    Form Edit
                  </ModalHeader>
                  <ModalBody>
                    <Container>
                      <Row>
                        <Col sm="12" xs="12">
                          <FormTitle> EDIT DATA </FormTitle>
                          <form>
                            <InputText
                              type="text"
                              name="fullName"
                              value={this.state.fullName}
                              onChange={event => {
                                this.setState({
                                  fullName: event.target.value
                                })
                              }}
                            />

                            {/* email */}
                            <InputText
                              name="email"
                              type="email"
                              value={this.state.email}
                              onChange={event => {
                                this.setState({
                                  email: event.target.value
                                })
                              }}
                            />

                            {/* phone number */}
                            <InputText
                              type="text"
                              name="phone"
                              value={this.state.phone}
                              onChange={event => {
                                this.setState({
                                  phone: event.target.value
                                })
                              }}
                            />
                            <ModalFooter style={{ marginTop: '20px' }}>
                              <Button type="submit" color="primary">
                                Update
                              </Button>{' '}
                              <Button
                                color="secondary"
                                onClick={event => {
                                  event.preventDefault()
                                  this.cancelEdit(this.state)
                                }}
                              >
                                Cancel
                              </Button>
                            </ModalFooter>
                          </form>
                        </Col>
                      </Row>
                    </Container>
                  </ModalBody>

                  {/* </FormEdit> */}
                </Modal>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = data => {
  console.log(data)

  let newData = {
    dataContacts: data.getData.dataContacts
  }
  // console.log(newData)
  return newData
}

export default connect(mapStateToProps)(Tables)
