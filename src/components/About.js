import heads from "../images/gdsc-white.png";
export default function Aboutus() {
  return (
    <div className="mt-20 md:mt-1 bg-gray-200" id="Aboutus">
      <h1 className="tracking-wider bg-[#EA4335] py-12 text-3xl text-center font-bold hover:animate-bounce">
        {"<"} About Us {"/>"}
      </h1>
      <div className="flex flex-wrap justify-around gap-10 pt-10">
        <div>
          <img
            className="w-72 rounded-full border-2 shadow-xl hover:animate-spin animate-pulse"
            src={heads}
            alt="not found"
          />
        </div>
        <div className="">
          <p className="w-96 tracking-wide text-lg p-4 pb-10">
            Well come Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
