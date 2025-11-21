import React from 'react'
import dynamic from 'next/dynamic'
import { BlockProp } from '@/types/types';
import NotFound from '@/components/404';

export default function Blocks({data}:any) {

  const blocks = data?.acf?.components

  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return (
      <NotFound />
    )
  }

  return (
    blocks.map((block : any, index : number)=>{
      try {
        const Block = dynamic<BlockProp>(() => import(`@/blocks/${block.acf_fc_layout}/${block.acf_fc_layout}`));
        return <Block key={`block-${index}`} position={index} data={block} />;        
      } catch (error) {
        console.error(`Block ${block.acf_fc_layout} not found`);
        return null;
      }
    })
  );
}

