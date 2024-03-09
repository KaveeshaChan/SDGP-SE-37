function Details(props){
    return(
        <>
        <div className="font-abc text-white 2xl:ml-6">
        <h1 className="sm:mt-6 lg:text-lg font-bold sm:text-lg  md:text-lg my-4 ml-10 text-blue-200 xl:mt-20 2xl:mt-14  ">{props.topic}</h1>
          <p className=" sm:mr-12 sm:text-lg my-4 ml-10  xl:mr-64 xl:text-xl 2xl:text-lg 2xl:mr-72" >{props.description}</p>
        </div>
        </>

    );
}

export default Details;