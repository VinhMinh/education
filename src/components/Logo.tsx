import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

export default function Logo(props : any) {
  return (
    <React.Fragment>
      {props.logoData?.url && (
        <Link href={'/'}>
          <Image
            src={props.logoData.url}
            alt={props.logoData.alt || 'Logo'}
            width={props.logoData.width || 122}
            height={props.logoData.height || 32}
            className='logo'
          />
        </Link>
      )}
    </React.Fragment>
  )
}
