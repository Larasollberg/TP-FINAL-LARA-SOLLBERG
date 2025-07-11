import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import { IoIosCheckmark } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"

export default function Message({ emisor, hora, id, texto, status}) {

    const {handleEliminarMensaje} = useContext(MessagesContext)

    const classNames = {
        message: 'chat-dialog'
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + ' chat-dialog__my-message'
    }
    return (
        <div className={classNames.message}>
            <span> {texto} </span>
            <div className='time'>
                <span>{hora}</span>
                <span className='visto' ><IoIosCheckmark /></span>
                <button className='delete' onClick={() => {handleEliminarMensaje(id)}} ><RiDeleteBin6Line /></button>
            </div>
        </div>
    )
}