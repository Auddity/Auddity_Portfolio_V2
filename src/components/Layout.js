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

// TODO: Fix Mobile Layout 360 x 740