'use client'

import React, { useEffect, useState } from "react";
import { useHeaderContext } from "@/context/headerContext";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header(props: any) {
  const { dataSetting } = props;
  const [status, setStatus] = useState(false)
  const { setHeaderStyle } = useHeaderContext()
  const handleClick = () =>{
    setStatus(!status)
    setHeaderStyle(!status)
  }
  return (
    <header>
      <Logo logoData={dataSetting?.logo} />
      <Nav menuHeader={dataSetting?.menuHeader} />
      <div className="navToggle">
        <div className={`open jsOpenNav ${ !status && 'active'}`} onClick={handleClick}>
          <svg
            display="block"
            role="presentation"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="navToggle">
            <path
              d="M 0 0 L 16 0"
              fill="transparent"
              height="1px"
              id="YnobPTYMb"
              strokeDasharray=""
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="var(--js9iwy, 2)"
              stroke="var(--1m973uw, rgb(255,255,255))"
              transform="translate(4 5)"
              width="16px"></path>
            <path
              d="M 0 0 L 16 0"
              fill="transparent"
              height="1px"
              id="Cb0Gao21R"
              strokeDasharray=""
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="var(--js9iwy, 2)"
              stroke="var(--1m973uw, rgb(255,255,255))"
              transform="translate(4 12)"
              width="16px"></path>
            <path
              d="M 0 0 L 16 0"
              fill="transparent"
              height="1px"
              id="oPtuyu4df"
              strokeDasharray=""
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="var(--js9iwy, 2)"
              stroke="var(--1m973uw, rgb(255,255,255))"
              transform="translate(4 19)"
              width="16px"></path>
          </svg>
        </div>
        <div className={`close jsCloseNav ${ status && 'active'}`} onClick={handleClick}>
          <svg
            display="block"
            role="presentation"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="2710857035">
            <path
              d="M 12 0 L 0 12"
              fill="transparent"
              height="12px"
              id="qMvRy61Gj"
              strokeDasharray=""
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="var(--js9iwy, 2)"
              stroke="var(--1m973uw, rgb(255,255,255))"
              transform="translate(6 6)"
              width="12px"></path>
            <path
              d="M 0 0 L 12 12"
              fill="transparent"
              height="12px"
              id="YX0AMSC6b"
              strokeDasharray=""
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="var(--js9iwy, 2)"
              stroke="var(--1m973uw, rgb(255,255,255))"
              transform="translate(6 6)"
              width="12px"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
