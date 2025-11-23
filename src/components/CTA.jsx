import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta justify-center items-center">
      <h3 className="text-2xl font-semibold">
        Have a project in my mind? Let's build it together
        <Link to="/contact" className="btn ml-5">
          Contact me
        </Link>
      </h3>
    </section>
  );
};

export default CTA;
