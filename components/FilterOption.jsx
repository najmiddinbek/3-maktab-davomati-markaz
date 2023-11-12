'use client'

import React, { useState, useEffect } from "react"
const getTopics = async () => {
    try {
        const res = await fetch(`/api/pupils`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Mavzular yuklanmadi');
        }

        return res.json();
    } catch (error) {
        console.log('Mavzular yuklanishda xatolik: ', error);
        return { mavzula: [] };
    }
};

export default function FilterOption({ setShaxsiy, setSetShaxs, setManzili }) {
    const [mavzula, setMavzula] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedName, setOptionName] = useState("");
    const [selectedAddress, setSelectedAddress] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const topiclar = await getTopics();
                setMavzula(topiclar.mavzula);
            } catch (error) {
                console.log('Mavzular yuklanishda xatolik: ', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedOption && selectedName !== "") {
            const selectedPerson = mavzula.find(
                (mavzu) => mavzu.sinf === parseInt(selectedOption) && mavzu.shaxs === selectedName
            );

            if (selectedPerson) {
                setSelectedAddress(selectedPerson.adress);
            } else {
                setSelectedAddress("");
            }
        }
    }, [selectedOption, selectedName, mavzula]);

    const handleOptionChange = (e) => {
        const selectedGrade = e.target.value;
        setSelectedOption(selectedGrade);
        setShaxsiy(selectedGrade);
        setOptionName("");
        setSelectedAddress("");
    }

    const yangiIsm = (e) => {
        const selectedNamesi = e.target.value;
        setOptionName(selectedNamesi);
        setSetShaxs(selectedNamesi);
    };

    const handleAddressChange = (e) => {
        const newValue = e.target.value;

        const selectedPerson = mavzula.find(
            (mavzu) => mavzu.sinf === parseInt(selectedOption) && mavzu.shaxs === selectedName
        );

        if (selectedPerson) {
            setManzili(selectedPerson.adress);
        } else {
            setManzili(newValue);
        }
    };

    const sinflar = Array.from({ length: 11 }, (_, index) => index + 1);

    return (
        <div>
            <select className="px-2 py-3 mb-3 cursor-pointer w-full" value={selectedOption} onChange={handleOptionChange}>
                <option>Bu yerdan tanlang</option>
                {sinflar.map((sinf) => (
                    <option key={sinf} value={sinf}>
                        {sinf}-sinf
                    </option>
                ))}
            </select>
            <div className="gap-4">
                <label className="text-[18px] poppins font-bold" htmlFor="">
                    Familiya, Ismi hamda Otasining ismi
                </label>
                <select className="w-full p-3 mt-3 mb-4" value={selectedName} onChange={yangiIsm}>
                    <option value="">Tanlang</option>
                    {mavzula
                        .filter((mavzu) => mavzu.sinf === parseInt(selectedOption))
                        .map((mavzu, index) => (
                            <option className="" key={index} value={mavzu.shaxs}>
                                {mavzu.shaxs} <b>{mavzu.sinf}-sinf</b>
                            </option>
                        ))}
                </select>
                <label className="text-[18px] poppins font-bold">
                    Yashash manzili
                </label>
                <select className="w-full p-3 mt-3" onChange={handleAddressChange}>
                    <option placeholder="">Tanlang</option>
                    {mavzula.filter((mavzu) => mavzu.sinf === parseInt(selectedOption) && mavzu.shaxs === selectedName)
                        .map((mavzu, index) => (
                            <>
                                <option key={index} value={mavzu.adress}>
                                    {mavzu.adress}
                                </option>
                            </>
                        ))}
                </select>
            </div>
        </div >
    )
};