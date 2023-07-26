import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#2a3439] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/3c288d14-14d9-4f7b-8a1f-da9f68b8c9a1' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#9b00e8] text-gray-300'>Contact</p>
                <p className='text-gray-300 p-4'># Submit the form below or shoot me an email - erhll01@outlook.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#9b00e8] hover:border-[#9b00e8] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact