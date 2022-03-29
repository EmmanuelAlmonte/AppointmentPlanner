import React, { useEffect, useState } from 'react'
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = ({ contacts, addContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [prevName, setPrevName] = useState(false)

  const handleSubmit = e => {
    e.preventDefault() 
    console.log("I submitted")
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    for(const x of contacts){
    if (x.name === name) {
      addContacts(name, phone, email)
    }
    }
    setName('')
    setPhone('')
    setEmail('')
  }

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (!contacts.includes(name)) {
      setPrevName(false)
    }
    setPrevName(true)
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          setName={setName}
          name={name}
          setPhone={setPhone}
          phone={phone}
          setEmail={setEmail}
          email={email}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  )
}
