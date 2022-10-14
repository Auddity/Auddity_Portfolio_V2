import { Outlet } from 'react-router-dom';
import '../scss/_Layout.scss';
import Header from './Header';
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='Layout'>
      <div className="left-bar"></div>
      <div className="right-bar"></div>

      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout