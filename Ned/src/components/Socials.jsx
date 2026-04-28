import React from 'react'
import X_logo from "../assets/socials/x-twitter-brands-solid.png"
import Fb_logo from "../assets/socials/facebook-f-brands-solid.png"
import LinkedIn_logo from "../assets/socials/linkedin-in-brands-solid.png"
import WhatsApp from "../assets/socials/whatsapp-brands-solid.png"




const socials = [
    {
        id: 1,
        img: X_logo,
        alt: "X logo linking Debbie_ned's x account",
        url: "https://www.x.com",
    },
    {
        id: 2,
        img: Fb_logo,
        alt: "X logo linking Debbie_ned's x account",
        url: "https://www.facebook.com",
    },
    {
        id: 3,
        img: LinkedIn_logo,
        alt: "X logo linking Debbie_ned's x account",
        url: "https://www.linkedin.com",
    },
    {
        id: 4,
        img: WhatsApp,
        alt: "WhatsApp logo linking Debbie_ned's WhatsApp page",
        url: "https://www.wa.me.2348171309425",
    },
]


const Socials = () => {
    return (
        <div className='flex gap-2 justify-center w-fit'>
            {socials.map(item => (
                <a href={item.url} key={item.id} target='blank' className=' w-9 h-9 border border-white/5 rounded-full p-1 hover:border-0 bg-white hover:bg-white/50  transition ease-in duration-500' >
                    <img src={item.img} alt={item.alt} className='h-full' />
                </a>
            ))
            }
        </div>
    )
}

export default Socials