import { useState } from "react";
import { Menu, X } from "lucide-react";
import HeroImg from "../assets/musician.jpg";
import '../App.css'
import AssessmentImg from "../assets/debbie_assessment.png"
import TrainingImg from "../assets/debbie_training.png"
import TranscriptionImg from "../assets/debbie_transcription.png"
import CommunityImg from "../assets/debbie_community.png"
import Rehearse from "../assets/debbie_rehearsal.jpg"
import Transcription  from "../assets/debbie_online.jpg"
import Online from "../assets/debbie_trans.jpg"
import Group from "../assets/debbie_group.jpg"
import { AssessmentIcon } from "./svgs/AssessmentIcon";
import { InstrumentIcon } from "./svgs/InstrumentIcon";
import { CommunityIcon } from "./svgs/CommunityIcon";
import { TranscriptionIcon } from "./svgs/TranscriptionIcon";



const steps = [
  {
    title: "Assessment",
    icon: <AssessmentIcon />,
    image: AssessmentImg,
    details: "We understad your current level, goals, and learning style to create a personalized plan for your growth."
  },
  {
    title: "Instrument-first training",
    icon: <InstrumentIcon />,
    image: TrainingImg,
    details: "We build a strong foundation on your chosen instrument with practical, hands-on lessons."
  },
  {
    title: "Transcription mastery",
    icon: <TranscriptionIcon />,
    image: TranscriptionImg,
    details: "Learn to transcribe songs by ear-melody, chords, and basslines-unlocking your ears and creativity."
  },
  {
    title: "Confidence & community",
    icon: <CommunityIcon />,
    image: CommunityImg,
    details: "Grow with a supportive sisterhood that encourages, uplifts, and celebrates every milestone."
  },
];

const offerings = [
  {
    title: "Online Courses",
    image: Online,
  },
  {
    title: "Group Coaching",
    image: Rehearse,
  },
  {
    title: "Church Team Training",
    image: Group,
  },
  {
    title: "Music Transcription",
    image: Transcription,
  },




]

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] text-white font-sans scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-xl z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-wide ">Debbie Ned</h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#programmes" className="hover:text-white transition">Programmes</a>
          <a href="#offerings" className="hover:text-white transition">Offerings</a>
          <a href="#contact" className="hover:text-white transition">Book</a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-2xl z-40">
          {["about", "programmes", "offerings", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 pt-10 md:pt-0 border overflow-hidden">
          <img
            src={HeroImg}
            className=" w-full h-full md:h-auto  object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl md:mt-6  md:ml-16 mx-auto px-6 ">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 typing ">
            Piano • Bass • Vocals
          </p>
          <div className=" w-fit">
            <h1 className="text-5xl  md:text-7xl  font-extrabold leading-tight  ">
              Debbie Ned</h1>
          </div>

          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            Closing the gender gap in music by empowering women to lead — not just sing, but play, direct, and own their place.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="px-3 md:px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition whitespace-nowrap ">
              Book a Session
            </a>

            <a href="#programmes" className="px-3 md:px-6 py-3 border border-white/40 rounded-full hover:bg-white hover:text-black transition whitespace-nowrap">
              View Programmes
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Debbie</h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Debbie Ned is a multi-instrumentalist, vocalist, and music educator based in Nigeria. In under two months, she has coached 50+ women, secured church and corporate endorsements, and built a fast-growing movement helping women discover their voice through instruments.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          <div className=" border-x md:border-r md:border-x-0">
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-400">Clients</p>
          </div>
          <div className="border-x md:border-r md:border-x-0">
            <h3 className="text-3xl font-bold">3</h3>
            <p className="text-gray-400">Instruments</p>
          </div>
          <div className="border-x md:border-r md:border-x-0">
            <h3 className="text-3xl font-bold">Church</h3>
            <p className="text-gray-400">Endorsements</p>
          </div>
          <div className="border-x  md:border-x-0">
            <h3 className="text-3xl font-bold">Pioneer</h3>
            <p className="text-gray-400">Female Movement</p>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-24 px-6 bg-[#050505]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Your Journey
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {steps.map((item) => (


            <div
              key={item.title}
              className="group bg-[#111] p-6 rounded-xl hover:scale-105 transition flex flex-col items-center text-center gap-4"
            >
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="w-8 h-8 group-hover:w-10 group-hover:h-10 group-hover:flex group-hover:items-center group-hover:justify-center p-4 group-hover:p-0 text-white/70 rounded-full  bg-white/5 group-hover:bg-white/10 transition">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">{item.title}</h3>
              <h4 className="text-white/60">
                {item.details}
              </h4>
            </div>


          ))}
        </div>
      </section>

      {/* PROGRAMMES */}
      <section id="programmes" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Coaching Programmes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "₦20,000/mo",
              desc: "For complete beginners",
            },
            {
              name: "Grower",
              price: "₦40,000/mo",
              desc: "For intermediate learners",
            },
            {
              name: "Pioneer",
              price: "₦80,000/mo",
              desc: "For advanced & ministry teams",
            },
          ].map((plan) => (
            <div key={plan.name} className="bg-[#111] p-8 rounded-2xl hover:scale-[1.03] transition">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.desc}</p>
              <p className="text-2xl font-semibold mb-6">{plan.price}</p>
              <a href="#contact" className="block text-center py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="py-24 px-6 bg-[#050505]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          All Offerings
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {offerings.map((item) => (
            <div key={item.title} className="bg-[#111] pt-6 p-2 rounded-xl text-center hover:scale-105 transition">
              <div>
                {item.title}
              </div>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Book a Session
        </h2>

        <p className="text-gray-400 mb-6">
          Tell us about your goals and let’s get started.
        </p>

        <a
          href="mailto:debbiened@gmail.com"
          className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition"
        >
          Contact Debbie
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500">
        @debbie_ned_music
      </footer>
    </div>
  );
}


