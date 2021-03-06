import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class ContactList extends Component {
  render() {
    const contactsItemNode = this.props.contacts.map((name) => {
      return <ListGroupItem key={name}>{name}</ListGroupItem>;
    });

    return <ListGroup>{contactsItemNode}</ListGroup>;
  }
}
