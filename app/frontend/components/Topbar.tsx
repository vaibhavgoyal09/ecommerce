import { NoBorderNoOutlineInput } from "@/components/ui/input";
import { Button, RightRoundedButton } from "./ui/button";
import { CartIcon, PlantIcon } from "./Icons";
import {
  ArrowDownToLine,
  Bell,
  CreditCard,
  Gift,
  Headphones,
  Heart,
  MoreVertical,
  Package,
  TrendingUp,
  User2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const TopBar = () => {
  return (
    <div className="flex px-4 py-2 w-full justify-center gap-8 items-center">
      {/* Logo */}
      <div className="flex gap-1 items-center justify-center">
        <PlantIcon size={28} />
        <span className="text-2xl text-black font-semibold">Ecobazar</span>
      </div>
      {/* Search Box */}
      <div className="flex flex-1 px-8 max-w-2xl">
        <div className="flex w-full border-[1px] border-gray-400 border-r-0 rounded-l-[8px] px-2 py-[2px]">
          <NoBorderNoOutlineInput
            type="text"
            placeholder="Search for Products, Brands and more"
          />
        </div>
        <RightRoundedButton variant={"default"} size={"default"}>
          Search
        </RightRoundedButton>
      </div>
      {/* SignIn */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-2 items-center px-4 py-2 hover:bg-primary hover:text-white font-medium focus:bg-primary focus:text-white rounded-md data-[state=open]:bg-primary data-[active]:bg-primary data-[state=open]:text-white data-[active]:text-white">
            <User2 size={24} />
            <span>Sign In</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60">
          <DropdownMenuItem>
            <div className="flex w-full justify-between items-center">
              <span>New Customer?</span>
              <span className="text-primary font-semibold">Sign Up</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User2 size={18} />
            <span>My Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Package size={18} />
            <span>Orders</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heart size={18} />
            <span>Wishlist</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Gift size={18} />
            <span>Rewards</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard size={18} />
            <span>Gift Cards</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Cart */}
      <div className="flex items-center p-2 cursor-pointer">
        <div className="relative h-[32px] w-[32px]">
          <div className="absolute bottom-[2px]">
            <CartIcon />
          </div>
          <div className="inline-block left-[16px] px-[4px] top-[0px] text-center rounded-[22px] leading-[16px] h-5 min-w-[8px] max-w-[24px] bg-[#2C742F] absolute border-white border-2 text-white text-[12px] font-medium">
            9+
          </div>
        </div>
        <span className="text-lg ml-2 font-medium">Cart</span>
      </div>
      {/* More Options */}
      <div className="mr-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="data-[state=open]:bg-accent data-[active]:bg-accent data-[state=open]:text-accent-foreground data-[active]:text-accent-foreground"
            >
              <MoreVertical size={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60 mr-6">
            <DropdownMenuItem>
              <Bell size={18} />
              <span>Notifications Preferences</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Headphones size={18} />
              <span>24x7 Customer Care</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <TrendingUp size={18} />
              <span>Advertise</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowDownToLine size={18} />
              <span>Download App</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
