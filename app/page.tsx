import Image from "next/image";
import logo from "../assets/sf-white-logo.svg";
import FAQ from "@/Components/FAQ";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex justify-center"></div>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-[95%] mt-10">
          <div className="px-5">
            <Image
              src={logo}
              alt="sf logo"
              width={200}
              height={200}
              draggable={false}
            />
          </div>
          <div className="text-black py-2 pl-5 pr-5 rounded-md cursor-pointer bg-white hover:opacity-50  transition-colors">
            Apply
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-6 mb-16 mt-20">
          <div className="relative bg-white rounded-lg overflow-hidden aspect-video mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-[50rem] px-6">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Lorem Ipsum Dolor Sit Amet
            </h2>

            <p className="text-lg mb-6">
              Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua ut enim ad minim veniam quis nostrud
              exercitation.
            </p>

            <p className="text-lg mb-6">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident sunt in culpa qui officia deserunt mollit anim — sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-lg mb-6">
              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
              Nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>

            <p className="text-lg mb-6">
              Cillum dolore eu fugiat nulla pariatur: excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <p className="text-lg ">
              Sed ut perspiciatis unde omnis iste natus error. Sit voluptatem
              accusantium doloremque laudantium totam rem aperiam. Eaque ipsa
              quae ab illo inventore veritatis — et quasi architecto beatae
              vitae dicta sunt, explicabo nemo enim ipsam.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Voluptatem Quia Voluptas Sit
            </h2>

            <p className="text-lg  mb-6">
              Aspernatur aut odit aut fugit sed quia:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg ">
                  Consequuntur magni dolores eos qui ratione
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg ">
                  Voluptatem sequi nesciunt 50–130% neque porro
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg ">
                  Quisquam est qui dolorem 7 ipsum
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg ">
                  Dolor sit amet consectetur 35k+ adipiscing elit
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Sed Quia Non Numquam
            </h2>

            <p className="text-lg">
              Eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam quis nostrum
              exercitationem ullam corporis suscipit laboriosam. Nisi ut aliquid
              ex ea commodi consequatur — quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <FAQ />
      </div>
    </div>
  );
}
