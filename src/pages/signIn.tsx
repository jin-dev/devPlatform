import React, { useEffect } from 'react'
import { signIn } from 'next-auth/react'
import useStore from 'components/zustand/dataStore'
import { useRouter } from 'next/router'

function SignInPage() {
  const { session } = useStore()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      // Only call signIn if there is no active session
      // alert('checked : ', session)
      // void signIn('google')
    } else {
      // Redirect to a different page after successful sign-in
      router.push('/') // Replace with your desired route
    }
  }, [session, router])

  // Optional: Add a loading indicator or message here
  return (
    <div>
      <p>Signing in...</p>
    </div>
  )
}

export default SignInPage
