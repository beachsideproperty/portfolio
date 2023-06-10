import React from 'react';
import Image from 'next/image';
import IconMaxi from '../images/iconmaxi.png';

export default function About() {
  console.log(IconMaxi);
  return (
    <>
      <Image src={IconMaxi} alt='Icon Maxi' width={500} height={500} />
      <h1>hi! i'm lisa.</h1>
    </>
  );
}
