import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import { LuSend } from "react-icons/lu"

export default function NewMessageForm() {
    
    const {addNewMessage} = useContext(MessagesContext)
    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.text.value = '' 
    }
    return (
        <form  className='new-form'  onSubmit={handleSubmitNewMessage}>
            <div className='new-message'>
                <textarea className='text' id='text' name='text' minLength={2} required ></textarea>
                <button className='enviar' type='submit'><LuSend /></button>
            </div>
        </form>
    )
}