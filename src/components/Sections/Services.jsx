import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/bg2.jpg";
import AddImage2 from "../../assets/img/bg3.jpg";
import AddImage3 from "../../assets/img/bg4.jpg";
import AddImage4 from "../../assets/img/bg5.jpg";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Graphic Design"
                subtitle="
Explore a range of tailored graphic design solutions on our Services page. From captivating logos to comprehensive visual identity makeovers, our skilled team delivers impactful designs. Specializing in logo design, brand identity, print and digital collateral, and more, we ensure your visuals align with contemporary design trends. Collaborate with us to transform your ideas into compelling realities that leave a lasting impression."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web Development"
                subtitle="


Explore our Web Development Services for tailored websites that seamlessly blend innovation and functionality. Specializing in front-end and back-end development, CMS integration, and responsive design, we ensure your site stands out with optimal user experiences. Elevate your digital presence and achieve your goals with our expert team dedicated to crafting impactful online solutions."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Mobile Development"
                subtitle="
At Habesha marketing, we believe that successful mobile apps are built with the user in mind. Our talented team of designers creates intuitive and visually appealing interfaces that provide a seamless user experience. We focus on understanding your target audience and their needs to deliver a mobile app that engages and delights users. Whether it's crafting eye-catching visuals or implementing smooth navigation, our user-centric approach ensures that your app not only looks great but also functions flawlessly."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="digital"
                title="Digital Marketing"
                subtitle="
Elevate your brand with our Digital Marketing Services. We specialize in strategic online campaigns, SEO, social media, and content marketing. Our expert team maximizes your online visibility, engages your target audience, and drives results. Partner with us to navigate the dynamic digital landscape and achieve your marketing goals effectively."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                {/* <h4 className="font15 semiBold">A few words about company</h4> */}
                <h2 className="font40 extraBold">Habesha Marketing</h2>
                <p className="font12">
                  Habesha Digital Marketing is dedicated to helping companies
                  enhance their brand recognition and expand their reach in the
                  Ethiopian market With more than 3+ years of experience and a
                  deep understanding of the ever-evolving landscape of digital
                  marketing. With our expertise in advertising and marketing, we
                  provide suitable platforms and strategies that effectively
                  communicate brand messages to a targeted audience. Our team of
                  professionals is committed to delivering innovative solutions
                  and delivering tangible results for our clients. Whether it's
                  through digital campaigns, print media, or other advertising
                  channels, Habesha Marketing is for effective solutions
                  tailored to meet the unique needs of our client’s brand's
                  success in Ethiopia.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  {/* <div style={{ width: "190px" }}>
                    <Link to="/login">
                      <FullButton
                        title="Log In"
                        // action={() => alert("clicked")}
                      />
                    </Link>
                  </div> */}
                  {/* <div style={{ width: "190px", marginLeft: "15px" }}>
                    <Link to="/register">
                      <FullButton
                        title="Sign Up"
                        // action={() => alert("clicked")}
                        border
                      />
                    </Link>
                  </div> */}
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;