import React from 'react'
import ChatCard from './ChatCard'
import { BsSearch } from 'react-icons/bs'


const Chat = () => {
  return (
    <div className='h-full w-full overflow-x-scroll max-h-[85vh]'>
      <div className='w-4/5 py-2 items-center gap-2 flex mx-auto rounded-2xl'>
        <BsSearch size={32}/>
        <input type="text" className='w-full border px-2 py-3' placeholder='Поиск' />
      </div>
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </div>
  )
}

export default Chat