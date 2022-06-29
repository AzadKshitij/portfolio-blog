import React, { useState } from 'react'
import Link from 'next/link'
import { ServiceCard } from '@components/index'
import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

type target = {
  style: {
    color: string
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    // client
    //   .create(contact)
    //   .then(() => {
    //     setLoading(false)
    //     setIsFormSubmitted(true)
    //   })
    //   .catch((err) => console.log(err))
  }

  return (
    <section className="mb-10 mt-10 flex flex-col content-center items-center justify-center self-center bg-purple-50 py-14 text-black">
      <h1 className="my-10 font-rancho text-5xl text-gray-800 ">
        Take A Coffee & Chat With Me
      </h1>

      <div className="flex flex-col items-center space-y-5 md:flex-row lg:space-x-20">
        <a
          className=" flex w-72 flex-row items-center justify-center space-x-4 rounded-lg bg-blue-50 px-5 py-2"
          href="mailto:sanodariya.1@iitj.ac.in"
        >
          <Image src="/icons/love-message.png" height={50} width={50} />
          <p>sanodariya.1@iitj.ac.in</p>
        </a>
        <a
          className="flex w-72 flex-row items-center justify-center space-x-4 rounded-lg bg-blue-50 px-5 py-2"
          href="tel:704-144-7901"
        >
          <Image src="/icons/phone-call.png" height={50} width={50} />
          <p>(+91) 7041447901</p>
        </a>
      </div>

      {/* <div className="flex flex-col flex-wrap items-center justify-center align-middle md:flex-row"></div> */}

      <div className="mt-10 flex flex-row flex-wrap items-center justify-center space-x-4  ">
        <a
          title="Facebook"
          className=" group rounded-full p-4 transition-all duration-300 ease-in  hover:bg-[#a549ad]"
          href="facebook.com"
        >
          <FaGithub
            size={20}
            className="text-[#5f2b8e] transition-all duration-300 ease-in group-hover:text-white"
          />
        </a>
        <a
          className=" group rounded-full p-4 transition-all duration-300 ease-in hover:bg-[#f8b852]"
          title="Facebook"
          href="facebook.com"
        >
          <FaInstagram
            className="text-[#5760da] transition-all duration-300 ease-in group-hover:text-white"
            size={20}
          />
        </a>
        <a
          className=" group rounded-full p-4 transition-all duration-300 ease-in hover:bg-[#c91016]"
          title="Facebook"
          href="facebook.com"
        >
          <FaLinkedin
            className="text-[#155a9e] transition-all duration-300 ease-in group-hover:text-white"
            size={20}
          />
        </a>
        <a
          className=" group rounded-full p-4 transition-all duration-300 ease-in hover:bg-[#515f6b]"
          title="Facebook"
          href="facebook.com"
        >
          <FaTwitter
            className="text-[#1a8cd8] transition-all duration-300 ease-in group-hover:text-white"
            size={20}
          />
        </a>
        <a
          className=" group rounded-full p-4 transition-all duration-300 ease-in hover:bg-[#1e2122]"
          title="Facebook"
          href="facebook.com"
        >
          <FaYoutube
            className="text-[#cc0000] transition-all duration-300 ease-in group-hover:text-white"
            size={20}
          />
        </a>
        <a
          className=" group rounded-full p-4 transition-all duration-300 ease-in hover:bg-[#0062e0]"
          title="Facebook"
          href="facebook.com"
        >
          <FaFacebookF
            className="text-[#17abfd] transition-all duration-300 ease-in group-hover:text-white"
            size={20}
          />
        </a>
      </div>
    </section>
  )
}
