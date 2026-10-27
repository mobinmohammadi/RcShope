
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
const MainLayout = () => {
  return (
    <div className='lg:w-247.5 mx-auto font-Dana'>
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default MainLayout