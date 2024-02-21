import BasicExample from "../components/dropDown";
export default function AppPage() {
  return (
    <>
      <div className=" w-4/5 min-w-min bg-gray-800 rounded-xl min-h-52 m-20 mb-0">
        <h2 className="text-2xl font-bold text-left leading-9 text-white pl-14 pt-10">
          Guidelines for Users
        </h2>
        <p className="text-left leading-9 text-white pl-14 pt-4 text-base">
          Some descriptive text explaining this guideline.
        </p>
        {/* ... more guidelines */}
      </div>
      <div className="flex grow place-content-center m-12 p-8">
        {/* <BasicExample/> */}
        <section className=" bg-gray-800 rounded-xl p-9">
          <h2 className=" font-bold text-2xl text-white/20 text-center">
            Drop your image here <br />
            -or- <br />
            Click to Upload
          </h2>
        </section>
        <section className="flex-col">
          <h2 className="text-white m-3 ml-8 mb-0">Select brand</h2>
          <select
            name="brand"
            className="rounded-xl p-3 w-1/2 text-xl bg-gray-500 m-3 ml-8"
          >
            <option value="Toyota">Toyota</option>
            <option value="Toyota1">Toyota1</option>
            <option value="Toyota2">Toyota2</option>
          </select>
          <h2 className="text-white m-3 ml-8 mb-0">Select type</h2>
          <select
            name="type"
            className="rounded-xl p-3 w-1/2 text-xl bg-gray-500 m-3 ml-8"
          >
            <option value="Car">Car</option>
            <option value="Car1">Car1</option>
            <option value="Car2">Car2</option>
          </select>
          <a href="estimatedCost">
            <button className="w-1/2 p-2.5 border-white rounded-3xl text-xl bg-gray-500 m-3 ml-8">
              Proceed
            </button>
          </a>
        </section>
      </div>
    </>
  );
}
