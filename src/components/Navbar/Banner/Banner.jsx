import banner from '../../../assets/images/Rectangle 1.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <img src={banner} alt="" />
  <div className="hero-content text-center">
    <div className="p-7">
      <h1 className="lg:text-5xl lg:font-bold text-white text-xs ">Discover an exceptional cooking class tailored for you!</h1>
      <p className="p-9 text-white hidden lg:block">The best cooking training coaching for every person who are very passionate about cooking.Find here your favorite dish which you love to cook and learn how to cook them. </p>
      <div className='flex flex-row justify-center items-center gap-5'>
      <button className="btn bg-green-400 ">Explore Now</button>
      <button className="btn btn-outline text-white">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;