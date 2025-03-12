import React from 'react'



const InvoiceStatus = ({date,companyName,companyLogoImg,amount,status}) => {
  
  const getColor =()=>{
    if(status==="overdue")
      return "text-red-600 bg-red-100 px-2 py-2"
     if(status==="paid")
      return "text-green-600 bg-green-100 px-2 py-2"
    return "";
  }
  return (
    <div>
      <div className='h-screen px-2 py-10 bg-white '>
        <div className='bg-white shadow-2xl h-[260px] w-[600px] px-12 rounded-lg'>
          <div className='flex items-center justify-between gap-6'>
         <div className='flex items-center gap-6'>
         <img src={companyLogoImg}  className="w-20 h-20 rounded-xl" />
         <span className='text-xl font-bold'>{companyName}</span>
         </div>
         <div>
          <h1 className='text-3xl'>...</h1>
         </div>
          </div>

          <div className='flex items-center justify-between py-10'>
            <h3 className='text-lg font-semibold'>Last invoice</h3>
            <h3 className='text-lg font-semibold'>{date}</h3>
          </div>

          <div className='flex items-center justify-between'>
            <h3 className='text-lg font-semibold'>Amount</h3>
            <div className='flex items-center gap-4'>
            <h3 className='text-lg font-semibold'>{amount}</h3>
            <button className='px-2 py-2 text-red-600 rounded-xl && '>{status}</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InvoiceStatus