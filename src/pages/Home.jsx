import React from 'react'
import Container from '../component/shared/Container';
import Trending from '../component/Trending';
import Featured from '../component/Featured';
import Latest from '../component/Latest';

function Home() {
  return (
    <Container>
    <div className={"text-start my-8 font-poppins space-y-5 p-4 md:p-1"}>
      <h1 className={"text-3xl text-gray-900 font-oswald font-bold leading-snug md:text-4xl text-center"}>Welcome to PeeDELLs World of Fragrance...</h1>
      <p className={"text-lg md:text-xl text-gray-700 indent-10 md:indent-20"}>Discover the enchanting scents that will transport you to a world of luxury and elegance. 
        Our carefully curated collection features the finest fragrances, each with its own unique story to tell. Indulge your senses and find your signature scent here.
         Feel free to explore our collections and find the perfect fragrance that speaks for you. Also, find more about our brand, a feedbacks to help improve us to a better advantage.</p>
    </div>

    <Trending />
    <Featured />
    <Latest />
  </Container>
  )
}

export default Home
