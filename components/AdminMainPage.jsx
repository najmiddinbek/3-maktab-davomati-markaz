'use client'

import Link from 'next/link';
import React, { useState } from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillEnvelopeFill } from "react-icons/bs"
import Image from 'next/image'
import ITLOGO from '../public/Logo_IT_Park_Uzbekistan.svg.png'


import Bolon from "./MFY/Bolon"
import Oyqiron from "./MFY/Oyqiron"
import Namangan from "./MFY/Namangan"
import Bagrikenglik from "./MFY/Bagrikenglik"
import Baynalminal from "./MFY/Baynalminal"
import Komillik from "./MFY/Komillik"
import Yangiobod from "./MFY/Yangiobod";
import Bog from "./MFY/Bog";
import Orikzor from "./MFY/Orikzor";
import Chigatoy from "./MFY/Chigatoy";
import Yuksalish from './MFY/Yuksalish';
import Navoiy from "./MFY/Navoiy";
import Laskidon from "./MFY/Laskidon";
import Keskanyor from "./MFY/Keskanyor";
import Iftixor from "./MFY/Iftixor";
import Navbahor from "./MFY/Navbahor";
import Tengdosh from "./MFY/Tengdosh";
import Damariq from "./MFY/Damariq";
import Dostlik from "./MFY/Dostlik";
import Uzbekistan from "./MFY/uzbekistan"
import Xayrli from "./MFY/Xayrli";
import Diyor from "./MFY/Diyor";
import Dildosh from "./MFY/Dildosh";
import Beshkapa from "./MFY/Beshkapa";
import Oromgoh from "./MFY/Oromgoh";
import Sohibkor from "./MFY/Sohibkor";
import Gulshan from "./MFY/Gulshan";
import Soy from "./MFY/Soy";
import Qorabog from "./MFY/Qorabog";
import Obod from "./MFY/Obod-diyor";
import Chorsu from "./MFY/Chorsu";
import Guldirov from "./MFY/Guldirov";
import Saroy from "./MFY/Saroy";
import Qoramurt from "./MFY/Qoramurt";
import Dehqonobod from "./MFY/Dehqonobod"
import Alixon from "./MFY/Alixon"
import Bodomzor from "./MFY/Bodomzor"
import Arbagish from "./MFY/Arbagish"
import Topqayragoch from "./MFY/Topqayragoch";
import Bozorboshi from "./MFY/Bozorboshi"
import SozSoy from "./MFY/Soz"
import Uzun from "./MFY/Uzun";
import Oqterak from "./MFY/Oqterak";
import Ariq from "./MFY/Oqterak";
import Beshtol from "./MFY/Beshtol";
import Baliqkol from "./MFY/Baliq";
import Bogiston from "./MFY/Bogiston";
import Zangiobod from "./MFY/Zangiobod";
import Xazratishox from "./MFY/Xazratishox";
import Toriq from "./MFY/Toriq";
import Turkiston from "./MFY/Turkiston";
import Mustaqillik from "./MFY/Mustaqillik";
import Istiqlol from "./MFY/Istiqlol";
import Sarkor from "./MFY/Sarkor";
import Nurafshon from "./MFY/Nurafshon";
import Tinchlik from "./MFY/Tinchlik";
import Navruz from "./MFY/Navruz";

import { BiListPlus } from "react-icons/bi"







