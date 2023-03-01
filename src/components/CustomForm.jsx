import React from 'react'

const CustomForm = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e)

  return (
    <form className='todo'
    onSubmit={handleFormSubmit}>
      <div className='wrapper'>
        
      </div>
    </form>
  )
}

export default CustomForm