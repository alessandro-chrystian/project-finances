import React from 'react'

const FinancesGrid = ({title, data}) => {
  return (
    <div className='relative'>
      <div className='sticky top-0 z-10 bg-white border-b-2 border-border-dark'><h3>{title}</h3></div>
        {data.map((item, index) => {
            return <p key={index}>{item}</p>
        })}
      </div>
  )
}

export default FinancesGrid