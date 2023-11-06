import { Inter } from 'next/font/google'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
<main className={`flex flex-col`}>
    <div className={`bg-neutralOne grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 py-12 xl:px-[10%] justify-items-center`}>
      <div className={`order-first lg:order-first flex justify-center items-center`}>
        <div className={``}> 
            <Image src={`/images/hi_juna.PNG`}
              width={400}
              height={800}
              alt=""
            />
      </div>
      </div>
        <div className="w-[80%] xl:w-[90%]">
              <div className={'text-neutralBrown font-catchymager text-2xl md:text-6xl'}>About Juna</div>
              <div className={`pt-8 font-cocogothic text-lg text-neutralBrown`}> In <span className={`font-sans`}>2017</span>, I ventured into the world of floral design, and it was a love-at-first-sight experience. The vibrant colors, intricate shapes, and endless design possibilities of flowers captured my heart.
Over the years, I worked in the floral business, specializing in everything from weddings to corporate events, crafting beautiful arrangements.
But my passion for creativity and the desire to create moments worth celebrating led me to embark on my own journey.
With unwavering support from my beautiful family, my husband being my biggest helper, I decided to start my own business, Events by Juna. 
I take immense pride in ensuring that everything I create is handmade, unique, and meticulously curated with attention to the finest details.
While my time for painting may be limited, I'm grateful for the opportunity to pour my heart into every creation, making each moment unforgettable and magical.
I'm deeply thankful for my clients who trust me with their most important moments.
I'm here to spread creativity, joy, and love through my work, and I look forward to creating something extraordinary for you.
Thank you for joining me on this journey of art, passion and celebration. 
<div className='leading-8'>With love,</div>
<div className='font-amsterdamone text-xl'>Juna</div>
</div>
        </div>
    </div>
</main>

  ) }