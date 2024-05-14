import { offerData } from "@/constants/constants"
import Image  from 'next/image';

const OfferData = () => {
  return (
    <>
    {offerData.map((val,index) => (
        <div key={index}>
            <span className="icon mb-[20px] block">
                <Image src={val.icon} className="logoBlack"/>
            </span>
            <h3 className="dark:text-white text-primaryDark font-monsterratB text-fs18 mb-[10px]">{val.title}</h3>
            <p className="dark:text-white text-primaryDark font-monsterratR text-fs18">{val.description}</p>
        </div>
    ))}
    </>
  )
}

export default OfferData