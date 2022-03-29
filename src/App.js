import React, { useState } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage'
import { ContactsPage } from './containers/contactsPage/ContactsPage'

function App () {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([])
  const [appointments, setAppoinments] = useState([])

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments'
  }

  /*
  Implement functions to add data to
  contacts and appointments
  */

  // Might need to adjust in order to get form data
  const addContact = ({ target }) => {
    const contactInfo = target.value
    setContacts(prev => {
      return [...prev, contactInfo]
    })
  }
  // Might need to adjust in order to get form data

  const addAppoinment = ({ target }) => {
    const appointmentInfo = target.value
    setContacts(prev => {
      return [...prev, appointmentInfo]
    })
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName='active'>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName='active'>
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path='/'>
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              addAppoinment={addAppoinment}
            />
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App
