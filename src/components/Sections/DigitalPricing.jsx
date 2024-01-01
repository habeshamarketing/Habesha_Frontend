import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function DigitalPricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Social media management</h1>
            <p className="font13">
              Elevate your brand with our Digital Marketing Services. We
              specialize in strategic online campaigns, SEO, social media, and
              content marketing. <br /> Our expert team maximizes your online
              visibility, engages your target audience, and drives results.
              Partner with us to navigate the dynamic digital landscape and
              achieve your marketing goals effectively.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="7,900 ETB /m"
                title=" Standard "
                text=" for social media management services."
                offers={[
                  {
                    name: "Account setup and optimization on LinkedIn, twitter, TikTok Social media platforms",
                    cheked: true,
                  },
                  {
                    name: "Daily content scheduling and posting (up to 3 posts per week)",
                    cheked: true,
                  },
                  {
                    name: "Basic analytics and performance tracking",
                    cheked: true,
                  },
                  {
                    name: "- Community management (responding to comments and messages)",
                    cheked: true,
                  },
                  { name: "Monthly progress reports", cheked: true },
                  {
                    name: "Social media ad management (budget not included)",
                    cheked: true,
                  },
                ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="8,900 ETB /m"
                title="Premium"
                text="For medium size enterprises."
                offers={[
                  {
                    name: " Account setup and optimization on LinkedIn, twitter, TikTok, Pinterest, Social media platforms",
                    cheked: true,
                  },
                  {
                    name: " Daily content scheduling and posting (up to 4 posts per week)",
                    cheked: true,
                  },
                  {
                    name: "Advanced analytics and performance tracking",
                    cheked: true,
                  },
                  {
                    name: " Social media ad management (includes a monthly ad budget)",
                    cheked: true,
                  },
                  {
                    name: "Monthly progress reports with deeper insights",
                    cheked: true,
                  },
                  {
                    name: "Customized social media strategy and consulting",
                    cheked: true,
                  },
                ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="11,900 ETB /m"
                title=" Enterprise"
                text="For online selling Companies."
                offers={[
                  {
                    name: "Tailored to the specific needs and goals of your business",
                    cheked: true,
                  },
                  {
                    name: "- Account setup and optimization on LinkedIn, twitter, TikTok, Pinterest, YouTube Social media platforms",
                    cheked: true,
                  },
                  {
                    name: "Daily content scheduling and posting (customized frequency)",
                    cheked: true,
                  },
                  {
                    name: "Social media ad management with a flexible budget",
                    cheked: true,
                  },

                  {
                    name: "Monthly progress reports with in-depth analysis",
                    cheked: true,
                  },
                  {
                    name: "Ongoing strategy development and consultation",
                    cheked: true,
                  },
                  {
                    name: "Dedicated account manager and support team",
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
