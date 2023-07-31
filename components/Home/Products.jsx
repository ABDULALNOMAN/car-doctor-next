import React from 'react'
import { AiFillStar} from 'react-icons/ai';
import items from '../../app/api/products.json'

const Products = () => {
  return (
    <section>
      <div>
        <div className='component_heading'>
            <h6 className='main_color'>Popular products</h6>
            <h3 className='text-4xl font-bold'>Browse Our products</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:w-full w-8/12 mx-auto'>
            {items?.map((item)=>(
                <div className='' key={item?.index}>
                    <div className="card card-compact p-4 shadow-md shadow-slate-200">
                        <img src={item?.picture} className='w-full h-44 rounded-md' alt="picture" />
                        <div className="card-body text-center">
                            <div className='flex justify-center items-center gap-x-1 text-orange-500'>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                            </div>
                            <h2 className="text-xl font-bold">{item?.title}</h2>
                            <p className='main_color text-base'>{item?.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='text-center mt-12'>
          <button className='btn_secondary'>more products</button>
        </div>
      </div>
    </section>
  )
}

export default Products
