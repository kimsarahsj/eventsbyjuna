import Image from 'next/image'
import styles from './index.module.css'
import { Inter } from 'next/font/google'
import ServicesContent from '@/components/servicesContent'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Services() {
  return (
<main className={`flex flex-col`}>
      <div className={`bg-[url('/images/flower-top.png')] bg-cover bg-no-repeat bg-center h-screen flex items-center`}>
        <div className={`w-full text-center`}>
        <div className={`font-amsterdamone text-6xl text-white pt-12`}>Services</div>
        </div>
      </div>
      <ServicesContent image={'\/images\/flower-arrangement.PNG'} sectionNav={`flowers`} title={`Flower Arrangements`} description={`We can create floral arrangements for all types of events including weddings and social events. From bouquets, flower crowns, centerpieces, and floral arches, we can design an arrangement that fits your event. If you have a custom request please reach out and we will be happy to work with you.`} />
      <ServicesContent image={'\/images\/centerpiece.PNG'} sectionNav={`catering`} title={`Catering`} description={`Let us cater your next event! We can cater events from weddings, corporate events, social events, birthday's, holidays, and more. Our catering packages have a minimum party size of eight people. 
We offer buffet style and family style catering options. We also offer lunch packages and charcuterie boards. If you need desserts or a custom cake, we've got you covered. Reach out and we can share our catering menu options with you.`} />
      <ServicesContent image={'\/images\/coco_balloons.jpg'} sectionNav={`balloons`} title={`Balloon Decorations`} description={`Looking for something fun to spice up your next event or celebration? Balloon decor can provide the perfect backdrop for your next event. Our balloon decor offerings include balloon arches, garlands, and backdrops. We offer delivery and set up for balloon decoration, or DIY balloon garland kits!`} />
      <ServicesContent image={'\/images\/gift-basket2.PNG'} sectionNav={`additional`} title={`Additional Services`} description={`Just looking for a little bit of help with your event? We provide a la carte services to help your event shine. We can help in event planning, create floral gift baskets, cake tables, photo backdrops, and more. Let us know how we can help you!`} />
    <div className={`bg-neutralOne pb-8`}>
    <div className={`pt-8 text-center`}><Link href='/form' className={'px-8 py-2 border border-neutralBrown rounded-full bg-transparent font-cocogothic text-neutralBrown text-xl hover:bg-stone-400'}>Make an Inquiry</Link></div>
    </div>
</main>

  ) }