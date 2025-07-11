import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { IoIosBody, IoIosBackspace } from "react-icons/io";
import Swal from 'sweetalert2'
import { Link, useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';
import ContactContextProvider  from '../../Context/ContactContext';
import mook_data from '../../data/contact-mook';
import { ContactDetailContext } from '../../Context/ContactDetailContext';





export default function HomeScreen() {

    
    const {contact_id} = useParams()
    const { loadMessages, isMessagesLoading} = useContext(MessagesContext)  
    const {loadContact, contact_detail, isLoadingContactDetail } = useContext(ContactDetailContext) 
    useEffect(
        () => {
            loadMessages(contact_id)
            loadContact(contact_id)
        },
        [contact_id]
    )
    console.log(contact_detail)

    if(isMessagesLoading || isLoadingContactDetail){
        return <LoaderSpinner/>
    }
    const handleClickAlertButton = () => {
		Swal.fire({
			title: 'Error!',
			text: 'Do you want to continue',
			icon: 'error',
			confirmButtonText: 'Cool'
		})
	}
    

    return (
        <div className='chat-screen-contact'>
            <div className='contact-info'>
            <Link className='detail' to={`/contacts/${contact_id}/detail`}>
            <div className='detail-name'>{contact_detail.name}</div>
            <div className='detail-connected'>Ultima Conexión  {contact_detail.last_time_connected}</div>
            </Link>
            </div>
            <Chat />
            <NewMessageForm/>

        </div>
        
    )

}


