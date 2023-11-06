import { Inter } from 'next/font/google'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
<main className={`flex flex-col`}>
    <div className={`bg-neutralOne grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 py-12 xl:px-[10%] justify-items-center`}>
      <div className={`order-first lg:order-first flex justify-center items-center`}>
        <div className={'container bg-white pb-6 px-6'}> 
            <div className={'flex justify-center items-center h-[90px]'}>
                <Image src={`/images/juna1.jpg`}
                width={180}
                height={180}
                alt=""
                className={'rounded-full relative top-14'}
                />
            </div>
                <div className={'container mx-auto bg-neutralBrown text-white px-8 py-28'}>
                    <div className={'font-cocogothic uppercase text-xl text-center'}>Hello,</div>
                    <div className={'font-cocogothic uppercase text-xl text-center'}> My Name is</div>
                    <div className={'font-catchymager uppercase text-6xl text-center'}>Juna</div>
                    <div className={'leading-6 text-cocogothic'}>I&apos;m delighted to share a glimpse of my journey with you.</div>
                    <div className={'leading-6 text-cocogothic'}>I wear many hats in life, but at my core, I&apos;m a passionate artist and a devoted wife and mother to two wonderful children.</div>
                    <div className={'leading-6 text-cocogothic'}>My artistic journey began as a painter, and I&apos;ve been creating freelance art for as long as I can remember.</div>
                    <div className={'leading-6 text-cocogothic'}>My academic background in Communication Science and Journalism, along with my experience as a marketing specialist, has given me a distinctive viewpoint for my business.</div>
                </div>
      </div>
      </div>
        <div className="w-[80%] xl:w-[90%]">
              <div className={'text-neutralBrown font-catchymager text-2xl md:text-6xl'}>About Juna</div>
              <div className={`pt-8 font-cocogothic text-lg text-neutralBrown`}> In <span className={`font-sans`}>2017</span>, I ventured into the world of floral design, and it was a love-at-first-sight experience. The vibrant colors, intricate shapes, and endless design possibilities of flowers captured my heart.
Over the years, I worked in the floral business, specializing in everything from weddings to corporate events, crafting beautiful arrangements.
But my passion for creativity and the desire to create moments worth celebrating led me to embark on my own journey.
With unwavering support from my beautiful family, my husband being my biggest helper, I decided to start my own business, Events by Juna. 
I take immense pride in ensuring that everything I create is handmade, unique, and meticulously curated with attention to the finest details.
While my time for painting may be limited, I&apos;m grateful for the opportunity to pour my heart into every creation, making each moment unforgettable and magical.
I&apos;m deeply thankful for my clients who trust me with their most important moments.
I&apos;m here to spread creativity, joy, and love through my work, and I look forward to creating something extraordinary for you.
Thank you for joining me on this journey of art, passion and celebration. 
<div className='leading-8'>With love,</div>
<div className='font-amsterdamone text-xl'>Juna</div>
</div>
        </div>
    </div>
</main>

  ) }