import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const LinkButton = () => {

    const location = useLocation()

    const isOnHomePage = location.pathname === '/'

  return (
    <Link to={isOnHomePage ? '/comparison' : '/'} className='text-2xl border-2 border-border-dark p-2 rounded-md'>{isOnHomePage ? 'COMPARAR' : 'VOLTAR'}</Link>
  )
}

export default LinkButton