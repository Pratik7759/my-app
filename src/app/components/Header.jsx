import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.webp";

const Header = () => {
  return (
    <header className="bg-black shadow-md py-4 px-6 flex justify-around items-center">
      {/* Logo */}
      <Link href="/">
        <Image src={Logo} alt="Logo" width={228} height={93} priority />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-blue-600 underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-600">
              About us
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-600">
              eSIM
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-600">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-600">
              Contact us
            </Link>
          </li>
          <button
            onClick={() => markAsCompleted(index)}
            className="bg-[#03fe9d] hover:bg-green-700 text-black font-medium py-2 px-4 rounded text-sm"
          >
            Signup / Login
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
