"use client"

import Image from "next/image"

import logo from "public/img/logo.svg"

const Icon = () => {
    return(
        <div>
            <Image src={logo} alt="LayerHorizon" width={200} height={140}/>
        </div>
    )
}

export default Icon;