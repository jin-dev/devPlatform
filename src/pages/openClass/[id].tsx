import React, { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import '../../app/globals.css'
import { motion, useIsPresent, AnimatePresence } from 'framer-motion'
import useStore from 'components/zustand/dataStore'
import DataItem from '../../type/types'

const initialItems = ['2024-01-13', '2024-01-20', '2024-01-21']
const initialItems2 = ['15:00', '16:00', '17:00']
const Item = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) => {
  const isPresent = useIsPresent()
  const animations = {
    style: {
      position: isPresent ? ('static' as const) : ('absolute' as const),
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid black',
      borderRadius: '10px',
      width: '140px',
      padding: '5px',
      marginLeft: '20px',
      cursor: 'pointer',
    },
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', stiffness: 900, damping: 40 },
    whileHover: {
      scale: 1.1, // Increase the scale on hover (you can adjust this value)
      boxShadow: '0px 0px 10px rgba(7, 89, 133)', // Add a shadow on hover
      // Add any other styles you want to apply on hover
    },
  }
  return (
    <motion.h1 {...animations} onClick={onClick}>
      {children}
    </motion.h1>
  )
}

type StoreState = {
  data: DataItem[] // Assuming DataItem is the type of your data
}

const ClassDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const dataStore = useStore((state: StoreState) => state.data)
  const [items, setItems] = useState(initialItems)
  const [items2, setItems2] = useState(initialItems2)
  const [flag, setFlag] = useState(false)
  const [final, setFinal] = useState(false)
  const [isSorted, setIsSorted] = useState(false)

  const sort = (a: string, b: string) => {
    if (isSorted) return a.localeCompare(b)

    return 0
  }
  const submitReversation = () => {
    setFinal(!final)
  }

  const handleRemoveSelf = (itemName: string) => {
    // setItems([...items].filter((name) => name !== itemName))

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    flag ? submitReversation() : null

    setFlag(!flag)
    setItems([...items2])
  }

  return (
    <div className="bg-dark-blue">
      <div className="font-lato bg-white">
        <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
          <div className="flex flex-wrap justify-between align-start bg-white overflow-hidden rounded-none w-full flex mb-10 my-10">
            <div className="flex !basis-1/6 lg:!basis-1/12 flex-col basis-1/12 font-light relative  bg-gray-50">
              <p className="w-full px-1 md:px-3 py-7 text-xs md:text-base text-center text-white bg-sky-800">
                WEB
                <span className="block font-normal text-2xl md:text-4xl">
                  07
                </span>
              </p>
            </div>
            <div className="flex flex-wrap basis-5/6 lg:basis-11/12">
              <div className="px-5 pt-5 pb-2 md:px-6 md:pt-6 md:basis-1/2 flex flex-col justify-between !p-5 md:!p-10 !basis-full lg:!basis-1/2 bg-gray-50 font-light">
                <p>2024-01-07 ~ 2024-01-28</p>
                <h2 className="text-3xl font-semibold leading-10 font-normal mt-5 mb-8">
                  Nespresso Open Coffee class
                </h2>
                <div className="py-2 text-left flex flex-wrap ">
                  {final ? (
                    <div>haha2</div>
                  ) : (
                    <AnimatePresence>
                      {[...items].sort(sort).map((item) => (
                        <Item key={item} onClick={() => handleRemoveSelf(item)}>
                          {item}
                        </Item>
                      ))}
                    </AnimatePresence>
                  )}
                </div>
              </div>
              <div className="basis-full lg:basis-1/2 bg-cover bg-center">
                <img src="https://www.nespresso.com/ecom/medias/sys_master/public/29402642317342/202311-festive-card-banner-acc-1120x630px.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassDetail
