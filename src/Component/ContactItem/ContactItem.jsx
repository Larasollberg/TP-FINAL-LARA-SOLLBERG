import React from "react"
import { Link} from "react-router"


const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/contacts/${id}/messages`}>
            {}
            <div className="Chat-items-container">
                <div className="Chat-items">
                    <div className="Profile-Pic-Container">
                    <img className="Profile-Pic" src={img} alt={`${name} image profile`} />
                    </div>
                    <h3>{name}</h3>
                    <div>
                    {last_message.text}
                    </div>
                    <span>{unread_messages}</span>
                    <span>Ultima conexion: {last_time_connected}</span>
                </div>
            </div>
        </Link>
        
        
    )
}

export default ContactItem