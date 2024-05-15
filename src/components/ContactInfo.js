import { contactInfo } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'

const ContactInfo = () => {
  return (
    <>
    <ul>
    {contactInfo.map((info, index) => (
        <li key={index}  className={`flex items-center justify-start ${index !== contactInfo.length - 1 ? 'mb-4 md:mb-6' : ''}`}>
          <Link target="_blank" href={info.link} className='flex items-center font-monsterratM text-fs14 lg:text-fs16 hover:text-txtgray transition-all delay-200 duration-200'>
          <Image className="w-4 h-4 me-6" src={info.icon}/>
          <span>{info.value}</span>
          </Link>
        </li>
      ))}
      </ul>
    </>
  )
}

export default ContactInfo