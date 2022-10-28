import '../scss/_AboutSite.scss'
import AnimatedPage from '../Animations/AnimatedPage.js'

function AboutSite() {
  return (
    <AnimatedPage>
      <main className='AboutSite height-adjust'>
        <h1>The story behind why I built this site the way I did</h1>
        <p>In late August of 2022 I had a job interview with a marketing agency, where I was asked what I believed was my weakest point in CSS.  I responded with keyframes and animations.</p>
        <p>A bit later on in the interview it became clear they were looking for someone with a better understanding of those features.</p>
        <p>Therefore I set out to work on a new portfolio site which incorporated those features of CSS.</p>
        <p>This site has been the result and it continues to be a playground for me.  Along the way I also gained knowledge of Framer Motion, which I've also applied here.</p>

        <div className="photo-credit">
          <p>background photo by 
            <br></br>
          <a href="https://www.pexels.com/@danny-meneses-340146/">Danny Meneses</a> via Pexels</p>
        </div>
      </main>
    </AnimatedPage>
  )
}

export default AboutSite