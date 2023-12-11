import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import Artwork from "../../public/Artwork.png"
import features from "../../public/features.png"
import features2 from "../../public/features2.png"
import management from "../../public/management.png"
import Business from "../../public/Bussiness.png"
import testi from "../../public/testi.png"
import blog from "../../public/blog.png"
import { LuDownloadCloud, LuCheckCircle, LuHome } from "react-icons/lu";


const Landing = () => {
  return (
    <div>
      <div className="navbar sticky top-0 bg-white z-20">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl flex justify-center">
            <Image src={logo} alt={"logo"} width={35} height={35} />
            <p>POS</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Feature</a>
            </li>
            <li>
              <a>Management</a>
            </li>
            <li>
              <a>Business</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/login"} className="btn btn-warning rounded-full mr-5 w-28 btn-sm">Login</Link>
        </div>
      </div>
      <div className="h-screen -my-20 px-20 pt-40">
        <div className="flex">
          <div className="w-full">
            <h1 className="text-4xl font-bold">Lorem ipsum dolor amet</h1>
            <p className="py-6 text-xl text-gray-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className="flex gap-3 -ml-4">
              <button className="btn text-red-500 rounded-full btn-ghost">more info</button>
              <button className="btn btn-warning btn-outline rounded-full">join now!</button>
            </div>
          </div>
          <div className="relative w-full z-10">
            <Image src={Artwork} alt="artwork" width={600} height={600} className="absolute -right-20" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="mr-8">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full bg-warning" />
            <h3 className="text-2xl font-bold text-warning">Business Solution</h3>
          </div>
          <p>Interdum et malesuada ac ante…</p>
        </div>
        <div className="border-l-2 pl-8 mr-8">
          <h3 className="text-2xl font-bold">Free project quote</h3>
          <p>Interdum et malesuada ac ante…</p>
        </div>
        <div className="border-l-2 pl-8">
          <h3 className="text-2xl font-bold">Nulla lobortis nunc</h3>
          <p>Interdum et malesuada ac ante…</p>
        </div>
      </div>
      <div className="w-full mt-32">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Features</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="w-full justify-center flex px-40">
          <div>
            <Image src={features} alt="features image" width={800} height={800} />
          </div>
          <div className="flex flex-col justify-center -mt-10">
            <div className="mb-5 flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-warning" />
              <h2 className="text-2xl font-bold">Vivamus sit amet interdum</h2>
            </div>
            <p className="text-xl">Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.</p>
          </div>
        </div>
        <div className="w-full justify-center flex px-48">
          <div className="flex flex-col justify-center w-full">
            <div className="mb-5 flex items-center gap-1">
              <h2 className="text-2xl font-bold">Vivamus sit amet interdum</h2>
              <div className="w-4 h-4 rounded-full bg-warning" />
            </div>
            <p className="text-xl">Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam vestibulum feugiat.</p>
          </div>
          <div className="-mr-20">
            <Image src={features2} alt="features image" width={1500} height={1000} />
          </div>
        </div>
        <div className="flex w-full justify-center mt-10">
          <div className="mr-10 flex flex-col justify-center items-center">
            <div>
              <h3 className="text-3xl text-warning font-bold">+200M</h3>
            </div>
            <div className="flex items-center gap-1">
              <LuDownloadCloud />
              <p className="font-bold">Download</p>
            </div>
          </div>
          <div className="pl-10 mr-10 border-l-2 flex flex-col justify-center items-center">
            <div>
              <h3 className="text-3xl text-warning font-bold">+480M</h3>
            </div>
            <div className="flex items-center gap-1">
              <LuCheckCircle />
              <p className="font-bold">Transactions</p>
            </div>
          </div>
          <div className="pl-10 border-l-2 flex flex-col justify-center items-center">
            <div>
              <h3 className="text-3xl text-warning font-bold">+18K</h3>
            </div>
            <div className="flex items-center gap-1">
              <LuHome />
              <p className="font-bold">Merchants</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-32">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Management</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="w-full flex justify-center">
          <p className="font-bold">Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. </p>
        </div>
        <div className="w-full flex justify-center mt-5">
          <Image src={management} alt="management image" width={900} height={900} />
        </div>
      </div>
      <div className="w-full mt-32">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Business Type</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="w-full flex justify-center">
          <p className="font-bold">Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. </p>
        </div>
        <div className="w-full flex justify-center mt-5">
          <Image src={Business} alt="business image" width={900} height={900} />
        </div>
      </div>
      <div className="w-full mt-32">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <p className="w-[35rem] text-center mb-5">Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in.</p>
          <p className="text-warning">
            <span className="font-bold">Jihan Doe</span> - Co Founder Sky Theme
          </p>
        </div>
        <div className="w-full flex justify-center mt-14">
          <Image src={testi} alt="Testimonials image" width={800} height={800} />
        </div>
      </div>
      <div className="w-full mt-32">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Blog and News</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="w-full flex justify-center">
          <p className="font-bold">Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. </p>
        </div>
        <div className="w-full flex justify-center mt-5">
          <Image src={blog} alt="blog and news image" width={900} height={900} /> 
        </div>
      </div>
      <div className="w-full my-32 flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold">What are you waiting for?</h1>
        <button className="btn btn-warning rounded-full btn-wide">join now!</button>
      </div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <div className="flex justify-center items-center gap-2">
            <Image src={logo} alt="logo image" width={50} height={50} />
            <h1 className="text-3xl font-bold">POS</h1>
          </div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title text-warning">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-warning">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title text-warning">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Landing;
