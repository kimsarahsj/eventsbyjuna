import { Inter } from 'next/font/google'
import styles from './form.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function form() {
  return (
<main className={`flex flex-col`}>
    <div className={`bg-neutralOne bg-cover h-screen`}> 
        <div className={'text-neutralBrown font-catchymager text-6xl'} id='about'>Contact Us</div>
        <form className={'w-full'}>
            <div className={'px-12 py-4 xl:px-[10%] mb-12 flex grid grid-cols-1 md:grid-cols-2 gap-4 text-neutralBrown font-cocogothic text-base'}> 
                <div className={`flex flex-col`}>
                    <label>Name </label>
                    <input type='text' id='fname'></input>
                </div>
                <div className={`flex flex-col`}>
                    <label>Event Date </label>
                    <input type='text' id='date'></input>
                </div>
                <div className={`flex flex-col`}>
                    <label>Type of Event </label>
                        <select id="event">
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
                    <input type='text' id='number'></input>
                </div>
                <div className={`flex flex-col`}>
                    <label>Number of Guests </label>
                    <input type='text' id='guests'></input>
                </div>
                <div className={`flex flex-col`}>
                    <label>Email Address </label>
                    <input type='text' id='email'></input>
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
                    <textarea type='text' id='moreinfo' rows='4' className='block w-full'></textarea>
                </div>
            </div>
            <input type='submit' className={'self-center px-8 py-2 border border-neutralBrown rounded-full bg-transparent font-cocogothic text-neutralBrown text-xl'}/>
        </form>

    </div>

</main>

  )}