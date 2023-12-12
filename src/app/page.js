import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import Artwork from "../../public/Artwork.png"
import features from "../../public/features.png"
import features2 from "../../public/features2.png"
import management from "../../public/management.png"
import Business from "../../public/Bussiness.png"
import testi from "../../public/testi.png"
import Qris from "../../public/QRIS.png"
import Cashlez from '../../public/Cashlez.png'
import Gopay from '../../public/Gopay.png'
import LinkAja from "../../public/Link.png"
import Dana from "../../public/Dana.png"
import Ovo from "../../public/Ovo.png"
import Swa from "../../public/swa.png"
import Tia from "../../public/tia.png"
import Kompas from "../../public/kompas.png"
import Tribun from "../../public/tribunmews.png"
import productDefault from "../../public/productDefault.jpg";
import { LuDownloadCloud, LuCheckCircle, LuHome } from "react-icons/lu";
import http from "../helpers/http"

const getPopularProduct = async () => {
  const response = await http().get('/detail-transaction/popular-product?limit=6')
  return response.data
}

const Landing = async () => {
  const data = await getPopularProduct();

  // Converter Rupiah
  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedPrice;
  };

  return (
    <div>
      <div className="navbar sticky top-0 bg-white z-20">
        <div className="navbar-start">
          <Link href={"/"} className="btn btn-ghost text-xl flex justify-center">
            <Image src={logo} alt={"logo"} width={35} height={35} />
            <p>POS</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="#features">Feature</Link>
            </li>
            <li>
              <Link href="#management">Management</Link>
            </li>
            <li>
              <Link href="#business">Business</Link>
            </li>
            <li>
              <Link href="#products">Products</Link>
            </li>
            <li>
              <Link href="#partners">Media & Partners</Link>
            </li>
            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/login"} className="btn btn-warning rounded-full mr-5 w-28 btn-sm">
            Login
          </Link>
        </div>
      </div>
      <div className="h-screen -my-20 px-20 pt-40">
        <div className="flex">
          <div className="w-full">
            <h1 className="text-5xl font-bold">All-in-one Platform to Manage Your Business</h1>
            <p className="py-6 text-2xl text-gray-500">Record sales, inventory, and customers. Send receipt and accept any payments. All in one platform, ready on-the-go.</p>
            <div className="flex gap-3 -ml-4">
              <Link href={"/login"} className="btn text-red-500 rounded-full btn-ghost">
                get started
              </Link>
              <Link href={"https://wa.me/62895711520107"} className="btn btn-warning btn-outline rounded-full">
                chat with us
              </Link>
            </div>
          </div>
          <div className="relative w-full z-10">
            <Image src={Artwork} alt="artwork" width={600} height={600} className="absolute -right-20" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="mr-8 w-80">
          <h3 className="text-xl font-bold text-warning mb-2">1 Stop Solution to Manage Everything</h3>
          <p>We have all the features you need to manage your businesses. Everything is integrated into a single platform just for you.</p>
        </div>
        <div className="border-l-2 pl-8 mr-8 w-80">
          <h3 className="text-xl font-bold text-warning mb-9">We're Here to Help, Always</h3>
          <p>Our team is ready 24/7 to give you any assistance that you need. We're only 1 call away.</p>
        </div>
        <div className="border-l-2 pl-8 w-80">
          <h3 className="text-xl font-bold text-warning mb-9">Hassle-Free Fit for Everyone</h3>
          <p>POS. App is designed to fit your businesses without the stress and hassle needed to get things started.</p>
        </div>
      </div>
      <div id="features" className="h-20 mt-12" />
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Features</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="w-full justify-center flex px-40">
          <div>
            <Image src={features} alt="features image" width={800} height={800} />
          </div>
          <div className="flex flex-col justify-center -mt-10 w-full">
            <div className="mb-5 flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-warning" />
              <h2 className="text-2xl font-bold">Free online store in 15 seconds.</h2>
            </div>
            <p className="text-xl">
              Create your own online store and catalog in mere seconds. Start taking sales from Instagram, Facebook, and Google Shop. With integrated payment and delivery services, all orders manageable through POS. App.
            </p>
          </div>
        </div>
        <div className="w-full justify-center flex px-48">
          <div className="flex flex-col justify-center w-full">
            <div className="mb-5 flex items-center gap-1">
              <h2 className="text-2xl font-bold">Point-of-Sale system tailored to fit your business.</h2>
              <div className="w-6 h-4 rounded-full bg-warning" />
            </div>
            <p className="text-xl">Monitor your sales, in-store and online, through POS, from your sales trend to your expenses, with mobile PoS accessible anywhere and anytime.</p>
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
      <div id="management" className="h-20 mt-12" />
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Management</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="font-bold text-xl">Manage Your Business Anywhere and Anytime.</p>
          <p>The 1-stop-solution for your business. Sell in-store and online, everything at your fingertips.</p>
        </div>
        <div className="w-full flex justify-center mt-5">
          <Image src={management} alt="management image" width={900} height={900} />
        </div>
      </div>
      <div id="business" className="h-20 mt-12" />
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Business Type</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="w-full flex justify-center">
          <p className="font-bold">Unleashing Infinite Possibilities, One Business at a Time.</p>
        </div>
        <div className="w-full flex justify-center mt-5">
          <Image src={Business} alt="business image" width={900} height={900} />
        </div>
      </div>
      <div id="products" className="h-10" />
      <div className="w-full py-20 bg-gray-200">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Most Product Ordered</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="flex justify-between gap-5 flex-wrap mb-5 px-20">
          {data?.results?.map((product) => (
            <div key={product.id} className="flex gap-3 bg-white w-[22rem] h-fit p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <Image src={product.picture === null ? productDefault : product.picture} alt={product.name} width={96} height={96} className="rounded-xl" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40">{product.name}</h3>
                <p className="text-gray-400 text-sm w-36">{product.description}</p>
                <div className="flex w-full justify-center items-center">
                  <p className="grow">{formatPrice(product.price)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="partners" className="h-20" />
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Media & Partners</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="flex gap-5 justify-center">
          <Image src={Swa} alt="Swa" width={130} height={130} className="grayscale" />
          <Image src={Tia} alt="Techinasia" width={250} height={150} className="grayscale" />
          <Image src={Kompas} alt="Kompas" width={250} height={150} className="grayscale" />
          <Image src={Tribun} alt="Tribunnews" width={250} height={150} className="grayscale" />
        </div>
        <div className="flex gap-5 justify-center">
          <Image src={Qris} alt="QRIS by Shopee" width={150} height={150} className="grayscale" />
          <Image src={Cashlez} alt="Cashlez" width={150} height={150} className="grayscale" />
          <Image src={Gopay} alt="Gopay" width={150} height={150} className="grayscale" />
          <Image src={LinkAja} alt="Link Aja" width={150} height={150} className="grayscale" />
          <Image src={Dana} alt="Dana" width={150} height={150} className="grayscale" />
          <Image src={Ovo} alt="Ovo" width={150} height={150} className="grayscale" />
        </div>
      </div>
      <div id="testimonials" className="h-20 mt-12" />
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center gap-2 mb-10">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <div className="w-20 h-3 rounded-full bg-red-500 opacity-50" />
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <p className="w-[35rem] text-center mb-5">
            I have set up POS in five retail locations for Mattress Barn. After spending a year struggling with a well known but overly complicated POS software we luckily found Hike. Hike is easy to set up and their customer service is
            second to none!
          </p>
          <p className="text-warning">
            <span className="font-bold">Jihan Doe</span> - Co Founder Sky Theme
          </p>
        </div>
        <div className="w-full flex justify-center mt-14">
          <Image src={testi} alt="Testimonials image" width={800} height={800} />
        </div>
      </div>
      <div className="w-full my-32 flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold">What are you waiting for?</h1>
        <Link href={"https://wa.me/62895711520107"} className="btn btn-warning rounded-full btn-wide">
          Chat with us
        </Link>
      </div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <div className="flex justify-center items-center gap-2">
            <Image src={logo} alt="logo image" width={50} height={50} />
            <h1 className="text-3xl font-bold">POS</h1>
          </div>
          <p>
            DEAN Industries Ltd.
            <br />
            Providing reliable tech since 2022
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
