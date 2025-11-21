import { yoastToMetadata } from "@/utils/yoastToMetadata";
import { Metadata } from "next";
import Blocks from "@/blocks/blocks";
import fetchPostData from "@/hook/fetchPostData";
import { PageParams } from '@/types/types';

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const data = await fetchPostData({ params });
  return yoastToMetadata(data.yoast_head_json);
}

export default async function HomePage({params}: PageParams) {
  
  const data = await fetchPostData({params});
  
  return (
    <Blocks data={data}/>
  );
}
