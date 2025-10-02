import Image from "next/image";
import phoenix from "../assets/phoenix.svg";
import c10 from "../assets/c10.svg"
import supercell from "../assets/supercell.svg"

const Sponsor = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-12 mt-10 text-white" style={{ fontStyle: 'italic' }}>
          Partners
        </h2>
  
    <div className="flex items-center justify-center px-10">
      <div className="flex justify-center items-center w-[30rem]">
      <div>
        <Image src={phoenix} alt="phoenix" />
      </div>
        <div>
        <Image src={c10} alt="c10" />
      </div>
   
      </div>
    </div>
          <div className="flex justify-center">
        <Image src={supercell} alt="supercell" className="w-[30rem]" />
      </div>
      </>
  );
}

export default Sponsor;
