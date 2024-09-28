import React from 'react'

const FinancialList = (props) => {
  return (
    <ul className='flex flex-col items-center'>
        <li>{props.title}</li>
        <li>R$ {props.value}</li>
    </ul>
  )
}

export default FinancialList