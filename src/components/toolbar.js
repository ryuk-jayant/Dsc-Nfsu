import img from "../images/gdsc_in_img_1.png";
import back from "../images/foot-img.svg";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
function Toolbar() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        {/* {bg-[#4285F4]} */}
        <div className="mt-5  border bg-blue-100 ">
          <div className="md:flex justify-between pb-5 pt-5">
            <div className="">
              <a href="#">
                <img
                  className="w-96 px-10 hover:animate-bounce"
                  src={back}
                  alt="not found"
                />
                {/* <h1 className="font-bold text-2xl text-center md:text-lg px-10">{"< "}National Forensic Sciences University{" />"}</h1> */}
              </a>
            </div>
            <div className="flex md:justify-around invisible md:visible px-2 gap-10">
              <button>
                <h1 className="font-bold hover:text-[#4385F4]">
                  <Link to={"#Aboutus"}>About us</Link>
                </h1>
              </button>
              <button>
                <h1 className="font-bold hover:text-[#4385F4]">
                  <Link to={"#Team"}>Our team</Link>
                </h1>
              </button>
              <button>
                <h1 className="font-bold hover:text-[#4385F4]">
                  <Link to={"#Event"}>Events</Link>
                </h1>
              </button>
              {/* <button><h1>Theme</h1></button> */}

              <button>
                <h1 className="font-bold hover:text-[#4385F4]">Contact</h1>
              </button>
              <a
                className="border-2 bg-[#4285F4] hover:bg-[#0F9D58] p-2 rounded-full text-white font-bold shadow-xl hover:tracking-wide"
                href="https://gdsc.community.dev/national-forensic-sciences-university-gandhinagar/"
                target={"_blank"}
                rel="noreferrer"
              >
                <h1>Join us</h1>
              </a>
            </div>
          </div>
        </div>
        {/* {style={{backgroundImage:`url(${code})`}}} */}
        <div className="flex flex-wrap justify-around justify-center pt-16 gap-10 bg-no-repet ">
          <div className="w-3/4 md:w-1/2 xl:w-1/4 ">
            <h1 className="font-sans font-bold text-3xl animate-bounce ">
              "Weclome To Google Developers Student Club NFSU"
            </h1>
            <h2 className="tracking-wider text-left ">
              This is where i shit myshlf and ask others for their help beacuse
              i suck at giving qoutes and i am a chaman and fude i have dbms
              exam i need to study but i am doing this instead
              <strong> ....I</strong>
            </h2>
          </div>

          <div>
            <img
              className="visible h-[350px] w-150 pt-1 pb-2"
              src={img}
              alt="not found"
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Toolbar;
