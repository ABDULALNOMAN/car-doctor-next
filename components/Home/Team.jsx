import teamsInfo from '../../app/api/teamInfo.json'

const Team = () => {
  return (
    <div className='py-24'>
        <div>
            <div className='component_heading'>
                <h6 className='main_color '>team</h6>
                <h2 className='text-4xl font-bold'>meet our team</h2>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='relative'>
                <div className=''>
                    <div className="carousel w-full">
                        {teamsInfo?.map((team)=>(
                            <div id={team?.parentId} key={team?.index} className="carousel-item relative w-full ">
                                <div className='grid grid-cols-3 gap-3 w-10/12 mx-auto '>
                                    {team?.busket.map((data)=>(
                                        <div className='p-3 border-2 rounded-2xl'>
                                            <img src={data?.image} className='rounded-2xl' alt="image" />
                                            <div className='flex flex-col justify-center items-center text-center gap-y-1 py-3'>
                                                <h2 className='text-xl font-bold'>{data?.title}</h2>
                                                <p>{data?.status}</p>
                                                <div className='flex justify-center items-center gap-x-3 mt-2'>
                                                    {data?.social.map((icon)=>(
                                                        <img className="w-10 h-10" src={icon} alt="" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-full">
                                    <div className='absolute left-5 flex flex-col justify-center items-center h-full'>
                                        <a href={team?.prev} className="btn btn-circle btn_primary rounded-full">❮</a> 
                                    </div> 
                                    <div className='absolute right-5 flex flex-col justify-center items-center h-full'>
                                        <a href={ team?.next} className="btn btn-circle btn_primary rounded-full">❯</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team

