import React from 'react'
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
      modal: false
    }

    this.toggleEdit = this.toggleEdit.bind(this)
  }
  toggleEdit() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  cancelEdit(data) {
    console.log(data.modal)

    this.setState({
      modal: !data.modal
    })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12">
            <Table
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
                <tr>
                  <td>1</td>
                  <td>ajin</td>
                  <td>ajin@gmail.com</td>
                  <td>08283723</td>
                  <td>
                    {' '}
                    <Button
                      color="warning"
                      onClick={event => {
                        this.toggleEdit(this.state)
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
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    <Container>
                      <Row>
                        <Col sm="12">
                          <FormTitle> EDIT DATA </FormTitle>
                          <form>
                            <InputText name="fullName" />

                            {/* email */}
                            <InputText name="email" type="email" />

                            {/* phone number */}
                            <InputText type="text" name="phone" />
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

export default Tables
