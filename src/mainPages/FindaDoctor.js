import React from 'react'
import Subscribe from '../Components/subscribe/Subscribe'
import Info from '../Components/info/Info'
import Footer from '../Components/footer/Footer'
import Hero from '../Components/hero/Hero'
import Ques from '../pages/finddoctor/que_ans/Ques'
import Explore from '../pages/finddoctor/explore/Explore';
import Alldoctors from '../pages/finddoctor/alldoctors/Alldoctors'
import Finddocbanner from '../pages/finddoctor/finddocbanner/Finddocbanner'
import Doctab from '../pages/finddoctor/doctab/Doctab';

function FindaDoctor() {
  return (
    <>
    <Hero />
    <div className='findadoctor'>
        <Finddocbanner />
        <Doctab />
        <Alldoctors />
        <Explore />
        <Ques />
    </div>
    <Subscribe />
    <Info />
    <Footer />
    </>
  )
}

export default FindaDoctor