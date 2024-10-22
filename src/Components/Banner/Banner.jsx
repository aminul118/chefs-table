import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner-container mt-4 mx-4">
      <div className="py-20 flex flex-col justify-center text-center text-white space-y-6">
        <div className="w-8/12 mx-auto space-y-6">
          <h1 className=" text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p>
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
        </div>
        <div className="space-x-4">
          <button className="btn">Explore Now</button>
          <button className="btn">Our Feedback</button>
        </div>
      </div>
    </div>
  );
}
