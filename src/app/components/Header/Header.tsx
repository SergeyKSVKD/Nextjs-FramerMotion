"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Button from "../Button/Button"
import styles from "./header.module.scss"

import Logo from "../../public/logo.svg"
import Monkey from "../../public/images/monkey.png"
import Alf from "../../public/images/alf.png"
import { FaRocket, FaWallet } from "react-icons/fa"
import { Abril_Fatface } from "next/font/google"
import useHover3d from "@/app/utils/useHover3d"
const abril = Abril_Fatface({
    subsets: ["latin"],
    weight: '400',

})


const Header = () => {
    const hero = useRef<HTMLDivElement>(null)
    const hoverHero = useHover3d(hero, { x: 20, y: -11, z: 50 })

    return (<>
        <div ref={hero}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="logo" width={120} draggable="false" />
                </div>
                <div className={styles.search}>
                    <input type="text" placeholder="Search" />
                </div>
                <div className={styles.navbar}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/auctions">Auctions</a>
                        </li>
                        <li>
                            <a href="/marketplace">Marketplace</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <Button name="Connect Wallet" icon={<FaWallet />} />
                    </ul>
                </div>
            </nav>
            <div className={styles.header_content}>
                <div className={styles.image_content}>
                    <div className={styles.image}>
                        <Image src={Alf} alt="hero" width={300} draggable="false"
                            style={{
                                transform: hoverHero.transform,
                                transition: hoverHero.transition,
                            }} />
                    </div>
                </div>
                <div className={styles.text_content}>
                    <h1 className={abril.className}>
                        Buy, collect and sell extraordinary NFTs
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore recusandae ipsam eveniet perferendis voluptatum rem impedit, commodi fuga aliquam quasi, sed, fugiat deserunt. Itaque aliquam dolorum necessitatibus quae, atque ab quas, officiis quaerat mollitia magni velit tempora perferendis vitae sed unde. Quaerat sit, atque quod a hic ipsum quasi non vero. Ipsa a facilis ea et ex voluptatibus eveniet nemo accusamus deleniti ipsam quam alias inventore numquam beatae atque provident laborum voluptates, dicta cumque natus quidem labore odit! Quibusdam beatae id deserunt, voluptatem recusandae placeat possimus odio sint vel labore praesentium aperiam voluptatibus accusantium ipsum eveniet ipsam temporibus earum.
                    </p>
                    <div className={styles.buttons}>
                        <Button name="Get Started" background="#f2994a" color="#fff" border="1px solid #f2994a" icon={<FaRocket />} width="200px" />
                        <Button name="Learn More" color="#fff" width="200px" />
                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default Header