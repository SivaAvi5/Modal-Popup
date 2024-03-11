import React, { useState } from 'react'
import Modal from './Modal'

const ModalTest = () => {

    const [showModalPopup,setShowModalPopup] = useState(false)

    const onClose = () =>{
        setShowModalPopup(false)
    }
    console.log(showModalPopup)

  return (
    <div>
        <button className='btn' onClick={() => setShowModalPopup(true)}>open Modal Popup</button>
        {
            showModalPopup && (
                <Modal
                id ={'custom-id'}
                header = {<h1>Customized Header</h1>}
                footer = {<h1>Customized Footer</h1>}
                onClose = {onClose}
                body = {<div>Customized body</div>}
                />
            )
        }
    </div>
  )
}

export default ModalTest