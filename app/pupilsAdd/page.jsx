import PupilsAddClient from "../../components/Pupils";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import ITPARK from "../../public/Logo_IT_Park_Uzbekistan.svg.png"



const PupilsAddPage = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='container bg-gray-100 w-full mx-auto flex justify-center items-center h-[85vh]'>
                    <PupilsAddClient />
                </div>
            </div>

        </>
    );
};

export default PupilsAddPage;