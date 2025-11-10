import Blocks from "@/blocks/blocks";
import fetchPostData from "@/hook/fetchPostData";
import { PageParams } from '@/types/types';

export default async function HomePage({params}: PageParams) {
  
  const data = await fetchPostData({params});
  
  return (
    <Blocks data={data}/>
  );
}
