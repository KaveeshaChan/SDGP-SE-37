import Details from "../components/CompanyDetails/details";

function AboutUs() {

    return (
      <>
        <div>
        <Details topic="Our Mission" description="At Fitmatic, our mission is to revolutionize the way vehicle damage
             is assessed and repair costs are predicted. We believe in leveraging 
            cutting-edge technology to streamline the process, providing accurate
            and efficient solutions for both individuals and automotive professionals"/>


         <Details topic="Who are we" description="we are a team of dedicated professionals who are passionate about pushing
              the boundaries of what technology can achieve in the automotive industry.
              Our journey began with the vision of simplifying the often complex and time-consuming
              task of estimating vehicle repair costs."/>    
              
          <Details topic="Wht sets us apart" description="We pride ourselves on staying at the forefront of technological advancements.
                Our application utilizes state-of-the-art image recognition algorithms and machine
                learning models to accurately detect and assess vehicle damage, providing users with
                 a detailed and precise cost prediction."/>     
        </div>
      </>
    );
  }

  export default AboutUs;
  