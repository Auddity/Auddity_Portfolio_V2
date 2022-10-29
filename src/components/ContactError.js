import '../scss/_ContactError.scss'
import AnimatedPage from '../Animations/AnimatedPage';

const ContactError = () => {
  return (
    <AnimatedPage>
      <main className="ContactError height-adjust">
        <div className="container">
          <p>Sorry, there has been an error in sending a message</p>
          <p>You can try contacting me through my old sound design site</p>
          <a href="https://www.auddityllc.com/">Auddity LLC</a>
        </div>
      </main>
    </AnimatedPage>
  )
}

export default ContactError;