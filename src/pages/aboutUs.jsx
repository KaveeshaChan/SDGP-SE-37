import Details from "../components/CompanyDetails/details";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import Navbar from '../components/NavBar/navBar';


function AboutUs() {
  return (
    <div>
      <Navbar/>
      {/* Section 1: Our Mission */}
      <div>
        <section className="mt-0">
          <Details topic = "Our Mission" description="At Fitmatic, our mission is to revolutionize the way vehicle damage
            is assessed and repair costs are predicted. We believe in leveraging
            cutting-edge technology to streamline the process, providing accurate
            and efficient solutions for both individuals and automotive
            professionals."/>

          {/* <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-white mb-4">
            At Fitmatic, our mission is to revolutionize the way vehicle damage
            is assessed and repair costs are predicted. We believe in leveraging
            cutting-edge technology to streamline the process, providing accurate
            and efficient solutions for both individuals and automotive
            professionals.
          </p> */}
          {/* Add a button to learn more */}
          <Link
            to="/mission"
            className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300 ml-8 md:ml-14"
          >
            Learn More
          </Link>
        </section>
      </div>

      {/* Section 2: Who are we */}
      <div >
        <section className="mt-10">
        <Details topic = "Who are we" description="We are a team of dedicated professionals who are passionate about
            pushing the boundaries of what technology can achieve in the
            automotive industry. Our journey began with the vision of simplifying
            the often complex and time-consuming task of estimating vehicle
            repair costs."/>
         
          {/* Add a button to meet our team */}
          <Link
            to="/team"
            className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300 ml-8 md:ml-14 "
          >
            Meet Our Team
          </Link>
        </section>
      </div>

      {/* Section 3: What sets us apart */}
      <div>
        <section className="mt-10" >
        <Details topic = "What sets us apart" description="We pride ourselves on staying at the forefront of technological
            advancements. Our application utilizes state-of-the-art image
            recognition algorithms and machine learning models to accurately
            detect and assess vehicle damage, providing users with a detailed and
            precise cost prediction."/>
         
         
          {/* Add a button to explore our technology */}
          <Link
            to="/technology"
            className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300 ml-8 md:ml-14 "
          >
            Explore Our Technology
          </Link>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
