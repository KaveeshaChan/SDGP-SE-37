function Details(props){
    return(
        <>
        <div className="font-abc text-white 2xl:ml-6 md:ml-6 md:mt-8 sm:mt-4">
        <h1 className="sm:mt-0 lg:text-lg xl:text-2xl font-bold sm:text-2xl  md:text-lg ml-8 text-black text-2xl xl:mt-14 2xl:mt-14 2xl:text-xl  ">{props.topic}</h1>
          <p className=" sm:mr-12 sm:text-lg my-4 ml-8 mr-4  xl:mr-64 xl:text-xl 2xl:text-lg 2xl:mr-72 " >{props.description}</p>
        </div>
        </>

    );
}

export default Details;