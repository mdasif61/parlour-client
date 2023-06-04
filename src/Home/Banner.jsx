import bannerImg from '../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
  return (
    <div className='md:flex items-center'>
      <div className="w-1/2">
        <h1 className="text-5xl leading-[65px] font-bold text-black">
          BEAUTY SALON
          <br />
          FOR EVERY WOMEN
        </h1>
        <p className="w-2/3 text-gray-500 my-6">
          Welcome to our beauty salon, exclusively tailored to meet the needs of
          every woman. We offer a wide range of services including haircuts,
          styling, coloring, facials, nail care, waxing, makeup application,
          massage therapy, and special event services.
        </p>
        <button className="btn bg-pink-600 text-white hover:text-pink-600">Get an Appointment</button>
      </div>
      <div className="w-1/2 p-10">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
