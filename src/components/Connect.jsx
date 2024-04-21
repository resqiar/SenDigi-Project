import React from 'react'

function Connect() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to connect with app account now ?</h1>
                <p>Connected with gadget account kids to monitoring</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="text" placeholder='Enter Code' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Connect</button>
                </div>
                <p>Make sure the code is the same as the <span className='text-[#00df9a]'>child's device</span></p>
            </div>
        </div>
    </div>
  )
}

export default Connect