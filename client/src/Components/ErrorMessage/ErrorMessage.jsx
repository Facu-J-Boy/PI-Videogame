import './ErrorMessage.css';
import React from 'react'

const ErrorMessage = ({error}) => {
  return (
    <div className='errorMessage'>
        <h1>
         {error}
        </h1>
    </div>
  )
}

export default ErrorMessage