const About = () => {
    return (
      <>
        <div className="text-center">
          <h1 className="text-4xl font-black">
            This is About us Page
          </h1>
          <div className="text-xl font-semibold mt-4 mb-4">
            Contact Me
          </div>
          <a
            href="https://www.linkedin.com/in/aries-dmello7104"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <span className="mb-2">Aries Dmello</span>
            <img
              className="image-center"
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-square1-128.png"
              alt="LinkedIn"
              width="40"
              height="40"
            />
          </a>
        </div>
      </>
    );
  };
export default About;  