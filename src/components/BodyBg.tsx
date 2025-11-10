import React from 'react'
import Image from 'next/image';

export default function BodyBg(props : any) {
  const { dataSetting } = props;
  return (
    <div className='bodyBg'>
      {dataSetting?.bodyBackground?.url &&
        <Image
          src={dataSetting?.bodyBackground?.url}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      }
    </div>
  )
}
