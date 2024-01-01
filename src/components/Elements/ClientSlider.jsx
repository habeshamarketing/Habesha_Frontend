import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/logo01.svg"
import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";
import ClientLogo06 from "../../assets/img/clients/logo06.svg";
import { ImLinkedin } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSteam } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
// import { FaStopwatch } from "react-icons/fa";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          {/* <ImgStyle src={ClientLogo01} alt="client logo" /> */}
          <div>
            <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
              <ImLinkedin />
            </h1>
          </div>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
            <IoLogoFacebook />
          </h1>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
            <FaSquareXTwitter />
          </h1>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
            <AiFillInstagram />
          </h1>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <a href="https://t.me/EthEbay">
            <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
              <FaTelegram />
            </h1>
          </a>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
            <FaSquareWhatsapp />
          </h1>
        </LogoWrapper>
        {/* <LogoWrapper className="flexCenter">
          <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
            <FaSteam />
          </h1>
        </LogoWrapper> */}
        {/* <LogoWrapper className="flexCenter">
          <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
            <FaSteam />
          </h1>
        </LogoWrapper> */}
        {/* <LogoWrapper className="flexCenter">
          <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
            <FaSteam />
          </h1>
        </LogoWrapper>
        <LogoWrapper className="flexCenter"> */}
        {/* <h1 className=" flex h-screen mt-8 ml-11 text-[70px]">
            <FaSteam />
          </h1>
        </LogoWrapper> */}
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;