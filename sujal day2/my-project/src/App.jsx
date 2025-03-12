import { useState } from 'react'

import './App.css'
import InvoiceStatus from './components/card/card'

function App() {
 
  return (
    <>
    <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     <InvoiceStatus date={"12/12/2021"} companyName={"Google"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"overdue"} />
    <InvoiceStatus date={"12/12/2021"} companyName={"Facebook"} companyLogoImg={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} amount={"$1000"} status={"paid"}
     />
     
    </>
  )
}

export default App
