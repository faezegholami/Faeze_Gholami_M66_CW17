import React, { Component } from "react";
import { Container, Row , Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      contactList :['faeze','fateme']
    }
    
  }

  handleAddContact = (contact) =>{
    this.setState({contactList:[...this.state.contactList,contact]})
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col>
          <ContactForm onAddContact={this.handleAddContact}/>
          </Col>
        </Row>
        <Row>
          <Col>
          <ContactList contacts={this.state.contactList} />
          </Col>
        </Row>
      </Container>
    );
  }
}
