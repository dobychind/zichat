// Login.tsx
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col w-full gap-6 h-full items-center bg-white'>
      <div className='flex flex-col justify-center h-full items-center gap-4 w-4/5'>
        <form className='flex justify-center items-center flex-col gap-4 w-full'>
          <input className='py-2 text-2xl px-3 bg-transparent border border-gray-400 rounded-md' placeholder='Логин' type="text" />
          <input className='py-2 px-3 text-2xl bg-transparent border  border-gray-400 rounded-md' type="text" placeholder='Пароль' />
        </form>
        <div className='flex flex-col'>
          <button className='text-white bg-green-900 bg-opacity-35 text-2xl font-semibold shadow-md rounded-md px-4 py-3'>Войти</button>
          <Link to='registration' className='font-semibold pt-1'>Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
