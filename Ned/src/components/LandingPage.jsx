import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import HeroImg from "../assets/musician.png";
import HeroImg_sm from "../assets/musician_sm.jpg";
import '../App.css'
import AssessmentImg from "../assets/debbie_assessment.png"
import TrainingImg from "../assets/debbie_training.png"
import TranscriptionImg from "../assets/debbie_transcription.png"
import CommunityImg from "../assets/debbie_community.png"
import Rehearse from "../assets/debbie_rehearsal.jpg"
import Transcription from "../assets/debbie_online.jpg"
import Online from "../assets/debbie_trans.jpg"
import Group from "../assets/debbie_group.jpg"
import { AssessmentIcon } from "./svgs/AssessmentIcon";
import Logo from "../assets/logo.png";
import { InstrumentIcon } from "./svgs/InstrumentIcon";
import { CommunityIcon } from "./svgs/CommunityIcon";
import { TranscriptionIcon } from "./svgs/TranscriptionIcon";
import Socials from "./Socials";
import Mail from "../assets/socials/envelope-regular.png"
import Call from "../assets/socials/phone-solid.png"
import FooterBackground from "../assets/music_background.jpg"


const steps = [
  {
    title: "Assessment",
    icon: <AssessmentIcon />,
    image: AssessmentImg,
    details: "We understand your current level, goals, and learning style to create a personalized plan for your growth."
  },
  {
    title: "Instrument-first training",
    icon: <InstrumentIcon />,
    image: TrainingImg,
    details: "We build a strong foundation on your chosen instrument with practical, hands-on lessons."
  },
  {
    title: "Solfa mastery",
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
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-[#F8FAFC]  text-white font-sans scroll-smooth">
      {/*  */}
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl z-50 px-6 py-4 flex justify-between items-center border-b border-[#E7E5E4] shadow-sm shadow-[#0F172A]/5">

        <img src={Logo} alt="debbie_ned's logo" className="h-[8vh] md:h-[12vh]" />

        {/* DESKTOP NAVIGATION LINKS */}
        <div className="hidden md:flex gap-8 text-sm text-[#475569]">
          <a href="#about" className="hover:text-[#0F172A] font-medium transition">About</a>
          <a href="#programmes" className="hover:text-[#0F172A] font-medium transition">Programmes</a>
          <a href="#offerings" className="hover:text-[#0F172A] font-medium transition">Offerings</a>
          <a href="#contact" className="hover:text-[#F59E0B] font-semibold transition">Book</a>
        </div>

        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#F5F5F4] text-[#0F172A] hover:bg-[#E7E5E4] hover:scale-110 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* MOBILE MENU TRIGGER */}
          <button className="md:hidden text-[#0F172A]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>



      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#FAFAF9] flex flex-col items-center justify-center gap-8 text-2xl z-40 px-6 font-medium">
          {["about", "programmes", "offerings", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`capitalize transition duration-200 ${item === 'contact'
                ? 'text-[#F59E0B] hover:text-[#D97706] font-bold border-2 border-[#F59E0B] px-8 py-3 rounded-full w-full text-center mt-4 shadow-sm shadow-[#F59E0B]/10'
                : 'text-[#0F172A] hover:text-[#F59E0B]'
                }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}



      {/* HERO */}
      {/* <section className="relative border bg-[#FAFAF9] min-h-auto md:min-h-[65vh] lg:min-h-[70vh] pt-42 pb-24 md:my-28 flex items-center bg-[#FAFAF9">*/}
      {/* BACKGROUND IMAGES CONTAINER */}
      {/* <div className="absolute pt-10 md:pt-0 inset-0 overflow-hidden">
          <img
            src={HeroImg}
            className="w-full h-auto md:ml-auto object-cover opacity-90 max-md:hidden"
            alt="Debbie Ned Hero"
          />
          <img
            src={HeroImg_sm}
            className="md:hidden w-full h-full object-cover opacity-100"
            alt="Debbie Ned Hero Mobile"
          />
        </div> */}

      {/* BALANCED LIGHT GRADIENT OVERLAY */}
      {/* Mobile overlay covers top to bottom; Desktop overlay creates a solid text plate on the left and fades out completely over the photo on the right */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#FAFAF9ea]/90 to-[#FAFAF9] md:bg-linear-to-r md:from-[#FAFAF9] md:via-[#FAFAF9]/95 md:to-transparent md:w-3/4"></div> */}

      {/* TEXT & CTAs CONTAINER */}
      {/* <div className="relative z-10 max-w-7xl md:mt-6 md:w-fit md:ml-16 mx-auto px-6 w-full">
          <p className="text-xs tracking-[0.3em] w-fit  uppercase text-[#475569] font-semibold mb-4 typing">
            Piano • Bass • Vocals
          </p>
          <div className="w-fit">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#0F172A]">
              Debbie Ned
            </h1>
          </div>

          <p className="mt-6 text-[#475569] text-lg max-w-lg font-normal leading-relaxed">
            Empowering all through musical knowledge — Raising musical giants all over the world!
          </p>

          <div className="mt-8 flex gap-4"> */}
      {/* BRAND ACCENT CTA BUTTON */}
      {/* <a
              href="#contact"
              className="px-2 flex-1 md:px-7 py-3.5 bg-[#F59E0B] text-white rounded-full hover:bg-[#D97706] hover:scale-105 shadow-md shadow-[#F59E0B]/20 transition duration-200 whitespace-nowrap font-semibold tracking-wide text-center"
            >
              Book a Session
            </a> */}

      {/* SECONDARY OUTLINE BUTTON */}
      {/*<a
              href="#programmes"
              className="px-2 text-center flex-1 md:px-7 py-3.5 border border-[#E7E5E4] bg-white text-[#0F172A] rounded-full hover:bg-[#F5F5F4] hover:border-[#D6D3D1] transition duration-200 whitespace-nowrap font-medium shadow-sm shadow-[#0F172A]/5"
            >
              View Programmes
            </a>
          </div>
        </div>
      </section> */}

      {/* HERO */}
      <section className="relative bg-[#FAFAF9] min-h-[75vh] md:min-h-[85vh] pt-58 my-10 md:pt-32 md:my-18 pb-24 flex items-center overflow-hidden">
        {/* BACKGROUND IMAGES CONTAINER */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={HeroImg}
            className="w-full h-full  md:ml-auto object-cover object-center  opacity-90 max-md:hidden"
            alt="Debbie Ned Hero"
          />
          <img
            src={HeroImg_sm}
            className="md:hidden w-full h-full object-cover object-center opacity-100"
            alt="Debbie Ned Hero Mobile"
          />
        </div>

        {/* BALANCED LIGHT GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-b from-[#FAFAF9]/40 via-[#FAFAF9]/90 to-[#FAFAF9] md:bg-linear-to-r md:from-[#FAFAF9] md:via-[#FAFAF9]/80 md:to-transparent"></div>

        {/* TEXT & CTAs CONTAINER */}
        <div className="relative z-10 max-w-7xl w-full md:w-fit md:ml-16 mx-auto px-6">
          <p className="text-xs tracking-[0.3em] w-fit uppercase text-[#475569] font-semibold mb-4 typing">
            Piano • Bass • Vocals
          </p>
          <div className="w-fit">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#0F172A]">
              Debbie Ned
            </h1>
          </div>

          <p className="mt-6 text-[#475569] text-lg max-w-lg font-normal leading-relaxed">
            Empowering all through musical knowledge — Raising musical giants all over the world!
          </p>

          <div className="mt-8 flex gap-4 max-w-md">
            {/* BRAND ACCENT CTA BUTTON */}
            <a
              href="#contact"
              className="px-4 flex-1 md:px-7 py-3.5 bg-[#F59E0B] text-white rounded-full hover:bg-[#D97706] hover:scale-105 shadow-md shadow-[#F59E0B]/20 transition duration-200 whitespace-nowrap font-semibold tracking-wide text-center"
            >
              Book a Session
            </a>

            {/* SECONDARY OUTLINE BUTTON */}
            <a
              href="#programmes"
              className="px-4 text-center flex-1 md:px-7 py-3.5 border border-[#E7E5E4] bg-white text-[#0F172A] rounded-full hover:bg-[#F5F5F4] hover:border-[#D6D3D1] transition duration-200 whitespace-nowrap font-medium shadow-sm shadow-[#0F172A]/5"
            >
              View Programmes
            </a>
          </div>
        </div>
      </section>



      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto text-center bg-[#FAFAF9]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#0F172A]">About Debbie</h2>

        <p className="text-[#475569] text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Debbie Ned is a multi-instrumentalist, vocalist, and music educator based in Nigeria. In under two months, she has coached 50+ musicians from all over the world, secured church and corporate endorsements, and built a fast-growing movement helping people discover their voice through instruments.
        </p>

        {/* STATS COUNT GRID */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="border-x border-[#E7E5E4] md:border-r md:border-x-0 py-4 md:py-0">
            <h3 className="text-4xl font-extrabold text-[#F59E0B]">100+</h3>
            <p className="text-[#475569] font-medium text-sm mt-1 uppercase tracking-wider">Clients</p>
          </div>
          <div className="border-x border-[#E7E5E4] md:border-r md:border-x-0 py-4 md:py-0">
            <h3 className="text-4xl font-extrabold text-[#F59E0B]">2</h3>
            <p className="text-[#475569] font-medium text-sm mt-1 uppercase tracking-wider">Instruments</p>
          </div>
          <div className="border-x border-[#E7E5E4] md:border-r md:border-x-0 py-4 md:py-0">
            <h3 className="text-4xl font-extrabold text-[#F59E0B]">Church</h3>
            <p className="text-[#475569] font-medium text-sm mt-1 uppercase tracking-wider">Endorsements</p>
          </div>
          <div className="border-x border-[#E7E5E4] md:border-x-0 py-4 md:py-0">
            <h3 className="text-4xl font-extrabold text-[#F59E0B]">Pioneer</h3>
            <p className="text-[#475569] font-medium text-sm mt-1 uppercase tracking-wider">Female Movement</p>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT (YOUR JOURNEY) */}
      <section className="py-24 px-6 bg-white border-t border-b border-[#E7E5E4]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0F172A]">
          Your Journey
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {steps.map((item) => (
            <div
              key={item.title}
              className="group bg-[#FAFAF9] p-6 rounded-xl hover:scale-105 transition duration-300 flex flex-col items-center text-center gap-4 border border-[#E7E5E4] shadow-sm shadow-[#0F172A]/5 hover:shadow-md hover:shadow-[#F59E0B]/5 hover:border-[#F59E0B]/30"
            >
              <div className="overflow-hidden rounded-lg">
                <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
              </div>

              {/* ICON CONTAINER */}
              <div className="w-10 h-10 flex items-center justify-center p-2 text-[#475569] group-hover:text-white rounded-full bg-[#E7E5E4]/50 group-hover:bg-[#F59E0B] transition duration-300">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl text-[#0F172A]">{item.title}</h3>
              <h4 className="text-[#475569] text-sm leading-relaxed font-normal">
                {item.details}
              </h4>
            </div>
          ))}
        </div>
      </section>


      {/* PROGRAMMES */}
      <section id="programmes" className="py-24 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0F172A]">
          Coaching Programmes
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Single Session",
              price: "$25/mo",
              desc: "For single session subscription",
            },
            {
              name: "Monthly Session",
              price: "$75/mo",
              desc: "For monthly session subscription",
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className="bg-[#FAFAF9] p-8 rounded-2xl hover:scale-[1.03] transition duration-300 border border-[#E7E5E4] shadow-sm shadow-[#0F172A]/5 hover:shadow-md hover:shadow-[#F59E0B]/5 hover:border-[#F59E0B]/30 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#0F172A]">{plan.name}</h3>
                <p className="text-[#475569] text-sm mb-4">{plan.desc}</p>
                <p className="text-3xl font-extrabold mb-6 text-[#F59E0B]">{plan.price}</p>
              </div>

              <a
                href="#contact"
                className="block text-center py-3.5 bg-[#0F172A] text-white rounded-full hover:bg-[#1E293B] font-semibold transition duration-200 shadow-sm"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="py-24 px-6 bg-[#FAFAF9] border-t border-b border-[#E7E5E4]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0F172A]">
          All Offerings
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-white pt-6 p-4 rounded-xl text-center hover:scale-105 transition duration-300 mb-4 border border-[#E7E5E4] shadow-sm shadow-[#0F172A]/5 hover:shadow-md hover:border-[#F59E0B]/20"
            >
              <div className="text-lg font-bold text-[#0F172A] pb-5 tracking-wide uppercase ">
                {item.title}
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>




      {/* FOOTER */}
      <footer className="relative bg-[#FAFAF9] border-t border-[#E7E5E4] overflow-hidden text-[#475569]">
        {/* BACKGROUND IMAGE & VISUAL OVERLAY */}
        <div className="absolute inset-0">
          <img
            src={FooterBackground}
            alt=""
            className="w-full h-full object-cover opacity-10 filter sepia-20"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#FAFAF9]/60 via-[#FAFAF9]/90 to-[#FAFAF9]"></div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* UPPER LEVEL: THE ACTION ZONE (BOOKING CALL TO ACTION) */}
          <section id="contact" className="py-20 text-center border-b border-[#E7E5E4]/80">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#0F172A] tracking-tight">
              Ready to Raise Your Musical Voice?
            </h2>
            <p className="text-base md:text-lg text-[#475569] max-w-md mx-auto mb-8 font-normal leading-relaxed">
              Tell us about your goals and let’s craft your personalized learning map together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* PRIMARY MAIL CTA */}
              <a
                href="mailto:deborahebhomien7@gmail.com"
                className="w-full sm:w-auto px-8 py-4 bg-[#F59E0B] text-white font-semibold rounded-full hover:bg-[#D97706] hover:scale-105 shadow-md shadow-[#F59E0B]/20 transition duration-200 flex items-center justify-center gap-3"
              >
                <img src={Mail} alt="" className="h-5 w-5 brightness-0 invert" />
                Book a Session
              </a>
            </div>
          </section>

          {/* LOWER LEVEL: THE DIRECTORY ZONE */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center md:items-start text-center md:text-left">

            {/* COLUMN 1: BRAND IDENTIFIER */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={Logo} alt="debbie_ned's logo" className="h-[6vh] md:h-[8vh] w-auto object-contain" />
              <p className="text-xs text-[#475569]/80 max-w-xs leading-relaxed">
                Empowering musicians globally through rich technical knowledge, instrumental expertise, and vocal mastery.
              </p>
            </div>

            {/* COLUMN 2: CHANNELS & PHONE */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F172A] mb-1">Direct Channels</h4>
              <a
                href="tel:+2348171309425"
                className="group flex items-center gap-3 text-sm font-medium text-[#475569] hover:text-[#F59E0B] transition duration-200"
              >
                <div className="h-8 w-8 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center shadow-xs group-hover:bg-[#F59E0B]/10 group-hover:border-[#F59E0B]/30 transition">
                  <img src={Call} alt="Phone" className="h-4 w-4" />
                </div>
                <span>+234 817 130 9425</span>
              </a>
            </div>

            {/* COLUMN 3: SOCIAL COMMUNITIES */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex flex-col items-center md:items-end gap-1">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F172A] mb-1">Join the Movement</h4>
                <span className="text-xs font-medium text-[#475569]/70">@debbie_ned_music</span>
              </div>
              <div className="hover:scale-105 transition duration-200">
                <Socials />
              </div>
            </div>

          </div>

          {/* BOTTOM BAR: LEGAL & COPYRIGHT */}
          <div className="border-t border-[#E7E5E4]/60 py-6 text-center text-xs text-[#475569]/60 font-medium">
            &copy; {new Date().getFullYear()} Debbie Ned Music. All rights reserved. Built for musical giants.
          </div>

        </div>
      </footer>

    </div>
  );
}


