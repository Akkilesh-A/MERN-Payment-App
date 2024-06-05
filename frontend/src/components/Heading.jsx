import React from 'react'

const Heading = (props) => {
  return (
    <div className='text-[3rem] font-bold text-center py-4'>
        {props.text}
    </div>
  )
}

export default Heading