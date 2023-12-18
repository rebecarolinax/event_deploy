import React from "react";
import "./VisionSection.css";
import Title from "../Title/Title";

const VisionSection = () => {
  return (
    <section className="vision">
      <div className="vision__box">
        <Title
          titleText={"Visão"}
          color="white"
          additionalClass="vision__title"
        />
        <p className="vision__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          autem assumenda, suscipit distinctio debitis nihil voluptates sunt
          sit, nesciunt dolorum dolorem magnam vitae illum commodi, magni quod
          eveniet ab dolor.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatibus autem assumenda, suscipit distinctio debitis nihil
          voluptates sunt sit, nesciunt dolorum dolorem magnam vitae illum
          commodi, magni quod eveniet ab dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloribus maxime debitis alias molestiae, praesentium quaerat doloremque eligendi ipsum, ipsam veniam illo magni aperiam repudiandae, culpa iste totam deserunt ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio recusandae incidunt ipsum est error voluptatibus, eveniet, earum veniam alias quaerat vitae, aliquam laudantium assumenda dignissimos autem nostrum quam dolorem?
        </p>
      </div>
      
    </section>
  );
};

export default VisionSection;
