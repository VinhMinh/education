import { yoastToMetadata } from "@/utils/yoastToMetadata";
import { Metadata } from "next";
import Blocks from "@/blocks/blocks";
import fetchPostData from "@/hook/fetchPostData";
import fetchHiringData from "@/hook/fetchHiringData";
import { PageParams } from '@/types/types';
import Hiring from "@/components/Hiring";

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  if (slug?.[0] === "hiring") {
    const data = await fetchHiringData({ params });
    return yoastToMetadata(data.yoast_head_json);
  } else {
    const data = await fetchPostData({ params });
    return yoastToMetadata(data.yoast_head_json);
  }
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  if (slug?.[0] === "hiring") {
    const data = await fetchHiringData({ params });
    return (
      <Hiring data={data} />
    );
  } else {
    const data = await fetchPostData({ params });
    return (
      <Blocks data={data} />
    );
  }
}
