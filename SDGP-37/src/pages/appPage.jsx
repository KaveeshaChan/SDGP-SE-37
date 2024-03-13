import { useEffect, useRef, useState } from "react";

export default function AppPage() {
  const [buttonClicked, setButtonClicked] = useState(false);
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
  
  const handleButtonClick = () => {
    setButtonClicked(true);
  };


  return (
    <>
      <div>
        <p>{JSON.stringify(members)}</p>
      </div>
      <div className="font-abc">
        <div className="sm:ml-10 sm:mt-0 lg:mt-10  w-11/12 min-w-min sm:w-11/12  bg-[#37383A] rounded-xl min-h-32 mt-0 ml-4 xl:h-52 2xl:w-3/5 2xl:h-52  md:min-h-40  md:mt-0 cursor-pointer 2xl:mt-0">
          <h2 className="sm:text-xl lg:text-3xl font-bold text-left leading-9 text-white pl-14 pt-6 2xl:text-lg xl:text-xl ">
            Guidelines for Users
          </h2>
          <p className="lg:text-2xl lg:pt-8 text-left leading-9 text-white pl-14 pt-4 text-base 2xl:text-lg xl:text-lg">
            Some descriptive text explaining this guideline.
            </p>
          {/* ... more guidelines */}
        </div>
        <div className="sm:ml-10 sm:mt-8 2xl:flex mt-10 xl:flex xl:mt-0">
          <section
            className="bg-[#37383A] w-10/12 h-56 ml-8 rounded-xl sm:w-10/12 sm:h-64  md:h-80 md:w-10/12  lg:w-5/6 lg:mt-10 xl:h-80  xl:w-6/12 2xl:w-2/5 2xl:h-72 sm:ml-0 md:min-h-28 2xl:mt-8"
            onClick={HandleImageClick}>
            {image ? (
          <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-xl" />
        ) : (
          <>
            <label htmlFor="input-file" className="text-white"></label>
            <input
              type="file"
              accept="image/jpeg, image/png, image/jpg"
              id="input-file"
              className="hidden"
              ref={inputRef}
              onChange={HandleImageChange}>
              </input>
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
          <section className="sm:w-5/5 mr-8 justify-between 2xl:pl-48 xl:flex xl:ml-10 ">
            <div>
              <select name="brand" className="sm:ml-4 sm:mt-4 w-33 p-2.5 border border-solid border-white rounded-3xl text-xl bg-gray-500 mt-2">
                <option value="Toyota">Select brand</option>
                <option value="Toyota1">Toyota</option>
                <option value="Toyota2">Toyota1</option>
              </select>
                  <select name="type"
                    className=" sm:ml-4 sm:mt-4 sm:text-xl w-33 p-2.5 border border-solid border-white rounded-3xl text-xl bg-gray-500 mt-2" >
                    <option value="Car">Select type</option>
                    <option value="Car1">Car</option>
                    <option value="Car2">Car1</option>
                  </select>
                  <a href="/estmatedCost">
                  <button
                    className={`sm:ml-28 sm:mt-6 w-32 p-2.5 border-white rounded-3xl text-xl bg-gray-500 mt-4 ml-8 hover:bg-gray-700 ${
                      buttonClicked ? 'hover:bg-gray-700' : ''
                    }`}
                    onClick={handleButtonClick}>
                    Proceed
                  </button> </a>
                </div>
         </section>
        </div>
      </div>
    </>
  );
}