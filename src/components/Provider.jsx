'use client'

import { SessionProvider } from 'next-auth/react'
// THIS IS AN HEIGHER ORTHER COMPONENT
const Provider = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
)

export default Provider
