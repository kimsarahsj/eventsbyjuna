import { Inter } from 'next/font/google'
import styles from './form.module.css'
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Form() {

    const [required, setRequired] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        //Check Required Fields
        if(data.name.length>3 && data.email.length>6 && data.moreinfo.length>10)
        {
        const recipient = {
            name: data.name,
            email: data.email
        };
        const subject = `New Event Inquiry for ${data.event} on ${data.date}`;
        
        const preMessage = `
        <html>
        <head>
          <style>
            table {
              border-collapse: collapse;
              width: 50%;
              margin: auto;
            }
            
            th, td {
              border: 1px solid black;
              padding: 8px;
              text-align: left;
            }
            
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
        
        <h2>Event Information</h2>
        
        <table>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Ballons</td>
            <td>${data.balloons?"YES":"NO"}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>${data.date}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${data.email}</td>
          </tr>
          <tr>
            <td>Event</td>
            <td>${data.event}</td>
          </tr>
          <tr>
            <td>Flowers</td>
            <td>${data.flowers?"YES":"NO"}</td>
          </tr>
          <tr>
            <td>General Inquiry</td>
            <td>${data.general?"YES":"NO"}</td>
          </tr>
          <tr>
            <td>Guests</td>
            <td>${data.guests}</td>
          </tr>
          <tr>
            <td>Details</td>
            <td>${data.moreinfo.replace(/\n/g, '<br />')}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>${data.name}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>${data.number}</td>
          </tr>
        </table>
        
        </body>
        </html>
        `;
        const message = preMessage.replace(/\n/g,"");

        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipient: recipient, subject: subject, message: message }),
          });

          console.log(response);
    
          if (response.ok) {
            setSubmit(true);            
          } else {
            setSubmit(true);
            setError(true);
          }
        } else {
          setRequired(true);
        }

        } catch (err) {
          console.log(err);
        }
    }

    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);
    
    const getForm = () => {
      return (
        <div className={`flex flex-col`}>
        <div className={`bg-neutralOne bg-cover pb-12`}> 
            <div className={'text-neutralBrown font-catchymager text-6xl p-12'} id='about'>Contact Us</div>
            <form className={'w-full bg-neutralOne'} onSubmit={handleSubmit}>
                <div className={'px-12 py-4 xl:px-[10%] mb-12 flex grid grid-cols-1 md:grid-cols-2 gap-8 text-neutralBrown font-cocogothic text-base'}> 
                    <div className={`flex flex-col`}>
                        <label>Name <span className="text-pink-600">*</span></label>
                        <input type='text' className='rounded-full h-6 font-sans px-4' id='name' name="name"></input>
                    </div>
                    <div className={`flex flex-col`}>
                        <label>Email Address <span className="text-pink-600">*</span></label>
                        <input type='email' className='peer rounded-full h-6 font-sans px-4' id='email' name="email"></input>
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid email address</p>
                    </div>                    
                    <div className={`flex flex-col`}>
                        <label>Type of Event </label>
                            <select className='rounded-full px-4 h-6' id="event" name="event">
                                <option value="Other">Other</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Corporate Event">Corporate Event</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Holiday">Holiday</option>
                                <option value="Social Event">Social Event</option>
                                <option value="Wedding">Wedding</option>
                            </select>
                    </div>
                    <div className={`flex flex-col`}>
                        <label>Phone Number </label>
                        <input type='text' className='rounded-full h-6 font-sans px-4' id='number' name="number"></input>
                    </div>
                    <div className={`flex flex-col`}>
                        <label>Number of Guests </label>
                        <input type='text'className='rounded-full h-6 font-sans px-4' id='guests' name="guests"></input>
                    </div>
                    <div className={`flex flex-col`}>
                        <label>Event Date </label>
                        <input type='text' className='rounded-full h-6 font-sans px-4' id='date' name="date"></input>
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
                            <input type="checkbox" id="general" name="general" value="General"/>
                            <label htmlFor="general"> General Inquiry</label>
                        </div>
                    </div>
                    <div className={`flex flex-col`}>
                        <label htmlFor='moreinfo'>Additional Information <span className="text-red-500">*</span></label>
                        <textarea type='text' id='moreinfo' name="moreinfo" rows='4' className='block w-full p-4 rounded-md font-sans'></textarea>
                    </div> 
                </div>
                <div className='flex flex-col justify-center'>
                {required && 
                  <p className="text-pink-600 text-center py-4">Please make sure you have added all required fields: Name, Email and Additional Info</p>
                }
                <input type='submit' className={'self-center px-8 py-2 border border-neutralBrown rounded-full bg-transparent font-cocogothic text-neutralBrown text-xl hover:bg-stone-400'}/>
                </div>       
            </form>
        </div>
    </div>
      )
    }

    const getThanks = () => {
      return (
        <div className={`flex flex-col`}>
        <div className={`flex flex-col bg-neutralOne bg-cover pb-12 text-center justify-center items-center h-screen`}> 
            <div className={'text-neutralBrown font-catchymager text-6xl p-12'} id='about'>Thank you for contacting us.</div>
            <div className={'text-neutralBrown font-catchymager text-4xl p-12'} id='about'>We will respond to you soon!</div>
        </div>
    </div>
      );
    }

    const getError = () => {
      return (
        <div className={`flex flex-col`}>
        <div className={`flex flex-col bg-neutralOne bg-cover pb-12 text-center justify-center items-center h-screen`}> 
            <div className={'text-neutralBrown font-catchymager text-6xl p-12'} id='about'>Ooops looks like were having some issues.</div>
            <div className={'text-neutralBrown font-catchymager text-4xl p-12'} id='about'>Please email us directly at contact@eventsbyjuna.com</div>
        </div>
    </div>
      );
    }

  return (
    <main>
    {!submit && getForm()}
    {submit && !error && getThanks()}
    {submit && error && getError()}
    </main>
    )
}