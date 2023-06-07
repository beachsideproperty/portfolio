import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import About from '../components/About';

export default function Home() {
  return (
    <ContainerBlock
      title='Lisa Kraisriwatana - Developer, Thrifter, Poet'
      description='Sweet portfolio website'
    >
      <About />
    </ContainerBlock>
  );
}
