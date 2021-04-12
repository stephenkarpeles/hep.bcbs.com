import React, { useState } from "react"
import { withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import "./AdvisoryBoard.css"

const tabItems = [
  {
    id: 1,
    name: "Tracey Brown",
    company: "American Diabetes Association",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/tracey-brown.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Tracey D. Brown is Chief Executive Officer of the American Diabetes
          Association (ADA), the nation’s largest voluntary health organization
          and a global authority on diabetes.
        </h3>
        <p>
          Tracey joined the ADA in June 2018 after her tenure as senior vice
          president of operations and chief experience officer at Sam's Club, a
          division of Walmart, Inc., where she was responsible for creating
          meaningful member experiences, directing member strategy, marketing
          and branding, go-to-market execution, data and analytics, and
          membership operations.
        </p>
        <p>
          Tracey brings more than 25 years of experience in driving global
          business growth, leveraging data to connect consumers with brands and
          creating omni-channel experiences to escalate customer loyalty. Prior
          to joining Sam’s Club, Tracey was chief executive officer and managing
          director of RAPP Dallas, a data-driven integrated marketing agency.
          Before RAPP, she served as chief operating officer for direct
          marketing agency, Direct Impact, where she coordinated strategic,
          tactical and overall company operations.
        </p>
        <p>
          Previously, Tracey was director of worldwide consumer marketing for
          Advanced Micro Devices, where she drove global marketing and demand
          generation activity around the world, including China, India, Russia,
          France, Spain, Italy, and Japan. Early in her career, she served in
          leadership positions at American Express, Proctor & Gamble and Exxon
          Mobil.
        </p>
        <p>
          Tracey earned a master of business administration degree from Columbia
          Business School in New York and a bachelor of chemical engineering
          degree from the University of Delaware.
        </p>
        <p>
          Tracey, who lives with type 2 diabetes, recently served as a volunteer
          and fundraiser for the ADA in her local community. She joined the
          ADA’s National Board of Directors in January 2018, before
          transitioning to her new role as CEO. She and her family reside in the
          Washington, D.C. metropolitan area.
        </p>
      </>,
    ],
  },
  {
    id: 2,
    name: "Marshall Chin, MD, MPH",
    company: "University of Chicago",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/marshall-chin.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Marshall H. Chin, MD, MPH, FACP, Richard Parrillo Family Professor of
          Healthcare Ethics in the Department of Medicine at the University of
          Chicago.
        </h3>
        <p>
          He is Co-Director of the Robert Wood Johnson Foundation (RWJF)
          Advancing Health Equity: Leading Care, Payment, and Systems
          Transformation Program Office; Director of the Chicago Center for
          Diabetes Translation Research; Co-Director of the Merck Foundation
          Bridging the Gap: Reducing Disparities in Diabetes Care National
          Program Office; Associate Chief and Director of Research in the
          Section of General Internal Medicine; and Associate Director of the
          MacLean Center for Clinical Medical Ethics at the University of
          Chicago. Dr. Chin co-chairs the National Quality Forum (NQF)
          Disparities Standing Committee. Currently Dr. Chin is improving
          diabetes care and outcomes on the South Side of Chicago supported by
          grants from the National Institutes of Health (NIH) and the Merck
          Foundation. He is co-directing a project evaluating the value of the
          national federally-qualified health center system. Dr. Chin is also
          leading an Agency for Healthcare Research and Quality (AHRQ)-funded
          research project to improve shared decision making among clinicians
          and LGBTQ racial/ethnic minority patients.
        </p>
        <p>
          Dr. Chin serves on the Centers for Disease Control and Prevention
          (CDC) Community Preventive Services Task Force, the National Advisory
          Council to the National Institute on Minority Health and Health
          Disparities, and the National Academy of Medicine Committee on the
          Future of Nursing 2020-2030. He is a former President of the Society
          of General Internal Medicine (SGIM).
        </p>
        <p>
          Dr. Chin is a graduate of Harvard College and the University of
          California at San Francisco School of Medicine, and he completed
          residency and fellowship training in general internal medicine at
          Brigham and Women’s Hospital, Harvard Medical School. He was elected
          to the National Academy of Medicine in 2017.
        </p>
      </>,
    ],
  },
  {
    id: 3,
    name: "Gilbert Darrington",
    company: "Health Services, Inc.",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/gilbert-darrington.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Gilbert F. Darrington is a native of Montgomery, Alabama. He is a
          graduate of Robert E. Lee High School, and is married with two sons.
        </h3>
        <p>
          Mr. Darrington holds a Master of Arts degree in Human Resources
          Development, Bachelor of Science degree in Occupational Education,
          B.S.O.E. in Business Administration/ Healthcare Administration, A.A in
          General Studies and a LPN Certification. He is also a member of Omega
          Psi Phi Fraternity, Incorporated.
        </p>
        <p>
          Gilbert Darrington retired from the United States Army after twenty
          years of service in the medical field. After retiring, he served as
          the Director of Human Resources at Jackson Hospital in Montgomery,
          Alabama for ten year. Mr. Darrington is currently the Chief Executive
          Officer of Health Services, Incorporated in Montgomery, Alabama. At
          HSI, he works with healthcare providers to officer a wide spectrum of
          health care services through 11 health centers, 2 wellness centers, 4
          school-based health centers and 2 mobile health care units.
        </p>
      </>,
    ],
  },
  {
    id: 4,
    name: "Adaeze Enekwechi, Ph.D, MPP",
    company: "Milken Institute School of Public Health",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/adaeze-enekwechi.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Dr. Enekwechi most recently served as the President of IMPAQ, a policy
          research and implementation company focused on health, workforce, and
          advanced analytics.
        </h3>
        <p>
          In that role, she provided strategic oversight of all research,
          technical assistance, and technology services across all policy and
          program areas at IMPAQ. She also led the organization’s work on health
          equity, advancing ideas for how policymakers, payers, and providers
          can engage for meaningful, measurable change in quality, costs, and
          outcomes.
        </p>
        <p>
          She served as the Associate Director for Health Programs at the White
          House Office of Management and Budget under President Obama, where she
          provided policy, management, and regulatory oversight for over $1
          trillion in spending on a range of programs across all federal health
          agencies. These agencies and oversight areas included the Centers for
          Medicare & Medicaid Services, the Centers for Disease Control and
          Prevention, the National Institutes of Health, the Food and Drug
          Administration, and policy and spending negotiations for Medicaid, the
          Zika virus, and other public health funding requests.
        </p>
        <p>
          Dr. Enekwechi completed a BA at the University of Iowa, an MPP at the
          American University, and a PhD in Health Services and Policy from the
          University of Iowa. She completed postdoctoral training at the
          University of Chicago. Her research area covers the aging population
          and Medicare, health equity for vulnerable populations, and
          evidence-based policymaking.
        </p>
        <p>
          Dr. Enekwechi is a Research Associate Professor of Health Policy and
          Management at the Milken Institute School of Public Health at the
          George Washington University. Her teaching focuses on federal health
          policy, the US health care infrastructure, health equity, and
          evidence-based policymaking. She also serves on the boards of
          directors and advisors for a number of health care organizations.
        </p>
      </>,
    ],
  },
  {
    id: 5,
    name: "Maria S. Gomez, RN, MPH",
    company: "Mary's Center",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/maria-gomez.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Maria Gomez most recently served as the President of IMPAQ, a policy
          research and implementation company focused on health, workforce, and
          advanced analytics.
        </h3>
        <p>
          In that role, she provided strategic oversight of all research,
          technical assistance, and technology services across all policy and
          program areas at IMPAQ. She also led the organization’s work on health
          equity, advancing ideas for how policymakers, payers, and providers
          can engage for meaningful, measurable change in quality, costs, and
          outcomes.
        </p>
      </>,
    ],
  },
  {
    id: 6,
    name: "Rachel Hardeman, Ph.D",
    company: "University of Minnesota",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/rachel-hardeman.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Dr. Rachel R. Hardeman is a reproductive health equity researcher
          whose program of research applies the tools of population health
          science and health services research to elucidate a critical and
          complex determinant of health inequity—racism.
        </h3>
        <p>
          Dr. Hardeman leverages the frameworks of critical race theory and
          reproductive justice to inform her equity-centered work which aims to
          build the empirical evidence of racism’s impact on health,
          particularly for Black birthing people and their babies. In 2020, she
          was named the first Blue Cross Endowed Professor of Health and Racial
          Equity.
        </p>
        <p>
          Dr. Hardeman’s research includes a partnership with Roots Community
          Birth Center, in North Minneapolis, one of five Black-owned
          freestanding birth centers in the United States. Her work also
          examines the potential mental health impacts for Black birthing people
          when living in a community that has experienced the killing of an
          unarmed Black person by police.
        </p>
        <p>
          Dr. Hardeman is principal investigator of MORhELab, which explores and
          defines ways to measure structural racism for the purposes of
          empirical, quantitative investigation.
        </p>
        <p>
          Published in journals such as the New England Journal of Medicine and
          the American Journal of Public Health, Dr. Hardeman’s research has
          elicited important conversations on the topics of culturally-centered
          care, police brutality and structural racism as a fundamental cause of
          health inequities. Her overarching goal is to contribute to a body of
          knowledge that links structural racism to health in a tangible way,
          identifies opportunities for intervention, and dismantles the systems,
          structures, and institutions that allow inequities to persist.
        </p>
        <p>
          Dr. Hardeman is active locally and nationally with organizations that
          seek to achieve health equity. She was recently appointed to the
          Minnesota Maternal Mortality Review Committee and the CDC Maternal
          Mortality Review Information Application (MMRIA) Bias work group where
          she is working to develop a measure of structural racism to be
          included when reviewing maternal deaths. Dr. Hardeman also serves on
          the Board of Directors for Planned Parenthood of the North Central
          States.
        </p>
      </>,
    ],
  },
  {
    id: 7,
    name: "Stacey D. Stewart",
    company: "March of Dimes",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/stacey-stewart.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Stacey D. Stewart, our President and CEO, joined March of Dimes as its
          fifth President on January 1, 2017.
        </h3>
        <p>
          In this role, Stewart heads the organization leading the fight for the
          health of all moms and babies. She is responsible for all aspects of
          the organization's strategy, vision and operations. Stewart came to
          March of Dimes from United Way Worldwide, where she held several
          positions, most recently serving as U.S. President of United Way, the
          nation's largest non-profit organization. There she provided strategic
          direction for more than 1,000 local United Ways. Stewart was also
          responsible for United Way's national efforts in education, financial
          stability, and health as well as guiding efforts to enhance the brand
          and grow revenue. Stewart spearheaded the transformation of United Way
          from a pass-through fundraiser to a leading organization for local
          community impact. Prior to becoming U.S. President, Stewart served as
          Executive Vice President, Community Impact Leadership and Learning. In
          this role, Stewart developed global partnerships to advance community
          impact in more than 40 countries.
        </p>
        <p>
          A business veteran, Stewart has also held a number of senior roles,
          including Chief Diversity Officer and Senior Vice President for the
          Office of Community and Charitable Giving at Fannie Mae, as well as
          President and Chief Executive Officer for the Fannie Mae Foundation.
          Additionally, Stewart has an extensive background in finance and
          investment banking, having served as Vice President for Pryor,
          McClendon, Counts & Co., and as a senior associate for Merrill Lynch,
          specializing in financings for state and local governments.
        </p>
        <p>
          Stewart has a master's of business administration in finance from the
          University of Michigan and a bachelor of arts in economics from
          Georgetown University. She also holds honorary degrees from Trinity
          University, Morgan State University, Texas Southern University,
          Lincoln University and Alabama A&M University.
        </p>
      </>,
    ],
  },
  {
    id: 8,
    name: "Richard Taylor",
    company: "ImbuTec",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/richard-taylor.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          With over 25 years of business and professional experience, Richard
          Taylor is responsible for the overall strategic direction of the
          company.
        </h3>
        <p>
          Mr. Taylor also serves as the primary point of contact for customers,
          and is responsible for estimating, contracting and project management
          for all projects.
        </p>
        <p>
          Taylor graduated <em>cum laude</em> with a B.S. in Business
          Administration from Georgetown University. During his tenure in the
          nation’s capital, he worked on Capitol Hill as a government relations
          representative for a Fortune 500 energy company, and was also actively
          involved in Congressional and Presidential campaigns across the
          country. He later attended Tulane University School of Law where he
          earned his Juris Doctor, <em>cum laude</em>, and then served as a law
          clerk to Judge James L. Dennis on the U.S. 5th Circuit Court of
          Appeals.
        </p>
        <p>
          Prior to joining ImbuTec, Mr. Taylor served in various legal and
          senior corporate management roles in the energy industry, and he also
          organized and led a non-profit community development corporation
          affiliated with his church to help revitalize the community in which
          it sits.
        </p>
        <p>
          Mr. Taylor is an active civic leader, and currently serves on the
          Board of Directors of the Pittsburgh Foundation. He also serves on the
          Board of Fellows for the University of Pittsburgh’s Institute of
          Politics as Co-Chair of the Economic Development Committee, the Power
          of 32 Implementation Committee, and the Board of Directors for
          Macedonia Development Corporation. He previously served on the Boards
          of the Port Authority of Allegheny County, the August Wilson African
          American Cultural Center, the Urban League of Greater Pittsburgh, the
          Local Government Academy, and as Secretary of the Homer S. Brown Law
          Association.
        </p>
      </>,
    ],
  },
  {
    id: 9,
    name: "Kevin Washington",
    company: "YMCA",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/kevin-washington.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          A 40-year YMCA professional, Kevin Washington is the 14th person and
          first African American to lead the Y in the United States.
        </h3>
        <p>
          He came to YMCA of the USA (Y-USA) in February 2015 from the YMCA of
          Greater Boston, where as President and CEO from 2010 to 2014 he
          expanded membership and access by reducing rates, increased diversity
          and engagement among the Board of Directors to better reflect the
          community and implemented a childhood-education quality initiative
          that benefits thousands of children and families throughout eastern
          Massachusetts.
        </p>
        <p>
          Prior to Boston, Washington served as President and CEO of the YMCA of
          Greater Hartford from 2000 to 2010. Under his leadership the Hartford
          YMCA invested more than $60 million to develop or expand eight
          facilities and camps. He was Chief Operating Officer for the YMCA of
          Metropolitan Chicago from 1995 to 2000, and he previously held other
          executive roles with the Chicago YMCA and the Philadelphia Freedom
          Valley YMCA. He got his start in the Y as Youth Program Director at
          the Philadelphia YMCA's Christian Street branch in 1978.
        </p>
        <p>
          Washington earned a bachelor’s degree in history from Temple
          University.
        </p>
      </>,
    ],
  },
]

