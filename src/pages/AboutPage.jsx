import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <div>
      <Card>
        <div className="about">
          <h1>About This Project</h1>
          <p>This is a React App to leave feedback for a product or service.</p>
          <p>Version: 1.0.0</p>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;
