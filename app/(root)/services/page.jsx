import SimpleProcess from '../../../components/services/SimpleProcess'
import CarEngineService from '../../../components/services/CarEngineService'
import ServicesDetails from '../../../components/services/ServicesDetails'
import React from 'react'
import ServicesDirection from '../../../components/services/ServicesDirection'
import Download from '../../../components/services/Download'
import Special from '../../../components/services/Special'
import WashingVideo from '../../../components/services/WashingVideo'

const servicePage = () => {
  return (
    <div>
      <ServicesDetails></ServicesDetails>
      <div className='grid grid-cols-12 gap-x-6 w-full py-24 px-6'>
        <div className='lg:col-span-9 md:col-span-7 col-span-12'>
            <CarEngineService></CarEngineService>
            <SimpleProcess></SimpleProcess>
            <WashingVideo></WashingVideo>
        </div>
        <div className='lg:col-span-3 md:col-span-5 col-span-12'>
            <ServicesDirection></ServicesDirection>
            <Download></Download>
            <Special></Special>
        </div>
      </div>
    </div>
  )
}

export default servicePage
