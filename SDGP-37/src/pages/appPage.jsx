import { useEffect, useRef, useState } from "react";
import Navbar from "../components/NavBar/navBar";

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
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }

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
          console.log("Image uploaded successfullyyyy:", data);
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
      <div >
      <div>

        <div>
        </div>
        <div className="font-abc">
          <Navbar />

          <div className=" bg-slate-900 rounded-lg mx-7 p-3">
            <h2 className="text-white ml-2 text-md md:text-lg lg:text-xl mb-4">
              Guidelines for Users
            </h2>
            <p className="text-white ml-7 text-sm md:text-md lg:text-lg xl:text-lg">
              <dl>
                <li>Upload an image of the damaged area.</li>
                <li> Make sure it is a clear image.</li>
                <li>Select your vehicle type and brand</li>
                <li>Hit Proceed</li>
              </dl>
            </p>
            {/* ... more guidelines */}
          </div>
          <div className="flex mt-8 content-center justify-center flex-col md:flex-row lg:flex-row xl:flex-row">
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
              accept="image/jpeg, image/png, image/jpg, image/jfif"
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
            <section className="flex">
              <div className="flex flex-col mt-8 text-xl ml-16">
                <select name="brand" className="p-4 m-2 w-64 rounded-lg">
                  <option value="Toyota">Select brand</option>
                  <option value="Toyota1">Toyota</option>
                </select>
                <select name="type" className="p-4 m-2 w-64 rounded-lg">
                  <option value="Car">Select type</option>
                  <option value="Car1">Car</option>
                </select>
                <a href="/estmatedCost">
                  <button
                    className={`transition duration-300 text-white rounded-lg p-4 m-2 w-64 bg-slate-900 hover:bg-slate-500 ${
                      buttonClicked ? "hover:bg-gray-700" : ""
                    }`}
                  >
                    Proceed
                  </button>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
