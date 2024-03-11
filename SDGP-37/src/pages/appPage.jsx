import { useEffect, useRef, useState } from "react";

export default function AppPage() {
  const [members, setMembers] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/main")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMembers(data);
      });
  }, []);

  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  const HandleImageClick = () => {
    inputRef.current.click();
  };

  const HandleImageChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Image upload failed");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Image uploaded successfully:", data);
          // Handle any response from the backend as needed
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          // Handle any errors here
        });
    }
  };  

  return (
    <>
      <div>
        <h2>Fetched</h2>
        <p>{JSON.stringify(members)}</p>
      </div>
      <div className="font-abc">
        <div className=" sm:ml-20 sm:mt-20 lg:mt-24  w-80 min-w-min sm:w-10/12  bg-gray-800 rounded-xl min-h-32 mt-4 ml-10 xl:h-52 2xl:w-3/5 2xl:h-52 2xl:mt-8 md:min-h-40  md:mt-8 cursor-pointer">
          <h2 className="sm:text-xl lg:text-3xl font-bold text-left leading-9 text-white pl-14 pt-6 2xl:text-lg xl:text-xl ">
            Guidelines for Users
          </h2>
          <p className="lg:text-2xl lg:pt-8 text-left leading-9 text-white pl-14 pt-4 text-base 2xl:text-lg xl:text-lg">
            Some descriptive text explaining this guideline.
          </p>
          {/* ... more guidelines */}
        </div>
        <div className="sm:ml-20 sm:mt-8 2xl:flex mt-10 xl:flex">
          {/* flex w-4/5 mt-5 ml-40 */}
          <section
            className="bg-gray-800 w-80 h-56 ml-10 rounded-xl sm:w-11/12 sm:h-64 md:h-72 lg:w-5/6 lg:mt-10 xl:h-80  xl:w-6/12 2xl:w-2/5 2xl:h-72 sm:ml-1 md:min-h-28 md:w-4/6"
            onClick={HandleImageClick}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <>
                <label htmlFor="input-file" className="text-white"></label>
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  id="input-file"
                  className="hidden"
                  ref={inputRef}
                  onChange={HandleImageChange}
                ></input>
                <h2 className="font-bold text-2xl text-center leading-9 text-white pl-5 pt-12 xl:pt-24">
                  Drop your image here
                </h2>
                <h2 className="font-bold text-2xl text-center leading-9 text-white pl-5 pt-4">
                  -or-
                </h2>
                <h2 className="font-bold text-2xl text-center leading-9 text-white pl-5 pt-4">
                  Click to Upload
                </h2>
              </>
            )}
          </section>
          <section className="sm:w-5/5 mr-8 justify-between 2xl:pl-48 xl:flex">
            {/* <section className='sm:w-5/5 mr-8 justify-between '> */}
            <section className=" mt-8 ml-8  text-black">
              {/* <section className=" mb-2.5 text-black"> */}
              <h2 className="text-white sm:ml-10 sm:mt-8 md:mt-8 sm:text-xl ">
                Select brand
              </h2>
              {/* <h2 className="text-white ml-80">Select brand</h2> */}
              <select
                name="brand"
                className="sm:ml-10 sm:mt-4 w-32 p-2.5 border border-solid border-white rounded-3xl text-xl bg-gray-500 mt-2"
              >
                <option value="Toyota">Toyota</option>
                <option value="Toyota1">Toyota1</option>
                <option value="Toyota2">Toyota2</option>
              </select>
              <h2 className="text-white sm:ml-10 sm:mt-4 sm:text-xl mt-8">
                Select type
              </h2>
              <div className="flex ">
                <div>
                  <select
                    name="type"
                    className=" sm:ml-10 sm:mt-4 sm:text-xl w-32 p-2.5 border border-solid border-white rounded-3xl text-xl bg-gray-500 mt-2"
                  >
                    <option value="Car">Car</option>
                    <option value="Car1">Car1</option>
                    <option value="Car2">Car2</option>
                  </select>
                </div>
                <div>
                  <a href="/estmatedCost">
                    <button className="sm:ml-28 sm:mt-6 w-32 p-2.5 border-white rounded-3xl text-xl bg-gray-500 mt-4 ml-8">
                      Proceed
                    </button>
                  </a>
                </div>
              </div>
            </section>

            {/* <a href="/estmatedCost"><button className="w-32 p-2.5 border-white rounded-3xl text-xl bg-gray-500 ml-80 mt-4">Proceed</button></a> */}
          </section>
        </div>
      </div>
    </>
  );
}
