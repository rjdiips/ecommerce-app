import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";
import Title from "../components/Title";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="to-current text-center text-2xl pt-10 border-t border-gray-200">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            7298 King Lodge
            <br />
            North Elton, Illinois 78154
          </p>

          <p className="text-gray-500">
            Tel: +1 800 123 1234
            <br />
            Email: admin@forever.com
          </p>

          <b className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </b>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button
            className="border border-gray-500 px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 "
            onClick={scrollToTop}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
