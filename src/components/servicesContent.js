import Image from 'next/image'

const servicesContent = ({image, title, description, sectionNav}) => {
  return (
    <div className={`bg-neutralOne grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 py-4 xl:px-[10%] justify-items-center`}>
      <div className={`order-last lg:order-first flex justify-center items-center`}>
        <div className="w-[80%] xl:w-[50%]">
              <div className={'text-neutralBrown font-catchymager text-4xl md:text-6xl'} id={sectionNav}>{title}</div>
              <div className={`pt-8 font-cocogothic text-lg text-neutralBrown`}>{description}</div>
        </div>
      </div>
      <div className={``}> 
        <Image src={`${image}`}
          width={500}
          height={900}
        />
      </div>
    </div>

  )
}

export default servicesContent;