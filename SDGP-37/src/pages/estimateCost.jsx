function EstimateCost(){
    return(
        <>
        <h3 className="text-white ml-32 mt-4 text-xl">Damaged Areas</h3>
        <div className="flex w-4/5 mt-3 ml-32 h-80">
            <div className="w-2/5 justify-between bg-gray-800 -mr-0.5 rounded-xl min-h-8"></div>
            <div className="w-0/5 justify-between ml-60">
                <p className="text-white text-xl">Vehicle brand:</p><br></br>
                <p className="text-white text-xl">Vehicle Type:</p><br></br>
                <p className="text-white text-xl">Vehicle Total Estmated Cost:</p>
                <div className="w-6/5 justify-between bg-gray-800 -mr-1.5 rounded-xl min-h-16 mt-12"></div>
            </div>
        </div>
        <div className="w-3/5 bg-gray-800 ml-32 rounded-xl min-h-36 mt-4">
           <div className="w-4/5 flex text-white justify-between pl-20 pt-4">
            <div>
                <p className="">Damaged Part</p>
            </div>
            <div>
                <p>Repair/Replace</p>
            </div>
            <div>
                <p>Estimated Cost(RS)</p>
            </div>
           </div>
        </div>
        </>
    );
}
export default EstimateCost;