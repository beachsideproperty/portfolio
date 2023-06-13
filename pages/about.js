import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import Image from 'next/image';
import Depop from '../images/depop.png';

export default function About() {
  return (
    <ContainerBlock
      title="lisa k's secret garden"
      description='sweet portfolio website'
    >
      <div className='flex items-center'>
        <div className='mr-4'>
          <Image src={Depop} alt='Icon Maxi' width={600} height={600} />
        </div>
        <div>
          <div className='mt-4'>
            I'm interested in exploring spaces where functionality meets design.
            My background in research science has given me a solid foundation
            for transitioning into software engineering--I love the thrill of
            solving new problems and am eager to join a team where I can apply
            my skills in a way that brings forth positive change and joy.
          </div>
          <div className='mt-4'>
            My tech stack includes: Javascript, PostgreSQL, Express.js,
            React.js, Node.js, RESTful API Design/Implementation, Redux,
            Next.js, Git, GitHub, Agile Methodologies, HTML5, CSS, Material UI,
            Tailwind, Postico, Postman, Pixi.js, Vercel, and Render.
          </div>
          <div className='mt-4'>
            My work experience includes being: a multi-functional researcher and
            purchaser at Heligenics, a biotech startup; a summer molecular
            biology research intern at Nathan Shaner's UCSD lab; an
            undergraduate researcher, field worker, and lab technician; and
            various odd jobs in customer service over the years. In a team
            setting, I'm focused on harmony and productivity, with an emphasis
            on maximizing morale.
          </div>
          <div className='mt-4'>
            My all time favorite hobby is thrifting. On the left is a small
            collection of pieces I've found over the years. There are few things
            more thrilling to me than finding old treasures and giving them a
            new life!
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
