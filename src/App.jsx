import { useState } from 'react'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import {Routes, Route} from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { getContactList } from './services/contactService.js'
import { getMessagesByContactId } from './services/messagesService.js'
import Header from './Component/Header/Header.jsx' 
import { FaBeer } from "react-icons/fa"
import { LuSend } from "react-icons/lu"




<div><Header/></div> 

function App() {
	
	return(
		<div className='App'>
				<div className='HeaderContainer'>
					<div><Header/></div>
				</div>
				<div className='whatsapp-container'>
				<Routes>
					<Route
						path='/' 
						element={<ContactScreen/>} 
					/>
					<Route
						path='/contacts/:contact_id/messages' 
						element={<HomeScreen/>} 
					/>
					<Route 
						path='/contacts'
						element={<ContactScreen/>}
					/>
					<Route
						path='/contacts/:contact_id/detail'
						element={<ContactDetailScreen/>}
					/>
				</Routes>
				</div>
		</div>	
	)
}

export default App
