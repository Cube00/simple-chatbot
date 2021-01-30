import image from "./image/Chatbot-Blog.jpg";
export const About = () => {
  return (
    <>
      <div className="about">
        <span>
          This is a Simple chat - bot aplication.There are defined questions and
          bot can answerd this questions.There are not opportunity to write any
          question becouse bot is not smart as needed.
        </span>
        <img className="aImg" src={image} alt="" />
      </div>
    </>
  );
};
