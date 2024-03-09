import Details from "../components/CompanyDetails/details";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

function AboutUs() {
  return (
    <div className="container mx-auto py-8">
      {/* Section 1: Our Mission */}
      <div className="border-b-2 border-gray-300 mb-8 pb-8">
        <section className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-white mb-4">
            At Fitmatic, our mission is to revolutionize the way vehicle damage
            is assessed and repair costs are predicted. We believe in leveraging
            cutting-edge technology to streamline the process, providing accurate
            and efficient solutions for both individuals and automotive
            professionals.
          </p>
          {/* Add a button to learn more */}
          <Link
            to="/mission"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </Link>
        </section>
      </div>

      {/* Section 2: Who are we */}
      <div className="border-b-2 border-gray-300 mb-8 pb-8">
        <section className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Who are we</h2>
          <p className="text-lg text-white mb-4">
            We are a team of dedicated professionals who are passionate about
            pushing the boundaries of what technology can achieve in the
            automotive industry. Our journey began with the vision of simplifying
            the often complex and time-consuming task of estimating vehicle
            repair costs.
          </p>
          {/* Add a button to meet our team */}
          <Link
            to="/team"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Meet Our Team
          </Link>
        </section>
      </div>

      {/* Section 3: What sets us apart */}
      <div>
        <section>
          <h2 className="text-3xl font-bold mb-4">What sets us apart</h2>
          <p className="text-lg text-white mb-4">
            We pride ourselves on staying at the forefront of technological
            advancements. Our application utilizes state-of-the-art image
            recognition algorithms and machine learning models to accurately
            detect and assess vehicle damage, providing users with a detailed and
            precise cost prediction.
          </p>
          {/* Add a button to explore our technology */}
          <Link
            to="/technology"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Explore Our Technology
          </Link>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
