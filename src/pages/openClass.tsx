import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import '../app/globals.css'
import { collection, getCountFromServer } from 'firebase/firestore'
import { db } from 'app/firebase'
import { motion } from 'framer-motion'
import Footer from 'components/footer/footer'
import { IoPeopleOutline } from 'react-icons/io5'
import Navbar from 'components/header/Navbar'

interface IProps {
  data: number
}

interface IEventSection {
  eventMonth: string
  eventDate: string
  classTitle: string
  classDescription: string
  classLocation: string
  vacancyRate: number
  classImage: string
}

const EventSection = ({
  eventMonth,
  eventDate,
  classTitle,
  classDescription,
  classLocation,
  vacancyRate,
  classImage,
}: IEventSection) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="flex flex-col items-center md:items-start justify-start">
      <div className="inline-flex items-center justify-cente bg-sky-800 mb-8 px-10 py-3 text-white">
        {eventMonth}
      </div>
    </div>
    <Link href="/openClass/1">
      <div className="flex flex-wrap">
        <div className="flex flex-wrap justify-between align-baseline bg-white overflow-hidden rounded-none w-full mb-10 cursor-pointer">
          <div className="flex !basis-1/6 md:!basis-1/12 flex-col justify-center items-center basis-1/12 border-solid border border-gray font-light relative">
            <p className="absolute top-0 left-0 w-full px-1 md:px-3 py-3 text-xs md:text-base text-center">
              Event
            </p>
            <p className="text-center text-gray">
              Mon
              <span className="block font-normal text-2xl md:text-4xl">01</span>
            </p>
          </div>
          <div className="flex flex-wrap basis-5/6 lg:basis-11/12">
            <div className="px-5 pt-5 pb-2 md:px-6 md:pt-6 md:basis-1/2 flex flex-col justify-between !p-5 md:!pd-10 !basis-full lg:!basis-1/2 bg-gray-100 order-2 lg:order-1">
              <p>{eventDate}</p>
              <h2 className="text-3xl font-semibold leading-10 font-normal">
                {classTitle}
              </h2>
              <p className="text-base font-light my-4 line-clamp-4 !my-0">
                {classDescription}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center justify-self-end justify-between">
                <p>{classLocation}</p>
                <p>
                  <IoPeopleOutline /> {vacancyRate} / 45
                </p>
              </div>
            </div>
            <div className="basis-full lg:basis-1/2 !order-1 lg:!order-2">
              <div className="md:basis-1/2">
                <img src={classImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
)

const OpenClass = ({ data }: IProps) => {
  return (
    <section className="bg-dark-blue">
      <Navbar />
      <div className="font-lato bg-white">
        <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-4">
          <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center md:items-start justify-start"
            >
              <h1 className="text-4xl font-bold pt-6 pb-3 text-left mb-5">
                Upcoming events
              </h1>
            </motion.div>
            <EventSection
              eventMonth="January. 2024"
              eventDate="2024-01-01"
              classTitle="Our Open Class"
              classDescription="Dive into the Our Open Class: Master espresso artistry and uncover unique flavors with our expert baristas, where every sip is an adventure."
              classLocation="Seoul, Korea"
              vacancyRate={data}
              classImage="https://www.nespresso.com/ecom/medias/sys_master/public/29408650821662/2311-festive-card-banner-ma-1120x630px.png?impolicy=small&imwidth=560&imdensity=1"
            />
            <EventSection
              eventMonth="Feb. 2024"
              eventDate="2024-02-015"
              classTitle="Our Open Class 2"
              classDescription="Explore the elegance of espresso in our Open Class. Master brewing techniques and savor premium blends with our expert baristas in a captivating session."
              classLocation="Hanam, Korea"
              vacancyRate={data}
              classImage="https://www.nespresso.com/shared_res/mos/free_html/kr/mainbanner/202311-referral-card-banner-1120x630px.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default OpenClass

export async function getServerSideProps() {
  const dbRef = collection(db, 'items-dev')
  const snapshot = await getCountFromServer(dbRef)
  const data = snapshot.data().count
  return { props: { data } }
}
