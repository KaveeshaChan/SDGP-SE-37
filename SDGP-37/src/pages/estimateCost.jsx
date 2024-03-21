import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/index.css';

function EstimateCost() {
    const [predictionResults, setPredictionResults] = useState([]);
    const [members, setMembers] = useState({});

    useEffect(() => {
        fetch("http://127.0.0.1:5000/predictedResult")
            .then((res) => res.json())
            .then((data) => {
                setMembers(data);
                const formattedResults = Object.entries(data).map(([title, result]) => ({
                    title,
                    result
                }));
                setPredictionResults(formattedResults);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="font-abc xl">
            <h3 className="text-white ml-8 mt-6 text-lg font-bold sm:ml-10 sm:mt-6 lg:text-lg lg:mt-8 xl:mt-6 2xl:text-lg 2xl:mt-4 xl:text-lg">Damaged Areas:</h3>
            <div className="sm: w-11/12 mt-2 sm:ml-14 xl:flex xl:w-11/12 lg:flex ">
                <div className="sm:w-96 sm:ml-0 lg:w-96  sm:min-h-80 lg:mt-8 sm:mt-4 justify-between bg-[#37383A] rounded-xl xl:w-11/12 2xl:w-2/6  w-80 min-h-52 ml-8 2xl:ml-0  2xl:mt-2 ">ll</div>
                <div className="sm:mt-6 lg:mt-10 lg:ml-10 xl:ml-52 2xl:mt-20 ml-4 mt-6">
                    <p className="text-white text-base lg:text-base  xl:text-lg 2xl:text-lg sm:text-xl">Vehicle brand: Toyota</p><br />
                    <p className="text-white text-base lg:text-base xl:text-lg 2xl:text-lg sm:text-xl">Vehicle Type:Car</p><br />
                </div>
            </div>

            <div className="sm:w-11/12 sm:ml-8 sm:mt-4 lg:mt-20 lg:min-h-44 xl:pl-10 xl:ml-14 xl:mt-10 bg-[#37383A] ml-4 w-11/12 mt-10 rounded-xl min-h-36 2xl:w-3/6 2xl:mt-4 2xl:min-h-48 xl:min-h-44 xl:w-9/12">
                <table className="table-auto border-collapse w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Damaged Part</th>
                            <th className="border px-4 py-2">Replace/Repair</th>
                            <th className="border px-4 py-2">Estimated Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Hood</td>
                            <td className="border px-4 py-2">{predictionResults[0]?.result['Repair_Decision']}</td>
                            <td className="border px-4 py-2">{predictionResults[0]?.result['Cost_Range']}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Front Buffer</td>
                            <td className="border px-4 py-2">{predictionResults[1]?.result['Repair_Decision']}</td>
                            <td className="border px-4 py-2">{predictionResults[1]?.result['Cost_Range']}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Headlight</td>
                            <td className="border px-4 py-2">{predictionResults[2]?.result['Repair_Decision']}</td>
                            <td className="border px-4 py-2">{predictionResults[2]?.result['Cost_Range']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EstimateCost;
