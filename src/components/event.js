import Holdon from "../images/staytune.png";
export default function Event() {
  return (
    <div className="pb-28 mt-64 bg-gray-200" id="Event">
      <h1 className="font-bold text-3xl bg-[#0F9D58] p-10 text-center hover:animate-bounce tracking-wide ">
        {"< "}Upcoming Events{" />"}
      </h1>
      <div className="flex flex-wrap justify-around justify-center mt-10">
        <div>
          <h1 className="font-bold text-4xl">Events are in Planning </h1>
          <p className="pt-2">
            In the mean time find the easter egg in our website...
          </p>
        </div>
        <img className="w-52" src={Holdon} alt="not found" />
      </div>
    </div>
  );
}
