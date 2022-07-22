import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Input({getValue,value}) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control value={value} onChange={(e)=>getValue(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>
    </Form>
  )
}
