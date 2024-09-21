import React from 'react'
import Image from 'next/image'

const page = () => {
  return(
    <div>
        <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/Eman.jpeg" alt="" width="384" height="512">
        </Image>
    </div>
  )
}

export default page