import React from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
export default function Button1({loading,text,call}) {
  return (
    <div>
      <Button onClick={call} style={{ backgroundColor: 'red', borderColor: 'red' }}>
        {loading?(
          <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        ):text}
      </Button>
    </div>
  )
}
