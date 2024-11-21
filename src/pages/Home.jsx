import React from 'react'
import { shops } from "../resource/shop"
import { Link } from 'react-router-dom'
import backgroungPic from '../pictures/bg.jpg'
import SlideShow from '../components/NotUser/SlideShow'
import '@mantine/carousel/styles.css';
import useUserStore from '../stores/user-store'
const Home = () => {
  const user = useUserStore(state=>state.user)
  return (
    <div>
      <section style={{
        backgroundImage: `url(${backgroungPic})`,
        backgroundSize: "cover",
        backgroundPositionY: "60%",
        height: "40vh",
      }}>

        <div style={{
          backgroundSize: "cover",
          backgroundPositionY: "60%",
          height: "40vh",
          backgroundColor: "rgba(255 ,255 ,255 ,0.3)"
        }}>
          <div className="h-full flex flex-col items-center justify-center gap-4 container mx-auto px-4 text-center z-10 ">
            <h1 className="text-8xl font-bold drop-shadow-2xl ">SK EXPRESS</h1>
            <p className="text-2xl ">บริการนำเข้าและสั่งซื้อสินค้าจากญี่ปุ่น</p>
            {!user
            ?<Link to={'login'} className="bg-yellow-300 text-gray-900 w-[200px] px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition duration-300">
              <p>Log in</p>
            </Link>
            :<></>
            }
          </div>
        </div>
      </section>

        <div className="bg-white pt-8">
          <h2 className="text-4xl font-bold text-center mb-6  text-black drop-shadow-xl">Our Services</h2>
          <div className=' bg-black p-auto'>
            <SlideShow />
          </div>
        </div>
    


      <section className="py-16  bg-red-600">
        <div className="container mx-auto px-4" >
          <h2 className="text-6xl font-bold text-center mb-12">Featured Brands</h2>
          <div className='rounded-3xl bg-white'>
            <div className='relative flex flex-wrap gap-4 justify-center py-20'>
              {shops.map((el, index) => (
                <div key={index} >
                  <a href={el.link} >
                    <img className='transition-transform transform hover:scale-110 rounded-2xl' src={el.pic} alt={el.name} /></a>
                </div>
              ))}
              <Link to={"product"}><p className='absolute bottom-0 right-0 my-7 mx-8 text-3xl hover:scale-105'>View more</p></Link>
            </div>
          </div>

        </div>
      </section>

    </div>

  )
}

export default Home



