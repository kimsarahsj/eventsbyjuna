import { Inter } from 'next/font/google'
import styles from './form.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function form() {
  return (
<main className={`flex flex-col`}>
    <div className={`bg-neutralOne bg-cover h-screen min-h-screen`}> 
        <div className={'text-neutralBrown font-catchymager text-6xl p-12'} id='about'>Contact Us</div>
        <form className={'w-full bg-neutralOne'}>
            <div className={'px-12 py-4 xl:px-[10%] mb-12 flex grid grid-cols-1 md:grid-cols-2 gap-8 text-neutralBrown font-cocogothic text-base'}> 
                <div className={`flex flex-col`}>
                    <label>Name </label>
                    <input type='text' className='rounded-full h-6 font-sans' id='fname'></input>
                </div>
                <div className={`flex flex-col`}>
                    <label>Event Date </label>
                    <input type='text' className='rounded-full h-6 font-sans' id='date'></input>
                </div>
                <div className={`flex flex-col`}>
                    <label>Type of Event </label>
                        <select className='rounded-full h-6' id="event">
                            <option value="other">Other</option>
                            <option value="engagement">Anniversary</option>
                            <option value="birthday">Birthday</option>
                            <option value="wedding">Corporate Event</option>
                            <option value="engagement">Engagement</option>
                            <option value="engagement">Holiday</option>
                            <option value="engagement">Social Event</option>
                            <option value="wedding">Wedding</option>
                        </select>
                </div>
                <div className={`flex flex-col`}>
                    <label>Phone Number </label>
                    <input type='text' className='rounded-full h-6 font-sans' id='number'></input>
                </div>
                <div className={`flex flex-col`}>
                    <label>Number of Guests </label>
                    <input type='text'className='rounded-full h-6 font-sans' id='guests'></input>
                </div>
                <div className={`flex flex-col`}>
                    <label>Email Address </label>
                    <input type='email' className='peer rounded-full h-6 font-sans' id='email'></input>
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid email address</p>
                </div>
                <div> Services of Interest
                    <div>
                        <input type="checkbox" id="flowers" name="flowers" value="Flowers" />
                        <label htmlFor="flower"> Flower Arrangements</label>
                    </div>
                    <div>
                        <input type="checkbox" id="balloons" name="balloons" value="Balloons" />
                        <label htmlFor="balloons"> Balloon Decorations</label>
                    </div>
                    <div>
                        <input type="checkbox" id="catering" name="catering" value="Catering"/>
                        <label htmlFor="catering"> Catering</label>
                    </div>
                    <div>
                        <input type="checkbox" id="general" name="general" value="General"/>
                        <label htmlFor="general"> General Inquiry</label>
                    </div>
                </div>
                <div className={`flex flex-col`}>
                    <label for='moreinfo'>Additional Information </label>
                    <textarea type='text' id='moreinfo' rows='4' className='block w-full rounded-md font-sans'></textarea>
                </div> 
            </div>
            <div className='flex  justify-center'>
             <input type='submit' className={'self-center px-8 py-2 border border-neutralBrown rounded-full bg-transparent font-cocogothic text-neutralBrown text-xl hover:bg-stone-400'}/>
            </div>       
        </form>

    </div>

</main>

  )}