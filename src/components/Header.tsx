import React from 'react'
import Logo from './Logo';
import Nav from './Nav';

export default function Header( props : any) {
  const { dataSetting } = props;
  console.log('Header dataSetting:', dataSetting);
  return (
    <header>
      <Logo logoData={dataSetting?.logo} />
      <Nav menuHeader={dataSetting?.menuHeader} />
    </header>
  )
}
