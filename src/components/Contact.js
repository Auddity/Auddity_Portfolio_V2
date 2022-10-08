import { useState } from 'react'

const Contact = () => {
  const [input, setInput] = useState({
    name: 'Name',
    email: 'Email',
    message: 'Message'
  })

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

  console.log(input);

  return (
    <main className="Contact">
      <div className="Contact-form-container">
        <h1>Please Get in Touch</h1>
        <form>
          <div className="form-control">
            <label 
              htmlFor="name"
              className="label"
            >Enter Name</label>
            <input 
              type="text" 
              className="name"
              id="name" 
              name="name"
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
              type="text" 
              className="email" 
              id="email" 
              name="email"
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
              className="message" name="message" 
              value={input.message}
              onChange={handleInput}
              onFocus={handleFocus}
              onBlur={handleBlur} ></textarea>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Contact