import Image from 'next/image'
import styles from './index.module.css'
import { Inter } from 'next/font/google'
import ServicesContent from '@/components/servicesContent'


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
    <div className={`pt-8 text-center`}><a href='#' className={'px-8 py-2 border border-neutralBrown rounded-full bg-transparent font-cocogothic text-neutralBrown text-xl'}>Make an Inquiry</a></div>
    </div>

    <div className={`bg-neutralBrown flex flex-col`}>
        <div className={`p-8`}>
          <div className={`font-catchymager text-3xl text-white`}>Events by Juna</div>
        </div>
        <div className={`pb-12 self-center w-[100%] xl:w-[65%]`}>
          <div className={`m-4 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-2`}>
              <div className={`box-border h-48 w-64 p-4 border border-white `}>
                <div className={`text-white font-cocogothic text-sm text-center py-4`}>Contact Us</div>
                <div className={`text-white text-xs py-2`}><i className="fa-regular fa-envelope"></i> <a href = "mailto: eventsbyjuna@gmail.com">eventsbyjuna@gmail.com</a></div>
                <div className={`text-white text-xs pb-2`}><i class="fa-solid fa-location-dot"></i> Seattle, WA</div>
                <div className={`text-white text-xs`}><i className="fa-solid fa-phone"></i> (206) 209 7628</div>
              </div>

              <div className={`box-border h-48 w-64 border border-white`}>
                <div className={`text-white font-cocogothic text-sm p-4`}>
                  <div className={`text-white font-cocogothic text-sm text-center py-4`}>Office Hours</div>
                  <div className={`text-white font-cocogothic text-xs`}>Monday to Friday</div>
                  <div className={`text-white font-sans text-xs pb-4`}> 9:00 AM - 6:00PM</div>
                  <div className={`text-white font-cocogothic text-xs`}>Saturday to Sunday</div>
                  <div className={`text-white font-sans text-xs`}> 9:00 AM - 11:00 AM</div>
                  </div>
              </div>

              <div className={`box-border h-48 w-64 p-4 border border-white text-white font-cocogothic text-sm`}>
                <div className={`text-white font-cocogothic text-sm text-center py-4`}>Get Social</div>
                <div className={`flex flex-col items-center w-[100%]`}>
                  <div className={`grid grid-cols-3 gap-4`}>
                  <span> <a href="#"><i className="fa-brands fa-facebook text-3xl text-white"></i></a> </span>
                  <span> <a href="https://www.instagram.com/eventsbyjuna/" target="_blank"><i className="fa-brands fa-instagram text-3xl text-white"></i></a> </span>
                  <span> <a href="https://www.tiktok.com/@eventsbyjuna?is_from_webapp=1&sender_device=pc" target="_blank"><i className="fa-brands fa-tiktok text-3xl text-white"></i></a> </span>
                  </div>
                <div className={`pt-8`}><a href="https://www.instagram.com/eventsbyjuna/" target="_blank" className={'px-8 py-2 text-lg border border-white rounded-full bg-transparent font-cocogothic text-white text-sm'}>Tag us in your photos!</a></div>
                </div>
              </div>
          </div>
        </div>

        <div className={`text-center text-white font-cocogothic text-sm`}>© copyright Events by Juna <span className={`font-sans`}>2023</span> </div>
      </div>
</main>

  ) }