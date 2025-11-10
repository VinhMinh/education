import { HeaderProvider } from '@/context/headerContext'
import React from 'react'
import BodyContent from './BodyContent'
import Header from './Header'
import Footer from './Footer'
import BodyBg from './BodyBg'

export default function WrapperProvider({dataSetting, children }:any) {
  return (
    <div className={`w-screen max-w-full`}>
      <HeaderProvider>
        <Header dataSetting={dataSetting}/>
        <BodyContent>{children}</BodyContent>
        <BodyBg dataSetting={dataSetting}/>
        <Footer dataSetting={dataSetting}/>
      </HeaderProvider>
    </div>
  )
}
