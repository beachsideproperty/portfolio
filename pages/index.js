import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import About from '../components/About';

export default function Home() {
  return (
    <ContainerBlock
      title="lisa k's secret garden"
      description='sweet portfolio website'
    >
      <About />
    </ContainerBlock>
  );
}
