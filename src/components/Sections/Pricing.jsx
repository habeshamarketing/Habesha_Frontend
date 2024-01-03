import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Web-Development Packages</h1>
            <p className="font13">
              Explore our Web Development Services for tailored websites that
              seamlessly blend innovation and functionality.
              <br />
              Specializing in front-end and back-end development, CMS
              integration, and responsive design, we ensure your site stands out
              with optimal user experiences
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="6500 ETB."
                title="Basic Package "
                text="For Small Business."
                offers={[
                  { name: "Strategy & Consulting", cheked: true },
                  { name: "Free Logo Design", cheked: true },
                  { name: "Starting from Birr 6,500", cheked: true },
                  {
                    name: "Clean & Responsive (Mobile Friendly)",
                    cheked: true,
                  },
                  { name: "User Experience", cheked: true },
                  { name: "Social Medias Integration", cheked: true },
                ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="11,150 ETB."
                title="Standard Package "
                text="For medium size enterprises."
                offers={[
                  { name: "Free Logo Design", cheked: true },
                  { name: "Unlimited Pages", cheked: true },
                  {
                    name: "Website Security, Firewall, and Malware Scanning",
                    cheked: true,
                  },
                  {
                    name: "1 Page Search Engine Optimization (SEO)",
                    cheked: true,
                  },
                  { name: "1 Month Free Maintenance/Support", cheked: true },
                  // { name: "Social Medias Integration", cheked: true },
                  // { name: "Booking Forms", cheked: true },
                  // {
                  //   name: "Clean & Responsive (Mobile Friendly)",
                  //   cheked: true,
                  // },
                ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="16,150 ETB."
                title="Professional Package "
                text="For online selling Companies."
                offers={[
                  { name: "Free Logo Design", cheked: true },
                  { name: "Unlimited Pages", cheked: true },
                  // { name: "Booking Forms", cheked: true },
                  {
                    name: "3 Pages Search Engine Optimization (SEO)",
                    cheked: true,
                  },
                  { name: "2 Month Free Maintenance/Support", cheked: true },
                  { name: "Social Medias Integration", cheked: true },
                  // {
                  //   name: "Website Security, Firewall, and Malware Scanning",
                  //   cheked: true,
                  // },
                  // {
                  //   name: "Clean & Responsive (Mobile Friendly)",
                  //   cheked: true,
                  // },
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
    margin: 0 auto
  }
`;




