import { socialMediaLinks } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'

const SocialMedia = () => {
  return (
    <>
    <ul className="flex items-center justify-center mt-[17px]">
        {socialMediaLinks.map((link, index) => (
          <li key={index} className={`${index !== socialMediaLinks.length - 1 ? 'me-[12px]' : ''}`}>
            <Link aria-label={link.link} href={link.link} target="_blank" className="font-monsterratB text-fs16">
              <Image  priority alt="icon" src={link.image} className="w-[30px] h-[30px] transition-all duration-200 delay-200 hover:transform hover:scale-125"/>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SocialMedia