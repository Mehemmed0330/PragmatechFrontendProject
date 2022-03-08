import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/user'

export default function Login() {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: 'Muhammad',
              age: 20,
              email: 'mehemmedeliyevn0330@gmail.com',
            }),
          )
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </button>
    </div>
  )
}
