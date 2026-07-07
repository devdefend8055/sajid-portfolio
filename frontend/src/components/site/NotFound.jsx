import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center text-white px-3"
    >
      <div className="text-center" style={{ maxWidth: "520px" }}>

        {/* GIF */}
        <img
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="404 Not Found"
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: "260px" }}
        />

        {/* Heading */}
        <h1 className="display-5 fw-bold mb-2">404</h1>

        {/* Subtext */}
        <p className="text-secondary mb-4">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action */}
        <Link to="/" className="btn btn-outline-light px-4 py-2">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
