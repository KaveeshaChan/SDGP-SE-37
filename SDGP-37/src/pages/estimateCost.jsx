import React, { useState, useEffect } from 'react';
import '/src/index.css';
import carImage from "../../../uploads/IMAGE.png"
import Navbar from '../components/NavBar/navBar';
import { ClipLoader } from 'react-spinners'; // Import ClipLoader from react-spinners

function EstimateCost() {
    const [predictionResults, setPredictionResults] = useState({});
    const [members, setMembers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/predictedResult")
            .then((res) => res.json())
            .then((data) => {
                setMembers(data);
                console.log(data)
                const formattedResults = Object.entries(data).map(([title, result]) => ({
                    title,
                    result
                }));
                setPredictionResults(formattedResults);
                setLoading(false);
                console.log(formattedResults)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="font-abc xl">
            <Navbar />
            <h3 className="text-white ml-8 mt-6 text-lg font-bold sm:ml-10 sm:mt-6 lg:text-lg lg:mt-8 xl:mt-6 2xl:text-lg 2xl:mt-4 xl:text-lg">Uploaded Image:</h3>
            <div className="sm: w-11/12 mt-2 sm:ml-14 xl:flex xl:w-11/12 lg:flex ">
                <div className=" bg-[#37383A] 2xl:ml-40 w-10/12 h-56 ml-8 rounded-xl sm:w-10/12 sm:h-64  md:h-80 md:w-10/12  lg:w-5/6 lg:mt-10 xl:h-80  xl:w-6/12 2xl:w-2/5 2xl:h-72 sm:ml-0 md:min-h-28 2xl:mt-8">
                    {loading ? ( // Show loading spinner if loading is true
                        <div className="flex items-center justify-center w-full h-full">
                            <ClipLoader color="#FFFFFF" loading={loading} size={70} /> {/* Use ClipLoader from react-spinners */}
                        </div>
                    ) : (
                        <img src={carImage} alt='image of car selected' className='w-full h-full object-cover rounded-xl ' />
                    )}
                </div>
                <div className="sm:mt-2 ml-4 blur-0 p-5 rounded-lg">
                    <p className="text-white text-base lg:text-base  xl:text-lg 2xl:text-3xl sm:text-xl">Vehicle brand: Toyota</p><br />
                    <p className="text-white text-base lg:text-base xl:text-lg 2xl:text-3xl sm:text-xl">Vehicle Type: Car</p><br />
                </div>
            </div>
            <div className="sm:w-11/12 sm:ml-8 sm:mt-4 lg:mt-20 lg:min-h-44 xl:pl-10 xl:ml-14 xl:mt-10 ml-4 w-11/12 mt-10 rounded-xl min-h-36 2xl:w-3/6 2xl:mt-8 2xl:min-h-48 xl:min-h-44 xl:w-9/12 2xl:ml-0">
                <table className="table-auto border-collapse w-full text-white 2xl:ml-52">
                    <thead>
                        <tr>
                            <th className="border px-10 py-2">Damaged Part</th>
                            <th className="border px-10 py-2">Replace/Repair</th>
                            <th className="border px-10 py-2">Estimated Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && Array.isArray(predictionResults) && predictionResults.map((item, index) => (
                            item.result.Predicted_Class !== "undamaged" && (
                                <tr key={index}>
                                    <td className="border px-4 py-2 text-white">{item.title}</td>
                                    <td className="border px-4 py-2 text-white">{item.result.Repair_Decision}</td>
                                    <td className="border px-4 py-2 text-white">{item.result.Cost_Range}</td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EstimateCost;
