import React, { useState } from 'react'

export default function Input({handleChange}) {


  return (
    <div>
        <input type='text' onKeyDown={handleChange}/>
        
    </div>
  )
}
