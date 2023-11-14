import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const WebsiteOverlay: React.FC = () => {
  return (
    <div className="flex flex-col absolute w-full h-full z-10 p-10 text-white">
      <div className="flex font-bold flex-col my-auto max-w-[38rem] backdrop-blur-[40px] p-4 rounded-3xl">
        <div className="uppercase text-6xl">Nespresso</div>
        <div className="uppercase text-5xl mb-6">What else?</div>
        <div className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="flex text-3xl gap-8 mt-auto">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  )
}

export default WebsiteOverlay
