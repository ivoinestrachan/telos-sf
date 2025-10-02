import Image from "next/image";
import logo from "../assets/sf-white-logo.svg";
import FAQ from "@/Components/FAQ";
import Sponsor from "@/Components/Sponsor";
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
          <div className="text-black py-2 pl-5 pr-5 rounded-md font-bold cursor-pointer bg-white hover:opacity-50  transition-colors">
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
            <h2 className="text-2xl font-bold  mb-6">
              What is Telos House SF?
            </h2>

            <p className="text-lg mb-6">
              Telos House San Francisco is the newest chapter of <a href="https://www.teloshouse.com/" className="underline font-bold">Telos</a>, designed
              as a hacker house and creative hub at the heart of innovation.
              While Telos House builds ecosystems across disciplines, Telos SF
              focuses on exceptional tech talent and helping individuals reach
              their purpose. By combining collaborative workspaces and access to
              resources, we provide an environment where individuals can thrive
              and build tomorrow’s world.
            </p>

            <p className="text-lg mb-2">
              At Telos SF, we are a community of hackers and innovators living
              and building together an ecosystem where new technologies are
              born. As an offshoot of Telos, we carry forward the same mission
              of empowering talent and accelerating chang
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What to expect?</h2>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg ">3-Month Cohort Based Program</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg ">Late-Night Hack Sessions & Events</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg ">Investor Pitch Days</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg ">Weekend Pitch Jams</span>
              </li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Why We&#39;re Doing This</h2>

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
      <Sponsor />
      <div className="bg-gray-50">
        <FAQ />
      </div>
    </div>
  );
}
