import React from 'react'
import Container from '../component/shared/Container';



function Aboutus() {

  return (
   <div>
  <img src="/img/edoardo.jpg" alt="About PeeDELL's Banner" className="w-full h-[50vh] md:h-[50vh] object-cover" />
  <Container>
    <div className="max-w-6xl mx-auto p-6 md:p-10 text-gray-700 bg-white rounded-xl shadow-xl space-y-10 font-poppins">
      <h1 className="text-3xl md:text-5xl font-bold font-serif text-center text-gray-800 my-10"> About PeeDELL's</h1>

      <section className="space-y-4 text-base md:text-lg leading-relaxed indent-12">
          We are a team of passionate individuals committed to delivering the best products and services to our customers. PeeDELL’s is your favorite online destination for <strong>100% original and luxurious fragrances. </strong> 
          Our platform exists to create awareness of our products and services. We are experts in fragrance, passionate about making authentic perfumes accessible to everyone across the region. 
          We believe fragrance is a form of personal expression—an invisible signature that leaves a lasting impression. Each scent is carefully crafted to evoke emotion, capture memories, and celebrate individuality.
          Using the highest-quality ingredients sourced from around the world, we combine traditional perfumery techniques with modern creativity to create fragrances that are timeless yet innovative. Our large collection of authentic 
          perfumes, fragrances, diffusers, and beauty products is proudly delivered with the best deals and gift sets available online.
        <p>
          <strong>PeeDELL’s Services Ltd</strong> is an online perfume store designed to awaken your senses. As one of the largest online perfume retailers, we bring you top international brands, exclusive collections, 
          and premium-quality products. Our goal is to offer an experience that’s not just about scent, but about <strong>style, care, and confidence</strong>. From browsing to checkout, you’ll enjoy great service, fair pricing, 
          and exclusive deals—making us the top choice for perfume lovers worldwide.
        </p>
      </section>

      <section className="space-y-3 mt-16">
        <h4 className="font-bold font-sans text-3xl text-[#48423c]">Our <span className="text-[#b58b65]">Mission</span></h4>
        <p className="text-base md:text-lg leading-relaxed indent-6">
          To deliver authentic, high-quality fragrances that bring confidence, happiness, and elegance to everyday life. We aim to craft exceptional fragrances that connect with the soul, awaken emotions, 
          and celebrate the unique spirit within every individual. Our mission is to empower self-expression through daring, unconventional fragrances that defy the ordinary—luxury made accessible with top-notch service 
          and affordable prices.
        </p>

        <h4 className="font-bold font-sans text-3xl text-[#48423c]">Our <span className="text-[#b58b65]">Vision</span></h4>
         <p className="text-base md:text-lg leading-relaxed indent-6">
          To become the most trusted and loved online perfume store, leading fragrance trends globally. We aspire to be a global symbol of authenticity and artistry—synonymous with timeless creativity, prestige, and unforgettable 
          sensory journeys. Our vision is to inspire people to express their truest selves through scent, creating timeless memories along the way.
         </p>

        <h4 className="font-bold font-sans text-3xl text-[#48423c]">Why Shop <span className="text-[#b58b65]">With Us?</span></h4>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
          <li><strong>100%</strong> original products — guaranteed,</li>
          <li>Exclusive deals, seasonal offers, and member discounts,</li>
          <li>A team that genuinely cares about your fragrance journey,</li>
          <li>Multiple payment options — Cash on Delivery, Credit Card, Wallet, Tabby, and Tamara.</li>
        </ul>
      </section>
    </div>
  </Container>
</div>


  )
}

export default Aboutus;
