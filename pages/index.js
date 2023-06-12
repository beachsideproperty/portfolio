import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import Image from 'next/image';
import IconMaxi from '../images/iconmaxi.png';

export default function Home() {
  return (
    <ContainerBlock
      title="lisa k's secret garden"
      description='sweet portfolio website'
    >
      <div className='flex items-center'>
        <div className='mr-4'>
          <Image src={IconMaxi} alt='Icon Maxi' width={300} height={300} />
        </div>
        <div>
          <h1>hi, i'm lisa!</h1>
          <body>
            i'm a developer with a background in molecular biology research.
          </body>
        </div>
      </div>
    </ContainerBlock>
  );
}
