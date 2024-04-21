import React from 'react'
import Avatar from '/me.jpg'

const ChatCard = () => {
    return (
        <div className='flex gap-6 px-4 relative items-center py-3 border w-full'>
            <img src={Avatar} alt='' className='w-[72px] h-[72px] rounded-[100px]' />

            <div className='flex flex-col gap-1'>
                <p className='font-bold text-lg'>Имя</p>
                <p className='font-medium'>Сообщение</p>
            </div>

            <div className='bg-green-600 px-3 py-1 rounded-3xl absolute right-4 mt-auto mb-auto '>
                <p className='text-white'>1</p>
            </div>

        </div>
    )
}

export default ChatCard