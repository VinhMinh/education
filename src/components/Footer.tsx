import useReplaceUrl from '@/utils/useReplaceUrl';
import Link from 'next/link';
import React from 'react'

export default function Footer(props : any) {
  const { dataSetting } = props;

  return (
    <footer>
      {
        dataSetting?.menuFooter &&
        <div className="footerMenu">
          {dataSetting.menuFooter.map((item: any, index: number) => (
            <React.Fragment key={index}>
              <Link target={item.linkFooter?.target || '_self'} href={useReplaceUrl(item.linkFooter?.url) || '#'} className="footerMenuItem">
                {item.linkFooter?.title}
              </Link>
              {index < dataSetting.menuFooter.length - 1 && (
                <span className="text-[20px] font-thin">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      }
      {
        dataSetting?.copyright &&
        <div className="copyRight">
          {dataSetting.copyright}
        </div>
      }
    </footer>
  )
}
