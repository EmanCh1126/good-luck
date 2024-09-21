import React from 'react'
import Link from 'next/link'
const Header = () => {
  return(
    <div className='flex gap-5 p-6 bg-slate-500 justify-left'>
        <Link href='\'>Home </Link>
        <Link href='\About'>About </Link>
        <Link href='\Name'>Name </Link>
        <Link href='\Contact'>Contact </Link>
        <Link href='\Address'>Address </Link>
        <Link href='\Profile'>Profile </Link>
    </div>
  )
}

export default Header