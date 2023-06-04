import { useLoaderData } from "react-router-dom";
import sectionImg from "../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";
import useUsers from "../hooks/useUsers";

const SectionOne = () => {
  const { allUser } = useUsers();
  const {total}=useLoaderData()

  return (
    <div className="flex my-16">
      <div className="w-1/2">
        <img src={sectionImg} alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-between px-16">
        <div>
          <h1 className="text-4xl leading-[50px] mb-5 font-bold">
            Let us handle your
            <br />
            screen <span className="text-pink-600">Professionally</span>.
          </h1>
          <p className="text-gray-500 leading-6">
            Discover a sanctuary of elegance and refinement at Jarin's Parlour.
            Our expert team of professionals offers personalized beauty services
            that enhance your natural features. From exquisite hair styling to
            rejuvenating skincare, stunning nail artistry, and flawless makeup,
            we provide a transformative experience tailored exclusively for
            women. Step into Jarin's Parlour and unlock the beauty within you.
          </p>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-6xl text-pink-600 font-bold mb-4">
              {allUser.length}+
            </h1>
            <p className="text-gray-600 text-lg font-semibold">Happy Customer</p>
          </div>
          <div className="w-1/2">
            <h1 className="text-6xl text-pink-600 font-bold mb-4">
              {total}+
            </h1>
            <p className="text-gray-600 text-lg font-semibold">Total Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
