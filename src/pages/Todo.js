import React, { useState } from 'react'
import Button1 from '../components/Button'
import Input from '../components/Input'
import Item from '../components/Item'
import ListGroup from 'react-bootstrap/ListGroup';

export default function Todo() {
    const [list,setList]=useState([])
    const [mail,setMail]=useState("")

    function renderList(){
        return list.map((item,i)=>{
            return <Item text={item} key={i}/>
        })
    }

    function addItem(){
        if(mail){
            setList([...list,mail])
            setMail('')
        }else{
            alert('required')
        }
    }
    
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '80%' }}>
                    <Input value={mail} getValue={setMail}/>
                </div>
                <div style={{ width: '20%' }}>
                    <Button1 call={addItem} loading={false} text={"Add"} />
                </div>
            </div>
            <div>
                <ListGroup as="ol" numbered>
                    {renderList()}
                </ListGroup>
            </div>
        </div>
    )
}
