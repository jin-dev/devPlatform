'use client'

import { signIn } from 'next-auth/react'

export default function Login() {
  // eslint-disable-next-line react/button-has-type
  return <button onClick={() => signIn('google')}>Login</button>
}
