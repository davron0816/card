import React from 'react'

const UserCard = ({ img, name, job, department }) => {
  return (
    <div className='bg-white p-4 rounded shadow w-60 text-center'>
      <img src={img} className='w-24 h-24 mx-auto rounded-full object-cover mb-2' alt="img" />
      <h2 className='text-xl font-semibold'>{name}</h2>
      <p className='text-gray-600'>{job}</p>
      <p className='text-gray-500 text-sm'>{department}</p>
    </div>
  )
}

export default UserCard
