import React from 'react'

const ComparisonGrid = ({title, data}) => {

  return (
    <div className='relative'>
        <div className='sticky bg-white top-0 z-10 border-b-2 border-border-dark'><h3>{title}</h3></div>
        {data.map((item,idx) => {
            return <p key={idx}>{item}</p>
        })}
    </div>
  )
}

export default ComparisonGrid