import React from 'react'
import Image from 'next/image'

type params = {
  image: string
  title: string
  description: string
}

function ServiceCard(params: params) {
  return (
    <div className="m-4 block w-64 items-center justify-center  bg-slate-600 p-4">
      <Image
        className="block"
        src={params.image}
        height={100}
        width={100}
        alt={params.title}
      />
      <h3>{params.title}</h3>
      <h4>{params.description}</h4>
    </div>
  )
}

export default ServiceCard