export default function AdminMainPage() {
    const [showElements1, setShowElements1] = useState(false);
    const [showElements2, setShowElements2] = useState(false);
    const [showElements3, setShowElements3] = useState(false);
    const [showElements4, setShowElements4] = useState(false);
    const [showElements5, setShowElements5] = useState(false);
    const [showElements6, setShowElements6] = useState(false);
    const [showElements7, setShowElements7] = useState(false);
    const [showElements8, setShowElements8] = useState(false);

    const handleToggle1 = () => {
        setShowElements1(!showElements1);
    };

    const handleToggle2 = () => {
        setShowElements2(!showElements2);
    };
    const handleToggle3 = () => {
        setShowElements3(!showElements3);
    };
    const handleToggle4 = () => {
        setShowElements4(!showElements4);
    };
    const handleToggle5 = () => {
        setShowElements5(!showElements5);
    };
    const handleToggle6 = () => {
        setShowElements6(!showElements6);
    };
    const handleToggle7 = () => {
        setShowElements7(!showElements7);
    };
    const handleToggle8 = () => {
        setShowElements8(!showElements8);
    };

    return (
        <div className='admin_main_page_some_padding mt-10 max-w-[1400px] ml-auto mr-auto'>
            <div data-aos="fade-down" className="flex justify-between mb-3 main_panel">
                <h1 className='page_text poppins text-3xl mb-4 font-bold'>Barcha MFY </h1>
                <Link href={"/"} className="green asosiy_button py-3 px-10 button text-white rounded-md">
                    Orqaga
                </Link>
            </div>
            <>
                <Link href={"/MFYlar/Oyqiron"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <div className='flex items-center gap-1'>
                            <p className='text-black font-bold'>
                                1.
                            </p>
                            <p className='text-[18px] poppins'>
                                Oyqiron MFY
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Oyqiron />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/MFYlar/Namangan"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <div className='flex items-center gap-1'>
                            <p className='text-black font-bold'>
                                2.
                            </p>
                            <p className='text-[18px] poppins'>
                                Namangan MFY
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Namangan />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/MFYlar/Bagrikenglik"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <div className='flex items-center gap-1'>
                            <p className='text-black font-bold'>
                                3.
                            </p>
                            <p className='text-[18px] poppins'>
                                Bagrikenglik MFY
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Bagrikenglik />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/MFYlar/Baynalminal"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <div className='flex items-center gap-1'>
                            <p className='text-black font-bold'>
                                4.
                            </p>
                            <p className='text-[18px] poppins'>
                                Baynalminal MFY
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Baynalminal />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/MFYlar/Komillik"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <div className='flex items-center gap-1'>
                            <p className='text-black font-bold'>
                                5.
                            </p>
                            <p className='text-[18px] poppins'>
                                Komillik MFY
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Komillik />
                            </div>
                        </div>
                    </div>
                </Link>

                <div className="flex justify-end">
                    <button className='px-10 py-2 green text-4xl rounded-md cursor-pointer text-white' onClick={handleToggle1}>
                        <BiListPlus />
                    </button>
                </div>

                {showElements1 && (
                    <>
                        <Link href={"/MFYlar/Yangiobod"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        6.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Yangiobod MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Yangiobod />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Bog"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        7.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Bog` MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Bog />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Orikzor"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        8.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        O`rikzor MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Orikzor />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Chigatoy"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        9.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Chig`atoy MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Chigatoy />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Yuksalish"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        10.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Yuksalish MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Yuksalish />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-end">
                            <button className='px-10 py-2 green text-4xl rounded-md cursor-pointer text-white' onClick={handleToggle2}>
                                <BiListPlus />
                            </button>
                        </div>
                    </>
                )}


                {showElements2 && (
                    <>
                        <Link href={"/MFYlar/Navoiy"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        11.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        A.Navoiy  MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Navoiy />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Laskidon"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        12.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Laskidon MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Laskidon />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Keskanyor"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        13.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Keskanyor MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Keskanyor />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Iftixor"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        14.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Iftixor MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Iftixor />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Navbahor"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        15.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Navbahor MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Navbahor />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-end">
                            <button className='px-10 py-2 green text-4xl rounded-md cursor-pointer text-white' onClick={handleToggle3}>
                                <BiListPlus />
                            </button>
                        </div>
                    </>
                )}


                {showElements3 && (
                    <>
                        <Link href={"/MFYlar/Tengdosh"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        16.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Tengdosh MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Tengdosh />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Damariq"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        17.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Damariq MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Damariq />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Dostlik"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        18.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Do`stlik MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Dostlik />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/uzbekistan"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        19.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        O`zbekiston MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Uzbekistan />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Xayrli"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        20.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Xayrli MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Xayrli />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-end">
                            <button className='px-10 py-2 green text-4xl rounded-md cursor-pointer text-white' onClick={handleToggle4}>
                                <BiListPlus />
                            </button>
                        </div>
                    </>
                )}


                {showElements4 && (
                    <>
                        <Link href={"/MFYlar/Diyor"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        21.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Z.Diyor MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Diyor />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Dildosh"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        22.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Dildosh MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Dildosh />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Beshkapa"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        23.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Beshkapa MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Beshkapa />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Oromgoh"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        24.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Oromgoh MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Oromgoh />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Sohibkor"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        25.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Sohibkor MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Sohibkor />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-end">
                            <button className='px-10 py-2 green text-4xl rounded-md cursor-pointer text-white' onClick={handleToggle5}>
                                <BiListPlus />
                            </button>
                        </div>
                    </>
                )}



                {showElements5 && (
                    <>
                        <Link href={"/MFYlar/Gulshan"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        26.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Gulshan MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Gulshan />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Soy"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        27.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Soy MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Soy />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Qorabog"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        28.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Qorabog` MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Qorabog />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Obod"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        29.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Obod-diyor MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Obod />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Chorsu"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        30.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Chorsu MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Chorsu />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-end">
                            <button className='px-10 py-2 green text-4xl rounded-md cursor-pointer text-white' onClick={handleToggle6}>
                                <BiListPlus />
                            </button>
                        </div>
                    </>
                )}


                {showElements6 && (
                    <>
                        <Link href={"/MFYlar/Guldirov"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        31.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Guldirov MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Guldirov />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Saroy"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        32.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Saroy MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Saroy />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Qoramurt"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        33.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Qoramurt MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Qoramurt />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Dehqonobod"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        34.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Dehqonobod MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Dehqonobod />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Alixon"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        35.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Alixon MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Alixon />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-end">
                            <button className='px-10 py-2 green text-4xl rounded-md cursor-pointer text-white' onClick={handleToggle7}>
                                <BiListPlus />
                            </button>
                        </div>
                    </>
                )}



                {showElements7 && (
                    <>
                        <Link href={"/MFYlar/Bodomzor"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        36.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Bodomzor MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Bodomzor />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Arbagish"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        37.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Arbag`ish MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Arbagish />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Topqayragoch"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        38.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        To`pqayrag`och MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Topqayragoch />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Bozorboshi"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        39.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Bozorboshi MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Bozorboshi />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Soz"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        40.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Soz-soy MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <SozSoy />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Uzun"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        41.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Uzun ko`cha MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Uzun />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Oqterak"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        42.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Oqterak MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Oqterak />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Ariq"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        43.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Ora-ariq MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Ariq />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Beshtol"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        44.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Beshtol MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Beshtol />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Baliqkol"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        45.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Baliq ko`l MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Baliqkol />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-end">
                            <button className='px-10 py-2 green text-4xl rounded-md cursor-pointer text-white' onClick={handleToggle8}>
                                <BiListPlus />
                            </button>
                        </div>
                    </>
                )}


                {showElements8 && (
                    <>

                        <Link href={"/MFYlar/Bogiston"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        46.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Bog`iston MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Bogiston />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Zangiobod"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        47.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Zangiobod MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Zangiobod />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Xazratishox"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        48.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Xazratishox MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Xazratishox />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Toriq"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        49.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        To`riq MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Toriq />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Turkiston"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        50.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Turkiston MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Turkiston />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Bolon"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        51.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Bo`lon MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Bolon />
                                    </div>
                                </div>
                            </div>

                            <Link href={"/MFYlar/Mustaqillik"}>
                                <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                    <div className='flex items-center gap-1'>
                                        <p className='text-black font-bold'>
                                            52.
                                        </p>
                                        <p className='text-[18px] poppins'>
                                            Mustaqillik MFY
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                            <AiOutlineEye className='text-3xl' />
                                        </div>
                                        <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                            <BsFillEnvelopeFill className='text-3xl' />
                                            <Mustaqillik />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/MFYlar/Istiqlol"}>
                                <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                    <div className='flex items-center gap-1'>
                                        <p className='text-black font-bold'>
                                            53.
                                        </p>
                                        <p className='text-[18px] poppins'>
                                            Istiqlol MFY
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                            <AiOutlineEye className='text-3xl' />
                                        </div>
                                        <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                            <BsFillEnvelopeFill className='text-3xl' />
                                            <Istiqlol />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/MFYlar/Sarkor"}>
                                <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                    <div className='flex items-center gap-1'>
                                        <p className='text-black font-bold'>
                                            54.
                                        </p>
                                        <p className='text-[18px] poppins'>
                                            Sarkor MFY
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                            <AiOutlineEye className='text-3xl' />
                                        </div>
                                        <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                            <BsFillEnvelopeFill className='text-3xl' />
                                            <Sarkor />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/MFYlar/Nurafshon"}>
                                <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                    <div className='flex items-center gap-1'>
                                        <p className='text-black font-bold'>
                                            55.
                                        </p>
                                        <p className='text-[18px] poppins'>
                                            Nurafshon MFY
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                            <AiOutlineEye className='text-3xl' />
                                        </div>
                                        <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                            <BsFillEnvelopeFill className='text-3xl' />
                                            <Nurafshon />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Link>
                        <Link href={"/MFYlar/Tinchlik"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        56.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Tinchlik MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Tinchlik />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href={"/MFYlar/Navruz"}>
                            <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-black font-bold'>
                                        57.
                                    </p>
                                    <p className='text-[18px] poppins'>
                                        Navruz MFY
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                        <AiOutlineEye className='text-3xl' />
                                    </div>
                                    <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                        <BsFillEnvelopeFill className='text-3xl' />
                                        <Navruz />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                )}


                <div className='flex gap-1 mt-10 justify-center items-center'>
                    <h1 className='text-center text-[16px] poppins'>Web Sayt Chortoq IT Park jamoasi tomonidan tuzildi</h1>
                    <Image src={ITLOGO} alt='Image' width={50} height={10} />
                </div>


            </>
        </div>
    );
}