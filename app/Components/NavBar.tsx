import Image from "next/image";
import logo from "../../public/Icons/logo.png"
import Link from "next/link";
import Wrapper from "./Wrapper";
import ButtonDrop from "./ButtonDrop";
export default function NavBar() {
  return (
    <header className="sticky top-0  bg-white">
      <Wrapper>
      <div className="flex flex-wrap justify-between  py-4 px-2  items-center">
        <div>
          {/* <h1 className="text-xl font-bold">Panaverse Dao</h1> */}
        <Image src={logo} alt={"image"}/>
        </div>

        <ul className="flex gap-x-8 font-bold">
          <li>
            <Link href={"/"}>
              Home
            </Link>
          </li>
          <ButtonDrop/>
        </ul>
      </div>
      </Wrapper>
    </header>
  );
}
