"use client";

import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AppBar = () => {
  const [open, setOpen] = useState(false);
  const [pages, setPages] = useState(false);
  const [fleet, setFleet] = useState(false);
  const [shop, setShop] = useState(false);

  return (
    <div className="w-[100vw]">
      <div className="w-screen flex justify-center gap-[7vw] items-center  text-gray-500 bg-[#F6F6F6] h-[6vh]">
        <div className="flex">
          <LocationOnIcon />
          <p>2507 Parker Boulevard, Oakland, CA 76107</p>
        </div>
        <div className="flex">
          <SmartphoneIcon />
          <p> (0481) 123 987 2411</p>
        </div>
        <div className="flex">
          <AccessTimeIcon />
          <p> Mon-Sat: 07:00 - 17:00</p>
        </div>
        <div className="flex gap-4">
          <FacebookIcon fontSize="10px" />
          <InstagramIcon fontSize="10px" />
          <TwitterIcon fontSize="10px" />
          <LinkedInIcon fontSize="10px" />
          <YouTubeIcon fontSize="10px" />
          <WhatsAppIcon fontSize="10px" />
        </div>
      </div>
      <div className="flex justify-center pt-8 gap-[12vw]">
        <div>
          <div>Logo</div>
        </div>
        <div className="flex gap-[3vw]">
          <div
            onMouseOver={() => {
              console.log("true");
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
            className="w-[6vw]"
          >
            <p className="cursor-pointer">
              Home <KeyboardArrowDownIcon />
            </p>
            <ul
              className={`bg-black/70 w-[15vw] rounded-sm pl-2 absolute justify-center backdrop-blur-md duration-1000 flex flex-col gap-3 py-2 text-white ${
                open ? "flex" : "hidden"
              }`}
            >
              <li className="cursor-pointer hover:text-white/60">Home I</li>
              <li className="cursor-pointer hover:text-white/60">Home II</li>
              <li className="cursor-pointer hover:text-white/60">Home III</li>
            </ul>
          </div>
          <div
            onMouseOver={() => {
              console.log("true");
              setPages(true);
            }}
            onMouseLeave={() => {
              setPages(false);
            }}
            className="w-[6vw]"
          >
            <p className="cursor-pointer">
              Pages <KeyboardArrowDownIcon />
            </p>
            <ul
              className={`bg-black/70 px-5 absolute rounded-sm backdrop-blur-md w-[15vw]  justify-center duration-1000 flex flex-col gap-3 py-2 text-white ${
                pages ? "flex" : "hidden"
              }`}
            >
              <li className="cursor-pointer hover:text-white/60">About us</li>
              <li className="cursor-pointer hover:text-white/60">
                Our Services
              </li>
              <li className="cursor-pointer hover:text-white/60">
                What Our Client Says
              </li>
            </ul>
          </div>
          <div
            onMouseOver={() => {
              console.log("true");
              setFleet(true);
            }}
            onMouseLeave={() => {
              setFleet(false);
            }}
            className="w-[6vw]"
          >
            <p className="cursor-pointer">
              Fleet <KeyboardArrowDownIcon />
            </p>
            <ul
              className={`bg-black/70 px-5 absolute rounded-sm backdrop-blur-md w-[15vw]  justify-center duration-1000 flex flex-col gap-3 py-2 text-white ${
                fleet ? "flex" : "hidden"
              }`}
            >
              <li className="cursor-pointer hover:text-white/60"> Our Fleet</li>
              <li className="cursor-pointer hover:text-white/60">
                Our Drivers
              </li>
              <li className="cursor-pointer hover:text-white/60">Booking</li>
            </ul>
          </div>
          <div>Blog</div>
          <div
            onMouseOver={() => {
              console.log("true");
              setShop(true);
            }}
            onMouseLeave={() => {
              setShop(false);
            }}
            className="w-[6vw]"
          >
            <p className="cursor-pointer">
              Shop <KeyboardArrowDownIcon />
            </p>
            <ul
              className={`bg-black/70 px-5 absolute rounded-sm backdrop-blur-md w-[15vw]  justify-center duration-1000 flex flex-col gap-3 py-2 text-white ${
                shop ? "flex" : "hidden"
              }`}
            >
              <li className="cursor-pointer hover:text-white/60"> Shop</li>
              <li className="cursor-pointer hover:text-white/60">Cart</li>
            </ul>
          </div>
          <div>Contact</div>
          <div>Get a Quote</div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