const TabItem = ({
  icon = "",
  id = "",
  name = "",
  company = "",
  image = "",
  onItemClicked = () => console.error("You passed no action to the component"),
  isActive = false,
}) => {
  const advisoryPanelIsOpen = "advisory-panel-is-open"

  function openAdvisoryPanel() {
    document.body.classList.add(advisoryPanelIsOpen)
  }

  return (
    <div
      id={id}
      className={isActive ? "tab-item" : "tab-item tab-item--inactive"}
      onClick={onItemClicked}
    >
      <i className={icon}></i>
      <div
        onClick={openAdvisoryPanel}
        onKeyDown={openAdvisoryPanel}
        className="tab-item__image"
      >
        {image}
      </div>
      <div className="tab-item__text">
        <div className="tab-item__name">{name}</div>
        <div className="tab-item__company">{company}</div>
      </div>
    </div>
  )
}

const Tabs = () => {
  const [active, setActive] = useState(1)

  const advisoryPanelIsOpen = "advisory-panel-is-open"

  function closeAdvisoryPanel() {
    document.body.classList.remove(advisoryPanelIsOpen)
  }

  return (
    <section className="tabs-wrapper" id="advisory">
      <div className="inner-content">
        <h2>
          Advisory
          <br />
          Board
        </h2>
      </div>
      <div className="tab-items">
        {tabItems.map(({ id, image, name, company }) => (
          <TabItem
            key={name}
            image={image}
            id={id}
            name={name}
            company={company}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          />
        ))}
      </div>
      <div className="tab-content">
        <a
          onClick={closeAdvisoryPanel}
          onKeyDown={closeAdvisoryPanel}
          className="tab-content__close-btn"
          href={withPrefix("#advisory")}
          title="Back to Advisory Board"
        >
          X
        </a>
        <div className="tab-content__grid">
          <Fade>
            <div className="tab-content__personal-info">
              <div className="tab-content__personal-info-image">
                {tabItems.map(({ id, image }) => {
                  return active === id ? image : ""
                })}
              </div>
              <div className="tab-content__personal-info-name">
                {tabItems.map(({ id, name }) => {
                  return active === id ? name : ""
                })}
              </div>
              <div className="tab-content__personal-info-company">
                {tabItems.map(({ id, company }) => {
                  return active === id ? company : ""
                })}
              </div>
            </div>
            <div className="tab-content__copy">
              {tabItems.map(({ id, content }) => {
                return active === id ? content : ""
              })}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Tabs
