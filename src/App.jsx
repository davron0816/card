import React from 'react'
import UserCard from './components/UserCard.jsx'
import InfoCard from './components/InfoCard.jsx'
import { users, infoCards } from './components/data'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-10'>
      <h1 className='text-3xl font-bold text-center mb-8'>User Card</h1>
      <div className='flex flex-wrap justify-center gap-6 mb-12'>
        {users.map((user, index) => (
          <UserCard
            key={index}
            img={user.img}
            name={user.name}
            job={user.job}
            department={user.department}
          />
        ))}
      </div>

      <h1 className='text-3xl font-bold text-center mb-8'>Info Card</h1>
      <div className='flex flex-wrap justify-center gap-6'>
        {infoCards.map((info, index) => (
          <InfoCard
            key={index}
            img={info.img}
            title={info.title}
            text={info.text}
          />
        ))}
      </div>
    </div>
  )
}

export default App
