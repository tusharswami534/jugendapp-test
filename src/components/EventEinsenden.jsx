import React, { useState } from 'react'
import Swal from 'sweetalert2'

const EventEinsenden = () => {
    const fromData ={
      select : 'kategorie',
      title : '',
      datum : '',
      standort : '',
      preis : '',
      message : ''
    }

    const [image , setImage] = useState(null)

    const handleImage = (e) => {
      setImage(URL.createObjectURL(e.target.files[0]))
    }

    const [data, setData] = useState(fromData)
    const [error, setError] = useState(false)
    const handleInputChange = (e) => {
      e.preventDefault();
      setError(true);
      if(
        data.select !== 'kategorie' &&
        data.title !== '' &&
        data.datum !== '' &&
        data.standort !== '' &&
        data.preis !== '' &&
        data.message 
      ){
        setData(fromData)
        setError(false)
        console.log(data)
        setImage(null)
        Swal.fire({
          icon: 'success',
          title: 'Event einsenden',
          text: 'Event einsenden successfully',
          confirmButtonText: 'Okay'
        })
      }
     
    }

  return (
    <>
    <div className='py-[60px] bg-white-lilac max-lg:px-5 max-lg:py-10 max-md:py-8 max-sm:py-5'>
      <h1 className='font-bold text-center leading-[44px] max-md:leading-[40px] max-sm:leading-[36px] text-4xl max-lg:text-3xl max-md:text-2xl '>Event einsenden</h1>
      <div className='max-w-[763px] mx-auto mt-5 max-md:mt-4'>
        <p className='text-center text-spicy-pink font-light text-[20px] leading-[30px] max-md:text-[16px] max-md:leading-[24px] max-md:text-sm'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <form onSubmit={handleInputChange} className='flex flex-wrap justify-between gap-y-5 max-md:gap-y-4 mt-5 max-md:mt-4'>
              <div className='flex gap-4 py-2 px-3 bg-white rounded-[30px] max-lg:rounded-[20px] items-center w-full max-h-28 '>
                <img className={`max-w-24 h-24 w-full object-cover rounded-[20px] ${image === null ? 'hidden' : ''}`} src={image} alt='' />
                <label htmlFor="file" className='max-w-24 border border-dashed rounded-[20px] w-full h-[80px] cursor-pointer flex justify-center items-center'>
                    <span className='flex w-[11px] h-0.5 bg-clear-blue rounded after:w-[11px] after:h-0.5 after:bg-clear-blue after:rotate-90 after:rounded'></span>
                </label>
                <input  accept="image/*"  onChange={(e) => handleImage(e)} type="file" hidden id="file" />
              </div>

              <select onChange={(e) => setData({...data, select : e.target.value})} value={data.select} className='py-[17.5px] w-full px-4 outline-none leading-[21px] text-sm rounded-[30px] max-lg:rounded-[20px] text-spicy-pink'>
                  <option value="kategorie">Kategorie</option>
                  <option value="kategorie">Kategorie</option>
                  <option value="dummy">dummy</option>
                  <option value="dummytwo">dummy2</option>
              </select>

              <div className='max-w-[371.5px] w-full max-lg:max-w-[unset]'>
                <input onChange={(e) => setData({...data, title : e.target.value})} value={data.title} type="text" name="" id="" className='w-full py-[17.5px] px-4 outline-none rounded-[30px] max-lg:rounded-[20px] font-bold text-sm leading-[21px] placeholder:font-bold placeholder:text-sm text-spicy-pink' placeholder='Titel' />
                <p>{error && !data.title && 'Name is required'}</p>
              </div>

              <div className='max-w-[371.5px] w-full max-lg:max-w-[unset]'>
                <input onChange={(e) => setData({...data, datum : e.target.value})} value={data.datum} type="text" name="" id="" className='w-full py-[17.5px] px-4 outline-none rounded-[30px]  max-lg:rounded-[20px] leading-[21px] font-bold text-sm placeholder:font-bold placeholder:text-sm text-spicy-pink' placeholder='Datum' />
                <p>{error && !data.datum && 'Datum is required'}</p>
              </div>

              <div className='max-w-[371.5px] w-full max-lg:max-w-[unset]'>
                <input onChange={(e) => setData({...data, standort : e.target.value})} value={data.standort} type="text" name="" id="" className='w-full py-[17.5px] px-4 outline-none rounded-[30px] max-lg:rounded-[20px] leading-[21px] font-bold text-sm placeholder:font-bold placeholder:text-sm text-spicy-pink' placeholder='Standort' />
                <p>{error && !data.standort && 'Standort is required'}</p>
              </div>

              <div className='max-w-[371.5px] w-full max-lg:max-w-[unset]'>
                <input onChange={(e) => setData({...data, preis : e.target.value})} value={data.preis} type="text" name="" id="" className='w-full py-[17.5px] px-4 outline-none rounded-[30px] max-lg:rounded-[20px] leading-[21px] font-bold text-sm placeholder:font-bold placeholder:text-sm text-spicy-pink' placeholder='Preis' />
                <p>{error && !data.preis && 'Preis is required'}</p>
              </div>

              <div className='w-full'>
              <textarea onChange={(e) => setData({...data, message : e.target.value})} value={data.message} name="" className='resize-none w-full rounded-[30px] max-lg:rounded-[20px] px-4 leading-[21px] h-[132px] outline-none font-bold text-sm placeholder:font-bold placeholder:text-sm text-spicy-pink py-[17.5px]' placeholder='Beschreibung' id=""></textarea>
              <p>{error && !data.message && 'Message is required'}</p>
              </div>
              <button type='submit' className='text-white py-4  px-[115px] max-lg:px-[90px] max-md:px-[70px] max-sm:px-[50px] rounded-[30px]  max-lg:rounded-[20px] font-bold text-base mx-auto'>Event einsenden</button>
          </form>
      </div>
      </div>
    </>
  )
}

export default EventEinsenden
