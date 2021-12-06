import React, { useEffect } from "react";
import { AboutContainer } from "./About.styles";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <AboutContainer>
      <div className="title" data-aos="fade-right">
        <h1>ABOUT ME</h1>
      </div>
      <div className="body">
        {" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia
          accusamus delectus labore blanditiis aspernatur, distinctio aperiam
          nulla doloribus culpa nesciunt iure fuga veniam a libero velit
          perferendis sequi odit similique eos? Modi, perferendis sint expedita
          nam doloremque quidem esse, laudantium ad veniam iste iure impedit
          minima fuga quo! Perferendis officia corporis ut error! Velit ipsam
          incidunt minima quae reiciendis iure dolores, ex cumque repudiandae
          dolore voluptate vitae rerum, adipisci quidem. Ut quasi tenetur
          veritatis aspernatur iure quaerat provident nobis reiciendis minus et
          dolores labore, neque omnis quis consectetur voluptatem voluptates?
          Ullam cumque incidunt eveniet neque eum. Placeat, omnis saepe.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia
          accusamus delectus labore blanditiis aspernatur, distinctio aperiam
          nulla doloribus culpa nesciunt iure fuga veniam a libero velit
          perferendis sequi odit similique eos? Modi, perferendis sint expedita
          nam doloremque quidem esse, laudantium ad veniam iste iure impedit
          minima fuga quo! Perferendis officia corporis ut error! Velit ipsam
          incidunt minima quae reiciendis iure dolores, ex cumque repudiandae
          dolore voluptate vitae rerum, adipisci quidem. Ut quasi tenetur
          veritatis aspernatur iure quaerat provident nobis reiciendis minus et
          dolores labore, neque omnis quis consectetur voluptatem voluptates?
          Ullam cumque incidunt eveniet neque eum. Placeat, omnis saepe.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia
          accusamus delectus labore blanditiis aspernatur, distinctio aperiam
          nulla doloribus culpa nesciunt iure fuga veniam a libero velit
          perferendis sequi odit similique eos? Modi, perferendis sint expedita
          nam doloremque quidem esse, laudantium ad veniam iste iure impedit
          minima fuga quo! Perferendis officia corporis ut error! Velit ipsam
          incidunt minima quae reiciendis iure dolores, ex cumque repudiandae
          dolore voluptate vitae rerum, adipisci quidem. Ut quasi tenetur
          veritatis aspernatur iure quaerat provident nobis reiciendis minus et
          dolores labore, neque omnis quis consectetur voluptatem voluptates?
          Ullam cumque incidunt eveniet neque eum. Placeat, omnis saepe.
        </p>
      </div>
    </AboutContainer>
  );
}

export default About;
