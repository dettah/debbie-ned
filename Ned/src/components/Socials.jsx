import React from 'react'
import X_logo from "../assets/socials/x-twitter-brands-solid.png"
import Fb_logo from "../assets/socials/facebook-f-brands-solid.png"
import LinkedIn_logo from "../assets/socials/linkedin-in-brands-solid.png"
import WhatsApp from "../assets/socials/whatsapp-brands-solid.png"

const socials = [
    {
        id: 1,
        img: X_logo,
        alt: "Follow Debbie Ned on X (Twitter)",
        url: "https://x.com",
    },
    {
        id: 2,
        img: Fb_logo,
        alt: "Connect with Debbie Ned on Facebook",
        url: "https://facebook.com",
    },
    {
        id: 3,
        img: LinkedIn_logo,
        alt: "Connect with Debbie Ned on LinkedIn",
        url: "https://linkedin.com",
    },
    {
        id: 4,
        img: WhatsApp,
        alt: "Chat directly with Debbie Ned on WhatsApp",
        url: "https://wa.me/2348171309425?text=Hello%20Debbie!%20I%20visited%20your%20website%20and%20I%20would%20love%20to%20book%20a%20music%20coaching%20session.",
    },
]

const Socials = () => {
    return (
        <div className='flex gap-3 justify-center w-fit'>
            {socials.map(item => (
                <a
                    href={item.url}
                    key={item.id}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 flex items-center justify-center border border-[#E7E5E4] rounded-full p-2.5 bg-white shadow-sm shadow-[#0F172A]/5 hover:border-[#F59E0B] hover:bg-[#F59E0B]/5 hover:scale-110 transition duration-300'
                >
                    <img src={item.img} alt={item.alt} className='h-full w-auto object-contain opacity-80 hover:opacity-100' />
                </a>
            ))}
        </div>
    )
}

export default Socials
