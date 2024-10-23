import React from "react";
//import { LinkedInIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="m-4">
          <h2 className="text-xl font-semibold mb-4">Swiggy Clone</h2>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="m-4">
          <h2 className="text-xl font-semibold mb-4">We deliver to :</h2>
          <ul>
            <li>Mumbai</li>
            <li>banglore</li>
            <li>Delhi</li>
            <li>Hyderabad</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mt-4 mb-4">Contact Me</h2>
          <a
            href="https://www.linkedin.com/in/aries-dmello7104"
            target="_blank"
            rel="noopener noreferrer"
          >Aries Dmello<br></br>
            <img className="self-center"
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-square1-128.png"
              alt="LinkedIn"
              width="40"
              height="40"
            />
          </a>
          
        </div>

       

        
      </div>
    </footer>
  );
};

export default Footer;
