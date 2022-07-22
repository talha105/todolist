import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
export default function Item({text}) {
  return (
    <ListGroup.Item as="li">{text}</ListGroup.Item>
  )
}
