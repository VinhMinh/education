import React from 'react'
import dynamic from 'next/dynamic'
import { BlockProp } from '@/types/types';
import BlockFound from './blockFound';

export default function Blocks({data}:any) {

  const blocks = data?.acf?.components
  
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return (
      <div className="h-full">
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-48 text-xl">
          <BlockFound title="noBlock"/>
        </div>
      </div>
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

