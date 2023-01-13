import background from "../images/gdsc-black.png";
import logo from "../images/gdsc-long-black.png";
import insta from "../images/instagram(1).png";
import linkdin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import loc from "../images/placeholder.png";
export default function Foot() {
  return (
    <div className="">
      <div
        className="pt-20 h-3/4"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-wrap justify-around justify-center iteams-center text-white gap-y-10">
          <div>
            <img className="w-96" src={logo} alt="not fiuns" />
          </div>

          <div>
            <p className="font-bold text-lg">
              <img src={loc} className="h-10" alt="not found " />
              <nbsp />
              National Forensic Sciences University,Gandhinagar
            </p>
          </div>

          <div className="grid grid-cols-4 gap-x-4">
            <h1 className="font-bold text-lg">follow us on</h1>
            <a href="https://www.instagram.com/@GDSC_NFSU" target={"_blank"}>
              <img
                className="h-10 w-10 border-1 shadow-lg rounded-full"
                src={insta}
                alt="not found"
              />
            </a>
            <a
              href="https://in.linkedin.com/company/google-developer-student-clubs-national-forensic-sciences-university-gandhinagar"
              target={"_blank"}
            >
              <img
                className="h-10 w-10 border-1 shadow-lg rounded-full"
                src={linkdin}
                alt="not found"
              />
            </a>
            <a href="https://twitter.com/GDSC_NFSU" target={"_blank"}>
              <img
                className="h-10 w-10 border-1 shadow-lg rounded-full"
                src={twitter}
                alt="not found"
              />
            </a>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
