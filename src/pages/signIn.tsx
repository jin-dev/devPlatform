'use client'

import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'

function SignInPage() {
  // TODO
  // refer the session value with zustand
  useEffect(() => {
    signIn('google')
  }, [])

  return null
}

export default SignInPage
