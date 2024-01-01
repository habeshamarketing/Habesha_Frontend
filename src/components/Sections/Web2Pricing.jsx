import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Web2Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">
              Premium Web-Development Packages
            </h1>
            <p className="font13">
              Discover Excellence in Web Development: Crafting Tailored,
              Innovative, and Functional Websites. Our specialized services
              encompass front-end and back-end development, CMS integration, and
              responsive design. <br /> We guarantee that your website not only
              stands out but also offers optimal user experiences, blending
              innovation seamlessly. Explore the art of tailored websites with
              our dedicated team of experts.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="19,999 ETB."
                title="E-commerce Package 1 "
                text="For online selling Companies."
                offers={[
                  { name: "Free Logo Design", cheked: true },
                  { name: "Unlimited Pages", cheked: true },
                  {
                    name: "Website Security, Firewall, and Malware Scanning",
                    cheked: true,
                  },
                  {
                    name: "4 Page Search Engine Optimization (SEO)",
                    cheked: true,
                  },
                  { name: "4 Month Free Maintenance/Support", cheked: true },
                  { name: "Social Medias Integration", cheked: true },
                  { name: "Booking Forms", cheked: true },
                  {
                    name: "Clean & Responsive (Mobile Friendly)",
                    cheked: true,
                  },
                ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=" 24,900 ETB."
                title="E-Learning Package "
                text="For medium size enterprises."
                offers={[
                  { name: "Free Logo Design", cheked: true },
                  { name: "Unlimited Pages", cheked: true },
                  {
                    name: "Website Security, Firewall, and Malware Scanning",
                    cheked: true,
                  },
                  {
                    name: "4 Page Search Engine Optimization (SEO)",
                    cheked: true,
                  },
                  { name: "4 Month Free Maintenance/Support", cheked: true },
                  { name: "Social Medias Integration", cheked: true },
                  { name: "Booking Forms", cheked: true },
                  {
                    name: "Clean & Responsive (Mobile Friendly)",
                    cheked: true,
                  },
                ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="32,999  ETB."
                title="E-commerce Package 2"
                text="For online selling Companies."
                offers={[
                  { name: "Free Logo Design", cheked: true },
                  { name: "Unlimited Pages", cheked: true },
                  { name: "Unlimited Store Vendors", cheked: true },
                  { name: "Woo-commerce built on WordPress", cheked: true },
                  { name: "Free .com domain and 1 year hosting", cheked: true },
                  
                  {
                    name: "10 Page Search Engine Optimization (SEO)",
                    cheked: true,
                  },
                  {
                    name: "Payment Gateway Integration (Bank Transfer & PayPal)",
                    cheked: true,
                  },
                  {
                    name: "Back End and Front-end vendors management",
                    cheked: true,
                  },
                ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;
