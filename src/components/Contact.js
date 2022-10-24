import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../scss/_Contact.scss';
import AnimatedPage from './AnimatedPage';

const Contact = () => {
  const [input, setInput] = useState({
    name: 'Name',
    email: 'Email',
    message: 'Message'
  })
  const navigate = useNavigate();

  const handleInput = e => {
    setInput(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleFocus = e => {
    setInput(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value = ''
      }
    })
  }

  const handleBlur = e => {
    const formatName = string => {
      const first = string.slice(0, 1)
      const upperCase = first.toUpperCase()
      return upperCase + string.slice(1, string.length);
    }

    if(e.target.value === '') {
      setInput(prev => {
        return {
          ...prev,
          [e.target.name]: formatName(e.target.name)
        }
      })
    }
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...input })
    })
      .then(navigate(`success`))
      .catch(err => {
        console.log(err);
        navigate(`error`)
      });

    e.preventDefault();
  }

  return (
    <AnimatedPage>

    <main className="Contact height-adjust">
      <div className="Contact-form-container">
        <h1>Please Get in Touch</h1>
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="contact" value="Contact from Portfolio Site" />
            <p className="hidden">
              <label>Don't fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>
          <div className="form-control">
            <label 
              htmlFor="name"
              className="label"
            >Enter Name</label>
            <input 
              type="text" 
              className="input"
              id="name" 
              name="name"
              required
              value={input.name}
              onChange={handleInput}
              onFocus={handleFocus}
              onBlur={handleBlur} />
          </div>
          <div className="form-control">
            <label 
              htmlFor="email" 
              className="label"
              >Enter Email Address</label>
            <input 
              type="email" 
              className="input" 
              id="email" 
              name="email"
              required
              value={input.email}
              onChange={handleInput}
              onFocus={handleFocus}
              onBlur={handleBlur} />
          </div>
          <div className="form-control">
            <label 
              htmlFor="message" className="label"
            >Enter a Brief Message</label>
            <textarea 
              id="message" 
              className="input" 
              name="message" 
              required
              value={input.message}
              onChange={handleInput}
              onFocus={handleFocus}
              onBlur={handleBlur} ></textarea>
          </div>
          <div className="form-control">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </main>
    
              </AnimatedPage>
  )
}

export default Contact