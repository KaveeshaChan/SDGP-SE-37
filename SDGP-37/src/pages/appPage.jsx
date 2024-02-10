
export default function AppPage() {
  return (
    <>

    <div className=" w-4.5 min-w-min bg-gray-800 rounded-xl min-h-52 mt-7 ml-5">
      <h2 className="text-2xl font-bold text-left leading-9 text-white pl-14 pt-10">Guidelines for Users</h2>
      <p className="text-left leading-9 text-white pl-14 pt-4 text-base">Some descriptive text explaining this guideline.</p>
      {/* ... more guidelines */}
    </div>
    <div className="flex w-4/5 mt-14 ml-10">
      <section className='w-2/5 justify-between bg-gray-500 -mr-0.5 rounded-xl min-h-5'>
        <h2 className=" font-bold text-2xl text-center leading-9 text-white pl-5 pt-4">Drop your image here</h2>
        <h2 className="font-bold text-2xl text-center leading-9 text-white pl-5 pt-4"> -or- </h2>
        <h2 className="font-bold text-2xl text-center leading-9 text-white pl-5 pt-4">Click to Upload</h2> 
      </section>
      <section className='w-2/5 justify-between '>
      <section className=" mb-2.5 text-black">
        <h2 className="text-white ml-20">Select brand</h2>
        <select name="brand" className="w-32 p-2.5 border border-solid border-white rounded-3xl text-xl bg-gray-500 ml-20 mt-2">
          <option value="Toyota">Toyota</option>
          <option value="Toyota1">Toyota1</option>
          <option value="Toyota2">Toyota2</option>
        </select>
        <h2 className="text-white ml-20 mt-4">Select type</h2>
        <select name="type" className="w-32 p-2.5 border border-solid border-white rounded-3xl text-xl bg-gray-500 ml-20 mt-2">
          <option value="Car">Car</option>
          <option value="Car1">Car1</option>
          <option value="Car2">Car2</option>
        </select>
      </section>
      <a href="estimatedCost"><button className="w-32 p-2.5 border-white rounded-3xl text-xl bg-gray-500 ml-20 mt-4">Proceed</button></a>
      </section>
    </div>

    </>
  );
}
