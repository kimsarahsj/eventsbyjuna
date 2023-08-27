import Image from 'next/image'
import Link from 'next/link'

const customCard = ({image, cardName, cardDescription, refLink}) => {
  return (
    <div className={`w-[350px]`}>
      <div className={``}>
        <Image src={`${image}`}
          width="0" 
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt={cardDescription}/>
        </div>
      <Link href={`${refLink}`}>
      <div className={`border border-neutralBrown my-4 px-8 py-4 text-xs text-center font-cocogothic hover:bg-stone-400`}>
        <p>{cardDescription}</p>
        <p className={`text-2xl py-8`}>{cardName}</p>
    </div>
    </Link>
  </div>
  )
}

export default customCard;