import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Note() {
  return (
    <div className='note'>
        <span>First note</span>
        <div className='note-footer'>
            <small>09/10/2023</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default Note