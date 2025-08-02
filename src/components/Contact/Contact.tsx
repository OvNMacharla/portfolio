import React, { useState } from 'react'
import MapComponent from '../Map.tsx'
import arrow from '../../assets/icons/arrow.svg'
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData()
    formData.append('access_key', '04c635cb-059f-4084-a842-243082d078b7')
    formData.append('email', email)
    formData.append('name', name)
    formData.append('message', message)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      }).then((res) => res.json())

      if (res.success) {
        setResult('Message sent successfully!')
        setIsSubmitted(true)
        setEmail('')
        setName('')
        setMessage('')
      } else {
        setResult('Something went wrong. Try again.')
      }
    } catch (error) {
      setResult('Network error.')
    }
  }

  return (
    <motion.div
      className="relative mt-20 px-6 md:px-16 py-16 min-h-screen bg-background"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <div className="bg-rose-500 h-1.5 rounded-full mt-2 w-16" />
      </div>

      <MapComponent />

      <motion.div
        className="grid md:grid-cols-2 gap-10 mt-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeOut' },
            },
          }}
          className="flex flex-col gap-5"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="bg-transparent border border-gray-600 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-rose-500 transition-all"
          />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="bg-transparent border border-gray-600 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-rose-500 transition-all"
          />
          <textarea
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            className="bg-transparent border border-gray-600 text-white text-sm rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-rose-500 transition-all"
          />
          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="mt-4 flex items-center gap-2 text-white font-medium bg-rose-500 px-6 py-3 rounded-lg shadow-lg hover:bg-rose-600 transition-all"
          >
            {result ? result : 'Send Message'}
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeOut' },
            },
          }}
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Get in Touch
          </h3>
          <p className="text-sm text-gray-400">
            I&apos;m eager to connect with professionals and explore new
            opportunities. If you know of any positions or projects that match
            my skills, or if you’re open to collaboration or idea exchange,
            please reach out. Your support is greatly appreciated!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
