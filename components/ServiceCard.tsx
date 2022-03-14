import React from 'react'
import Image from 'next/image'

type params = {
  image: string
  title: string
  description: string
}

function ServiceCard(params: params) {
  return (
    <div className="m-4 flex h-80 w-64 flex-col  items-center justify-center bg-sky-50 px-6 py-12 duration-500 hover:drop-shadow-2xl">
      <span className=" my-4 block align-middle">
        <Image src={params.image} height={60} width={60} alt={params.title} />
      </span>
      <h3 className="my-1 text-center font-rancho font-semibold tracking-wider                           ">
        {params.title}
      </h3>
      <h4 className="my-1 text-center">{params.description}</h4>
    </div>
  )
}

export default ServiceCard
