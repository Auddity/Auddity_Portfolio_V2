import { Outlet } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import '../scss/_Layout.scss';
import Header from './Header';
import Footer from './Footer'

const Layout = () => {
  const { width } = useWindowSize();
  return (
    <div className='Layout'>
      <div className="left-bar"></div>
      {width > 810 && 
        <div className="right-bar"></div>
      }

      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

// TODO: Fix Mobile Layout 360 x 740