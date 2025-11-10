import localFont from 'next/font/local';

export const thicccboi = localFont({
  src: [
    {
      path: '../../public/fonts/THICCCBOIRegular.woff2', 
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/THICCCBOISemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/THICCCBOIBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-thicccboi', 
});

export const interLight = localFont({
  src: '../../public/fonts/InterLight.woff2',
  weight: '300',
  style: 'normal',
  variable: '--font-inter-light',
});

export const fonts = [thicccboi, interLight];