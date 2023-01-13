import team1 from "../images/my p-p.png";
import team2 from "../images/Nitish.jpg";
import team3 from "../images/avaneesh.jpg";
import team4 from "../images/divyansh.jpg";
import team5 from "../images/maanas.jpg";
import team6 from "../images/shashi_raj.webp";
import team7 from "../images/Aditi.jpeg";
export default function Team() {
  return (
    <div className="" id="Team">
      <h1 className="text-3xl text-center font-bold tracking-wider py-12 bg-[#4285F4] hover:animate-bounce">
        {"< "}Our Team{" />"}
      </h1>

      <section className="mt-10  flex flex-wrap justify-around items-center gap-x-20 gap-y-10 text-white">
        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team1}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#0F9D58] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Core Team member</h1>
                <p
                  className="my-2"
                  title="i am bored with this coding  i want to go home!!"
                >
                  Coding & Web Vertical
                </p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team2}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#EA4335] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Lead lodu</h1>
                <p className="my-2">Co-ordinator</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team3}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#0F9D58] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Core Team Member</h1>
                <p className="my-2">Coding Vertical</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team4}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#F4B400] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Core Team Member</h1>
                <p className="my-2">Cloud & Cyber Security veritcal</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team5}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#F4B400] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Core Team Member</h1>
                <p className="my-2">Managment Head</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team7}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#0F9D58] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Core Team Member</h1>
                <p className="my-2">Coding Vertical</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden w-full h-full">
              <img
                src={team6}
                alt="not found"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#F4B400] overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">Core Team Member</h1>
                <p className="my-2">Design Head</p>
                <p>
                  about member Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Facilis itaque assumenda saepe animi maxime
                  libero non quasi, odit natus veritatis enim culpa nam
                  inventore doloribus quidem temporibus amet velit accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-white">I am a Easter Egg</div>
    </div>
  );
}
