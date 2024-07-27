import React, { useState } from 'react'
import MapComponent from '../Map.tsx'
import arrow from '../../assets/icons/arrow.svg'

const Contact = () => {
  const [result, setResult] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleMessage = (event) => {
    setMessage(event.target.value)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', '04c635cb-059f-4084-a842-243082d078b7')

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json())

    if (res.success) {
      console.log('Success', res)
      // setResult(res.message);
      setResult('')
      setIsSubmitted(true)
      setEmail('')
      setMessage('')
      setName('')
    } else {
      console.log('Error', res)
      // setResult(res.message)
      setResult('')
      setEmail('')
      setMessage('')
      setName('')
    }
  }
  return (
    <div className="relative">
      <span className="text-4xl font-semibold">Contact</span>
      <div
        className="bg-[#fcd303] h-1.5 rounded-full my-5"
        style={{ width: '5%' }}
      ></div>
      <MapComponent />
      <p className="text-xl font-semibold my-5">Contact Form</p>
      <form action="" onSubmit={onSubmit} className="m-4 flex gap-5">
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            className="mb-5 bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-[32rem] p-2.5 "
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="name"
            id="subject"
            value={name}
            onChange={handleName}
            className="mb-5 bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-[32rem] p-2.5 "
            placeholder="Name"
            required
          />
          <textarea
            name="message"
            className="bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-[32rem] p-2.5 "
            rows={4}
            placeholder="Enter your message"
            value={message}
            onChange={handleMessage}
          ></textarea>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xl font-semibold ">Get in Touch</p>
            <p className="pt-2 text-sm text-cap-text">
              I&apos;m eager to connect with professionals and explore new
              opportunities. If you know of any positions or projects that match
              my skills, or if you’re open to collaboration or idea exchange,
              please reach out. Your support is greatly appreciated!
            </p>
          </div>

          <div className="text-button font-semibold border border-border-color rounded-lg p-2 h-fit w-fit shadow-md bg-border-background hover:underline ">
            {result ? (
              result
            ) : (
              <button type="submit" className="text-sm flex gap-2">
                <span>
                  <img src={arrow} />
                </span>
                Send Message
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
