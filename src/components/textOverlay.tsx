import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'

const WebsiteOverlay: React.FC = () => {
  return (
    <motion.div
      className="top-0 flex flex-col absolute w-full h-full z-10 p-10 text-white"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <div className="flex font-bold flex-col my-auto max-w-[38rem] h-1/2 backdrop-blur-[40px] p-4 rounded-3xl">
        <div className="uppercase text-6xl">Nespresso</div>
        <div className="uppercase text-5xl mb-6">What else?</div>
        <Image
          src="https://www.nespresso.com/shared_res/mos/free_html/kr/local_recipes/capsule_VertuoFrostedCaramelNuts.png"
          width={150}
          height={150}
          alt="VL"
          className="absolute right-10"
        />
        <div className="mb-6 tracking-wide leading-6">
          Nespresso capsules are sleek, hermetically sealed pods containing
          premium, finely ground coffee. Designed for use with Nespresso
          machines, they offer a variety of rich flavors and aromas, ensuring a
          perfect espresso at the touch of a button.
        </div>
        <div className="flex text-3xl gap-8 mt-auto">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </motion.div>
  )
}

export default WebsiteOverlay
