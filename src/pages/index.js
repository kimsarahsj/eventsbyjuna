import Image from 'next/image'
import styles from './index.module.css'
import { Inter } from 'next/font/google'
import CustomCard from '@/components/customCard'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex flex-col`}>
      <div className={`bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center h-screen flex items-center`}>
        <div className={`w-full text-center`}>
        <div className={`font-cocogothic text-lg text-white uppercase `}>Welcome To</div>
        <div className={`font-amsterdamone text-6xl text-white pt-12`}>Events by</div>
        <div className={`font-amsterdamone text-6xl text-white mt-2 pb-20`}>Juna</div>
        <div className={`font-cocogothic text-sm text-white uppercase`}><a href="#about">Learn More</a></div>
        </div>
      </div>

      <div className={`bg-neutralOne grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 py-4 xl:px-[10%] justify-items-center`}>
          <div className={`order-last lg:order-first flex justify-center items-center`}>
            <div className="w-[80%] xl:w-[50%]">
              <div className={'text-neutralBrown font-catchymager text-6xl'} id='about'>Full Service Event Planning</div>
              <div className={`pt-8 font-cocogothic text-lg text-neutralBrown`}>At Events by Juna we strive to deliver an unforgettable event from planning, decor, and catering we can make your dream event come to life. We work on events big or small including, but not limited to, engagements, weddings, corporate events, birthdays, baby showers, and anniversaries in Seattle and surrounding areas. Reach out to us today to find out how we can help you host your next event.</div>
              <div className={`pt-8 text-center`}><Link href='/services' className={'px-8 py-2 border border-neutralBrown rounded-full bg-transparent font-cocogothic text-neutralBrown text-xl'}>Contact Us</Link></div>
            </div>
          </div>
          <div className={``}> 
            <Image src={`/images/wedding_flowers.png`}
              width={500}
              height={900}
            />
          </div>
      </div>

      <div className={`bg-neutralTwo py-4`}>
       <div className={`text-neutralBrown text-center font-catchymager text-6xl py-8`}>
          A La Carte Event Services
       </div>

        <div className={`grid grid-cols-1 gap-8 px-12 py-4 xl:px-[10%] xl:grid-cols-3 justify-items-center`}>
          <CustomCard image={'\/images\/flower-arrangement.PNG'} cardName={`Flower Arrangements`} cardDescription={`floral creations | bouquets, centerpieces`} refLink={'/services/#flowers'}/>
          <CustomCard image={'\/images\/coco_balloons.jpg'} cardName={`Balloon Decorations`} cardDescription={`backdrop designs | balloon arches, garlands`} refLink={'/services/#balloons'}/>
          <CustomCard image={'\/images/gift-basket1.PNG'} cardName={`Gift Baskets`} cardDescription={`desserts & gifts | gift baskets, charcuterie boards`} refLink={'/services/#additional'}/>
        </div>

      </div>

      <div className={`bg-neutralOne`}>
        <div className={`px-12 py-4 xl:px-[10%] mb-12 flex justify-center justify-items-center grid grid-cols-1 lg:grid-cols-2`}>
          <div className="w-[80%] order-last lg:order-first xl:w-[50%]">
              <div className={'text-neutralBrown font-catchymager text-6xl pt-4'}>Catering & Delivery</div>
              <div className={`pt-8 font-cocogothic text-lg text-neutralBrown`}>Our mission is to provide you with delicious food for your event. We strive to use the freshest ingredients and we make sure to provide as many options as we can for specific dietary needs. Let us cater your next event!</div>
              <div className={`pt-8 text-center`}><Link href='/services/#catering' className={'px-8 py-2 mb-8 border border-neutralBrown rounded-full bg-transparent font-cocogothic text-neutralBrown text-xl'}>Catering Options</Link></div>
          </div>
            <div className={`p-4`}> 
              <Image src={`/images/catering.jpg`} 
              width={500} 
              height={300}
              />
              <div className={`border my-2 px-8 py-4 border-neutralBrown text-xs text-center font-cocogothic`}>
                We use the freshest ingredients to provide you an exceptional dining experience.
              </div>
            </div>
        </div>
      </div>

      <div className={`bg-neutralOne`}>
        <div className={`px-12 py-12 xl:px-[19%] grid grid-cols-1 xl:grid-cols-3 gap-4 flex justify-center justify-items-center`}>
                <div className={`w-[350px]`}>
                  <div className={``}>
                    <Image src={`/images/custom_cake.PNG`}
                      width="0" 
                      height="0"
                      sizes="100vw"
                      className="w-full h-auto"/>
                    </div>
                  <div className={`border border-neutralBrown my-4 px-8 py-4 text-xs text-center font-cocogothic`}>
                    <p>Add a custom cake to your event!</p>
                  </div>
                </div>

                <div className={`w-[350px] md:w-[400px] xl:w-[700px] col-span-2`}>
                  <div className={``}>
                    <Image src={`/images/hbd.jpg`}
                      width="0" 
                      height="0"
                      sizes="100vw"
                      className="w-full h-auto"/>
                    </div>
                  <div className={`border border-neutralBrown my-4 px-8 py-4 text-xs text-center font-cocogothic`}>
                    <p>We can help you design any event from birthdays, engagements, baby showers, and weddings.</p>
                  </div>
                </div>

        </div>
      </div>

      <div className={`h-[600px] bg-neutralTwo`}>
        <div className={`p-8`}>
          <div className={'text-neutralBrown font-catchymager text-6xl'}>Explore the Possibilities</div>
          <div className={`m-4 grid grid-cols-3`}>
            <div>
              <Image src={`/images/centerpiece.PNG`} width={200} height={100}/>
            </div>
            <div>
              <Image src={`/images/gallery2.jpg`} width={200} height={100}/>
            </div>
            <div>
              <Image src={`/images/gallery3.jpg`} width={200} height={100}/>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-[url('/images/reviews.png')] bg-cover bg-no-repeat bg-center h-screen flex items-center`}>
          <div className={`w-full text-center`}>
              <div className={`font-catchymager text-6xl text-white`}>What our</div>
              <div className={`font-catchymager text-6xl text-white pb-8`}>Customers say</div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mx-8`}>
                <div>
                  <div><i className="fa-solid fa-quote-left text-white"></i></div>
                  <div className={`font-cocogothic text-md text-white px-4 `}>Look no further! Events by Juna really delivered a flawless full service event. Not only were they prompt and courteous, they were also really creative and brought those ideas to life!</div>
                </div>
                <div>
                  <div><i className="fa-solid fa-quote-left text-white "></i></div>
                  <div className={`font-cocogothic text-md text-white px-4 `}>Very professional and accommodating. Juna worked with us and our budget and gave us the best event we could have asked for! Highly recommend!</div>
                </div>
                <div>
                  <div><i className="fa-solid fa-quote-left text-white "></i></div>
                  <div className={`font-cocogothic text-md text-white px-4 `}>I was impressed by the event designs and equally impressed by the delicious catering. If I ever have to plan another event again I know who to call.</div>
              </div>
            </div>
        </div>
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
  )
}