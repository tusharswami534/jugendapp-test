import React from 'react'
import { STAR_LIST } from '../utils/helper'

const Star = () => {
  return (
    <>
    <div className='flex justify-center bg-white-lilac flex-col items-center'>
        <h1 className='font-bold text-center leading-[44px] max-md:leading-[40px] max-sm:leading-[36px] text-4xl max-lg:text-3xl max-md:text-2xl pb-2 '>Print star using Nested loop.</h1>
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
