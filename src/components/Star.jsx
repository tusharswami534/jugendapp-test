import React from 'react'
import { STAR_LIST } from '../utils/helper'

const Star = () => {
  return (
    <>
    <div className='flex justify-center flex-col items-center py-[60px] max-lg:px-5 max-lg:py-10 max-md:py-8 max-sm:py-5'>
        {STAR_LIST.map((item, index) => (
            <div className='flex gap-1' key={index}>
                {item.star.map((star, index) => (
                    <span className='text-2xl' key={index}>{star}</span>
                ))}
            </div>
        ))}
        </div>
    </>
  )
}

export default Star
