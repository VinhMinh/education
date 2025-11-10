
import { ReactNode } from 'react';

export type ReplaceUrlOptions = {
  replaceUrl?: string;
  toUrl?: string;
};

export type GlobalContextType = Record<string, any> | null;

export type GlobalProviderProps = {
  children: ReactNode;
  lang: GlobalContextType;
};

export type BlockProp = {
  data: any,
  position:number
}

export type BlockFoundProp = {
  title: string
}

export type PageParams = {
  params: {
    slug?: string | string[];
  };
};

export type HeaderContextType = {
  headerStyle: boolean;
  setHeaderStyle: any;
};

export type ProjectProp = {
  name: string,
  image: {
    alt?: string
    url : string
  },
  tags?: [
    {
      name: string
    }
  ],
  desc: string,
  link: {
    target?:string,
    title:string,
    url:string
  }
};

export type AboutProp = {
  cvTitle: string,
  university: string,
  hobbies: string,
  certificates?: [
    {
      certificate: string
    }
  ],
  desc: string,
  link: {
    target?:string,
    title:string,
    url:string
  }
};

export type Params = {
  slug: string; 
}

export type Card = {
  name: string;
  position: string;
  image: {
    url: string;
  };
};

export type CardProps = {
  data?: Card[];
  styles?: any; 
  reverse?: boolean
};