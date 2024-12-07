import About from "@/components/about";
import Views from "@/components/view";
import Freedelivery from "@/components/free";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function AboutPage() {
  return (
    <div>
      <About />
      <Views />

      {/* New Section for Images */}
      <div className="flex justify-center items-center flex-wrap gap-24 my-12 px-5">
        {/* Card 1 */}
        <div className="flex flex-col items-center w-[220px] text-center">
          <Image
            src="/img1.jpg"
            width={240}
            height={240}
            alt="Tom Cruise"
            className="object-cover"
          />
          <p className="mt-4 font-semibold text-xl">Tom Cruise</p>
          <p className="text-md text-gray-500">Founder & Chairman</p>
          <div className="flex gap-4 mt-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-500 text-2xl hover:text-gray-700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-500 text-2xl hover:text-gray-700" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-500 text-2xl hover:text-gray-700" />
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center w-[220px] text-center">
          <Image
            src="/img2.jpg"
            width={180}
            height={180}
            alt="Emma Watson"
            className="object-cover"
          />
          <p className="mt-4 font-semibold text-xl">Emma Watson</p>
          <p className="text-md text-gray-500">Managing Director</p>
          <div className="flex gap-4 mt-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-500 text-2xl hover:text-gray-700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-500 text-2xl hover:text-gray-700" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-500 text-2xl hover:text-gray-700" />
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center w-[220px] text-center">
          <Image
            src="/img3.jpg"
            width={200}
            height={200}
            alt="Will Smith"
            className="object-cover"
          />
          <p className="mt-4 font-semibold text-xl">Will Smith</p>
          <p className="text-md text-gray-500">Product Designer</p>
          <div className="flex gap-4 mt-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-500 text-2xl hover:text-gray-700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-500 text-2xl hover:text-gray-700" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-500 text-2xl hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>

      <Freedelivery />
    </div>
  );
}

export default AboutPage;
