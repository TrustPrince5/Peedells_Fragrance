import React from 'react';
import Container from '../component/shared/Container'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";



function Contact() {
  return (
      <div className=''>
        <div className="relative w-full h-[50vh] ">
        <img src="/img/contact4.jpg" alt="Contact Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-10 right-5 md:right-35 md:flex flex-wrap gap-6 space-y-5 md:text-white/30 text-white/40" >
          <FaPhoneVolume size={40} className='md:size-25' />
          <FaAt size={40} className='md:size-25' />
          <FaEnvelope size={40} className='md:size-25' />
          <IoIosChatboxes size={40} className='md:size-25' />
        </div>
      </div>
    <Container>
       <section className="my-16 p-8 text-gray-700 font-poppins text-base md:text-lg">
          <h1 className="text-3xl md:text-4xl font-bold font-oswald ">Get in touch with us..</h1>
          <p className="my-6"> Have questions or need assistance? Fill out the form below or reach out<span className="md:block"> to us directly.</span></p>

          <div className="space-y-2 mb-8">
            <p><strong>Email:</strong> Peedellsfragrance@gmail.com</p>
            <p><strong>Phone:</strong> (+234) 903 2673 722</p>
            <p><strong>Address:</strong> Ikeja Lagos, Nigeria.</p>
          </div>
          <main className="flex flex-col lg:flex-row justify-between gap-10 text-left">
           <div className="md:bg-white/40 md:rounded md:shadow-2xl md:w-full md:max-w-2xl h-full md:p-12 text-[#ac7064]">
                 <form className="space-y-6">
                    <div>
                       <input type="email" placeholder="Enter your email address" 
                       className="w-full px-4 py-3 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-[#b58b65] focus:border-transparent" />
                    </div>
                    <div>
                      <input type="text" placeholder="Enter your name" 
                      className="w-full px-4 py-3 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-[#b58b65] focus:border-transparent" />
                    </div>
                     <div>
                       <textarea placeholder="Enter your message" rows="7" cols="30"
                        className="w-full px-4 py-3 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-[#b58b65] focus:border-transparent"></textarea>
                     </div> 
                   <div>
                    <p className="text-lg text-slate-500">* All fields are mandatory.</p>
                   </div>
                <div>
                   <button className="bg-[#0B0500] duration-500 hover:bg-[#D8F1A0] hover:text-[#0B0500] text-[#D8F1A0] px-5 py-3"> Send Message</button>
                </div>
              </form>
            </div>
            <div className="flex flex-col justify-around items-center md:items-end gap-6 w-full max-w-lg md:-mt-80">
              <div className="md:p-8 md:h-[80vh] md:bg-white/40 md:shadow-2xl md:rounded ">
                <h1 className=" text-xl text-center font-oswald my-10">We would love to hear from you!</h1>
                <p className="">Your feedback is important to us. We welcome your suggestions on how we can improve. If you need more information on how we can assist you, please feel free to chat with our AI assistant for quick responses.
                  Our dedicated customer service team is also available to address your inquiries, share your thoughts, explore partnership opportunities, resolve issues, and provide solutions tailored to your needs.
                  Every message is handled with a personalized response.</p>
                <p className="mt-4">We value your input and strive to respond promptly. Thank you for choosing <strong>PeeDELL's!</strong></p>
                </div>

                <div className='ml-10 space-y-2'>
                <img src="/img/cusRep.png" alt="customer representative" className='w-full h-auto object-cover' />
                <button className="rounded bg-[#0B0500] duration-500 hover:bg-[#D8F1A0] hover:text-[#0B0500] text-[#D8F1A0] px-10 py-1">Chat with Olivia..</button>
                </div>
              </div>   
          </main>
        </section>
    </Container>
      </div>
  )
}

export default Contact;

       


    

