const Footer = () => {
    return (<div className={`bg-neutralBrown flex flex-col`}>
    <div className={`p-8`}>
      <div className={`font-catchymager text-3xl text-white`}>Events by Juna</div>
    </div>
    <div className={`pb-12 self-center w-[100%] xl:w-[65%]`}>
      <div className={`m-4 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-2`}>
          <div className={`box-border h-48 w-64 p-4 border border-white `}>
            <div className={`text-white font-cocogothic text-base text-center py-4`}>Contact Us</div>
            <div className={`text-white text-sm py-2`}><i className="fa-regular fa-envelope"></i> <a href = "mailto: eventsbyjuna@gmail.com">eventsbyjuna@gmail.com</a></div>
            <div className={`text-white text-sm pb-2`}><i className="fa-solid fa-location-dot"></i> Seattle, WA</div>
            <div className={`text-white text-sm`}><i className="fa-solid fa-phone"></i> (206) 209 7628</div>
          </div>

          <div className={`box-border h-48 w-64 border border-white`}>
            <div className={`text-white font-cocogothic text-sm p-4`}>
              <div className={`text-white font-cocogothic text-base text-center py-4`}>Office Hours</div>
              <div className={`text-white font-cocogothic text-sm`}>Monday to Friday</div>
              <div className={`text-white font-sans text-sm pb-4`}> 9:00 AM - 6:00PM</div>
              <div className={`text-white font-cocogothic text-sm`}>Saturday to Sunday</div>
              <div className={`text-white font-sans text-sm`}> 9:00 AM - 11:00 AM</div>
              </div>
          </div>

          <div className={`box-border h-48 w-64 p-4 border border-white text-white font-cocogothic text-sm`}>
            <div className={`text-white font-cocogothic text-base text-center py-4`}>Get Social</div>
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
  </div>);
}

export default Footer;