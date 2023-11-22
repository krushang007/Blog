import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    const{page,totalPages,clickHandler}=useContext(AppContext);
  return (
    <div className='fixed bottom-0 py-4   w-full  inset-x-0  bg-white drop-shadow-2xl'>
        <div className='max-w-[500px] w-11/12 mx-auto flex justify-between'>
        <div className='flex gap-5'>
            { page>1 &&
            <button 
            
            onClick={()=>
                {
                    
                    clickHandler(page-1);
                }}
            className='border-[1px] border-green-400 bg-green-200 py-1 px-2 rounded-lg'>Previous </button>
            }
            {
                page<totalPages &&
                <button 
                onClick={()=>
                {
                    clickHandler(page+1);
                }}
                className='border-[1px] border-green-400  bg-green-200 py-1 px-2 rounded-lg'>Next</button>
            }
        </div>
        <div className='px-2 py-1 bg-green-200 rounded-md'>
            page {page} of {totalPages} 
        </div>
        </div>
        
    </div>
  )
}

export default Footer