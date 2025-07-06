import React from 'react'

const InfoCard = ({ img, title, text }) => {
  return (
    <div className='bg-white shadow rounded w-60 overflow-hidden'>
      <img src={img} alt="img" className='h-32 w-full object-bottom' />
      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-600'>{text}</p>
        <button className='mt-3 px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600'>
          Read More
        </button>
      </div>
    </div>
  )
}

export default InfoCard
