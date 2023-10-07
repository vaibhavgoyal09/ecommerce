import { PlantIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="block">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_0.75fr] lg:gap-10">
              <div className="mr-0 flex max-w-[360px] grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10">
                <div className="">
                  <a href="#" className="inline-block max-w-full text-black">
                    {/* Logo */}
                    <div className="flex gap-1 items-center justify-center">
                      <PlantIcon size={35} />
                      <span className="text-3xl text-black font-semibold">
                        Ecobazar
                      </span>
                    </div>
                  </a>
                  <div className="mt-4 max-[991px]:pb-8 max-[991px]:pt-0 max-[479px]:w-full max-[479px]:max-w-full lg:mt-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                  </div>
                </div>
                <div className="mt-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3 max-[991px]:mb-8">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex max-w-[24px] flex-col items-center justify-center text-black"
                  >
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945b4ae6cf7b_Vector-1.svg"
                      alt=""
                      className="inline-block max-w-full"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex max-w-[24px] flex-col items-center justify-center text-black"
                  >
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945560e6cf77_Vector.svg"
                      alt=""
                      className="inline-block max-w-full"
                    />
                  </a>
                  <a
                    href="https://www.slack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex max-w-[24px] flex-col items-center justify-center text-black"
                  >
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940535e6cf7a_Vector-3.svg"
                      alt=""
                      className="inline-block max-w-full"
                    />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex max-w-[24px] flex-col items-center justify-center text-black"
                  >
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9433a9e6cf88_Vector-2.svg"
                      alt=""
                      className="inline-block max-w-full"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start font-semibold">
                <div className="mb-4 ml-0 mr-0 lg:ml-0 lg:mr-0">
                  <div className="font-bold uppercase">Account</div>
                </div>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  My Account
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Order History
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Shopping Cart
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Wishlist
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Settings
                </a>
              </div>
              <div className="flex flex-col items-start font-semibold">
                <div className="mb-4 ml-0 mr-0 lg:ml-0 lg:mr-0">
                  <div className="font-bold uppercase">Support</div>
                </div>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Faqs
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Terms and Conditions
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="flex flex-col items-start font-semibold">
                <div className="mb-4 ml-0 mr-0 lg:ml-0 lg:mr-0">
                  <div className="font-bold uppercase">Proxy</div>
                </div>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  About
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Product Details
                </a>
                <a
                  href="#"
                  className="py-2 text-sm font-normal text-[#636262] transition hover:text-[#302dd7]"
                >
                  Track Orders
                </a>
              </div>
              <div className="flex flex-col items-start">
                <div className="mb-4 flex max-w-[272px] items-start justify-start">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bb99e6cf78_MapPin.svg"
                    alt=""
                    className="mr-3 inline-block max-w-full"
                  />
                  <p className="text-sm text-[#636262] sm:text-sm">
                    Lorem ipsum dolor
                  </p>
                </div>
                <div className="mb-4 flex max-w-[272px] items-start justify-start">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944119e6cf76_EnvelopeSimple-2.svg"
                    alt=""
                    className="mr-3 inline-block max-w-full"
                  />
                  <p className="text-sm text-[#636262] sm:text-sm">
                    support@ecobazar.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
