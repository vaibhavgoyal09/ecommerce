import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Headphones, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] bg-background relative lg:relative">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
              <div className="relative">
                <Image
                  src="/Image.png"
                  alt=""
                  width={500}
                  height={300}
                  className="mx-auto inline-block max-w-[640px] object-cover rounded-2xl"
                />
                <div className="flex-col justify-center items-center absolute p-3 bg-[#FF8A00] top-0 right-0 rounded-[50%] text-white">
                  <div className="font-semibold text-2xl">30%</div>
                  <div className="text-sm text-center">OFF</div>
                </div>
              </div>
              <div className="max-[991px]:max-w-[720px]">
                <div className="text-primary text-sm px-1 pb-1">
                  WELCOME TO SHOPERY
                </div>
                <h1 className="mb-6 font-bold text-foreground text-4xl md:text-6xl">
                  {"Fresh & Healthy \n Organic Food"}
                </h1>
                <div className="max-w-[528px] flex items-center gap-2 text-lg text-[#618062] md:mb-4 lg:mb-6">
                  <p>Free shipping on all your order. we deliver, you enjoy</p>
                </div>
                <div className="flex items-center">
                  <Link href={"#"} className="inline-block cursor-pointer">
                    <Button
                      size={"lg"}
                      variant={"default"}
                      className="font-semibold"
                    >
                      Shop Now <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute flex bg-gray-50 p-3 w-full bottom-0">
        <div className="grid-cols-1 grid gap-6 border border-[#cdcdcd] bg-white [box-shadow:rgb(236,_236,_236)_0px_6px_32px] rounded-xl">
          <Truck />
          <div className="text-xl font-semibold">Free Shipping</div>
          <div className="text-sm text-[#636262]">
            Free shipping with discount
          </div>
        </div>
        <div className="grid-cols-1 grid gap-6 border border-[#cdcdcd] bg-white [box-shadow:rgb(236,_236,_236)_0px_6px_32px] rounded-xl">
          <Headphones />
          <div className="text-xl font-semibold">Great Support</div>
          <div className="text-sm text-[#636262]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit.
          </div>
        </div>
        <div className="grid-cols-1 grid gap-6 border border-[#cdcdcd] bg-white [box-shadow:rgb(236,_236,_236)_0px_6px_32px] rounded-xl">
          <ShieldCheck />
          <div className="text-xl font-semibold">100% Secure Payment</div>
          <div className="text-sm text-[#636262]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit.
          </div>
        </div>
        <div className="grid-cols-1 grid gap-6 border border-[#cdcdcd] bg-white [box-shadow:rgb(236,_236,_236)_0px_6px_32px] rounded-xl">
          <ShieldCheck />
          <div className="text-xl font-semibold">Money Back Guarantee</div>
          <div className="text-sm text-[#636262]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit.
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
