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
          <input type='text' />
        </label>
        <label>
          Phone
          <input type='text' />
        </label>
        <label>
          Email
          <input type='text' />
        </label>
        <input type='submit' value='Submit/>
      </form>
    </>
    // ContactForm
  )
}
