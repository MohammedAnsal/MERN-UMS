import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {

  const { currentUser } = useSelector(state => state.user);

  return (

    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>

      <form className='flex flex-col gap-4'>

        <img src={currentUser.profilePicture} alt="profile" className='h-24 w-24 self-center cursor-pointer rounded-full object-cover' />

        <input defaultValue={currentUser.userName} className='bg-slate-100 p-3 rounded-lg' type="text" placeholder='Username' id="username" />
        <input defaultValue={currentUser.email} className='bg-slate-100 p-3 rounded-lg' type="email" placeholder='Email' id="email" />
        <input className='bg-slate-100 p-3 rounded-lg' type="password" placeholder='Password' id="password" />

        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>

      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>

    </div>

  )

}

export default Profile
