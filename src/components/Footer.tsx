import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return(
    <div className='fixed bottom-0 left-0 w-full flex justify-center p-4 bg-slate-400'>
        <Link href="#" className='pl-3 pr-3'>Privacy</Link>
        <Link href="#"className='pl-3 pr-3'>Terms </Link>
        <Link href="#"className='pl-3 pr-3'>Conditions</Link>
        <Link href="#"className='pl-3 pr-3'>Settings </Link>
    </div>
  )
}

export default Footer