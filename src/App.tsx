// App.tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Error from './components/Error'
import { privateRoutes, publicRoutes } from './router/routes'

const App = () => {
 const user = true
  return (
    <div className='flex'>
      <Routes>
        <Route path="/*" element={<Error />} />
        {user ? (
          privateRoutes.map((route) => (
            <Route element={route.component} path={route.path} key={route.path} />
          ))
        ) : (
          publicRoutes.map((route) => (
            <Route element={route.component} path={route.path} key={route.path} />
          ))
        )}
        <Route
          path="/*"
          element={<Navigate to={user ? "/chat" : "/login"} replace />}
        />
      </Routes>
    </div>
  )
}

export default App
