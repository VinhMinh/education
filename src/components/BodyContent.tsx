"use client"

import { useHeaderContext } from '@/context/headerContext'
import React, { ReactNode } from 'react'
type Props = {
  children : ReactNode
}
export default function BodyContent({children} :Props) {
  const {headerStyle} = useHeaderContext()
  return (
    <main>{children}</main>
  )
}
