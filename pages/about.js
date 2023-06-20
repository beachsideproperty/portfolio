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
          <Image src={Depop} alt='Icon Maxi' width={500} layout='responsive' />
        </div>
        <div>
          <h1 className='font-synthetique text-3xl font-bold mb-4'>
            lisa kraisriwatana's about me
          </h1>
          <p className='mb-4'>
            Hi! My name is Lisa, and I'm a recent graduate of Fullstack's
            Software Engineering bootcamp. I made the decision to transition
            from molecular biology to coding last year and haven't looked back.
            My background in research has given me a solid foundation for this
            transition--I love the thrill of solving new problems, exploring
            spaces where functionality meets design, and am eager to join a team
            where I can apply these skills in a way that brings forth positive
            change and joy.
          </p>
          <p className='mb-4'>
            Tech stack: Javascript, PostgreSQL, Express.js, React.js, Node.js,
            RESTful API, Redux, Next.js, Git/GitHub, Agile, HTML5, CSS, MUI,
            Tailwind, Postico, Postman, Vercel, and Render.
          </p>
          <p className='mb-4'>
            My work experience includes: a multi-functional researcher and
            purchaser at a biotech startup; a molecular biology researcher at a
            UCSD lab; an undergraduate researcher, field worker, and lab tech;
            and other various odd jobs over the years. In a team setting I'm
            focused on harmony and productivity, with an emphasis on maintaining
            morale.
          </p>
          <p className='mb-4'>
            My all time favorite hobby is thrifting. On the left is a small
            collection of pieces I've found over the years. There are few things
            more thrilling to me than finding old treasures and giving them a
            new life!
          </p>
        </div>
      </div>
    </ContainerBlock>
  );
}
