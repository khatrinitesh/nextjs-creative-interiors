import { experienceData } from '@/constants/constants'
import Image from 'next/image'

const ExperienceData = () => {
  return (
    <>
    <ul className="flex items-center justify-center px-[10px] gap-5 mb-[40px]">
    {experienceData.map((thumb,index) => (
        <li className="overflow-hidden">
            <Image src={thumb.icon} key={index} alt={thumb.title} className="aspect-w-16 aspect-h-9 cursor-pointer transition-all duration-200 delay-200 hover:scale-110"/>
        </li>
    ))}
    </ul>
    </>
  )
}

export default ExperienceData