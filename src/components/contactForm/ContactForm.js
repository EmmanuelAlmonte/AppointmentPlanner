import React from 'react'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={({target}) => {setName(target.value)}} type='text' />
        </label>
        <label>
          Phone
          <input value={phone} onChange={({target}) => {setPhone(target.value)}} type='tel' pattern='[1-9][0-9]{2}[1-9][0-9]{2}[0-9]{4}' placeholder='123-456-8910'/>
        </label>
        <label>
          Email
          <input value={email} onChange={({target}) => {setEmail(target.value)}} type='text'  />
        </label>
        <input type='submit' value='Submit'/>
      </form>
    </>
    // ContactForm
  )
}
