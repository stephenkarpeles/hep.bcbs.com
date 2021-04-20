import React, { useState } from "react"
import { withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import "./AdvisoryBoard.css"
import imgCloseIcon from "../../images/icons/icon-close.svg"
import imgRightArrowBlue from "../../images/icons/arrow-long-right.svg"
import imgArrowRightWhite from "../../images/icons/arrow-long-right-white.svg"

const tabItems = [
  {
    id: 1,
    name: "Tracey D. Brown",
    title: "CEO",
    company: "American Diabetes Association®",
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
          Brown joined the ADA in June 2018 after her tenure as senior vice
          president of operations and chief experience officer at Sam's Club, a
          division of Walmart, Inc., where she was responsible for creating
          meaningful member experiences, directing member strategy, marketing
          and branding, go-to-market execution, data and analytics, and
          membership operations.
        </p>
        <p>
          Brown brings more than 25 years of experience in driving global
          business growth, leveraging data to connect consumers with brands and
          creating omni-channel experiences to escalate customer loyalty. Prior
          to joining Sam’s Club, Brown was chief executive officer and managing
          director of RAPP Dallas, a data-driven integrated marketing agency.
          Before RAPP, she served as chief operating officer for direct
          marketing agency, Direct Impact, where she coordinated strategic,
          tactical and overall company operations. 
        </p>
        <p>
          Previously, Brown was director of worldwide consumer marketing for
          Advanced Micro Devices, where she drove global marketing and demand
          generation activity around the world, including China, India, Russia,
          France, Spain, Italy and Japan. Early in her career, she served in
          leadership positions at American Express, Proctor & Gamble and Exxon
          Mobil. 
        </p>
        <p>
          Brown earned a Master of Business Administration degree from Columbia
          Business School in New York and a Bachelor of Chemical Engineering
          degree from the University of Delaware. 
        </p>
        <p>
          Brown, who lives with type 2 diabetes, recently served as a volunteer
          and fundraiser for the ADA in her local community. She joined the
          ADA’s National Board of Directors in January 2018, before
          transitioning to her new role as CEO. She and her family reside in the
          Washington, D.C. metropolitan area.
        </p>
        <p>
          The American Diabetes Association (ADA) is a United States-based
          non-profit that seeks to educate the public about diabetes and to help
          those affected by it through funding research to manage, cure and
          prevent diabetes (including type 1 diabetes, type 2 diabetes,
          gestational diabetes and pre-diabetes). It is one of many non-profit
          organizations (American Cancer Society, Susan G. Komen Foundation and
          American Heart Association) that have emerged as an official
          institution to the American public and is highly influential to the
          U.S. healthcare system and government.
        </p>
      </>,
    ],
  },
  {
    id: 2,
    name: "Marshall Chin, MD, MPH",
    title: "Professor of Healthcare Ethics",
    company: "University of Chicago",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/marshall-chin.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Dr. Marshall H. Chin, a practicing general internist and health
          services researcher, has dedicated his career to reducing health
          disparities through interventions at individual, organizational,
          community and policy levels.</h3>
          <p>Dr. Chin has elucidated practical approaches to improving care of diverse individual patients and
          addressing systemic, structural drivers of disparities in the health
          care system. Through the Robert Wood Johnson Foundation Advancing
          Health Equity program, Dr. Chin collaborates with teams of state
          Medicaid agencies, Medicaid managed care organizations and frontline
          healthcare organizations to implement payment reforms to support and
          incentivize care transformations that advance health equity. He also
          partners with eight urban and rural communities to integrate medical
          and social care to reduce diabetes disparities through the Merck
          Foundation Bridging the Gap program.</p>
          <p>Dr. Chin evaluates the value of the federally qualified health center program, improves diabetes
          outcomes in Chicago’s South Side through healthcare and community
          interventions, and improves shared decision making among clinicians
          and LGBTQ persons of color. He also applies ethical principles to
          reforms to reduce health disparities, discussions about a culture of
          equity, and what it means for health professionals to care and
          advocate for their patients. Dr. Chin’s most recent project uses
          improv and standup comedy, storytelling and theater to improve
          training of students in caring for diverse patients and engaging in
          constructive discussions around systemic racism and social privilege.
          Dr. Chin and his team created the Roadmap to Reduce Disparities cited
          in Centers for Medicare and Medicaid Services reports. Dr. Chin is a
          member of the National Advisory Council of the National Institute on
          Minority Health and Health Disparities. He is a former President of
          the Society of General Internal Medicine.
        </p>
        <p>
          Dr. Chin is a graduate of Harvard College and the University of
          California at San Francisco School of Medicine, and he completed
          residency and fellowship training in general internal medicine at
          Brigham and Women’s Hospital, Harvard Medical School. He has received
          mentoring awards from the Society of General Internal Medicine and
          University of Chicago. He was elected to the National Academy of
          Medicine in 2017, and recently served on NAM’s Committee on the Future
          of Nursing 2020-2030.
        </p>
        <p>
          The University of Chicago, Department of Medicine has been the model
          of a successful, clinically active academic program in general
          medicine and subspecialties since its establishment in 1927.
          University of Chicago clinicians, researchers and educators are making
          major contributions on how we solve complex medical problems by
          integrating novel scientific findings and how we train our young
          physicians. Through advanced investigations, team work and data driven
          technology, the University of Chicago’s quest for new medical
          knowledge has led to innovative basic, translational and clinical
          research that has advanced therapies and redefined how we practice
          medicine. The team is dedicated to educating the next generation of
          physicians and scientists to carry on our legacy of discovery.
        </p>
      </>,
    ],
  },
  {
    id: 3,
    name: "Gilbert Darrington",
    title: "CEO",
    company: "Health Services, Incorporated",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/gilbert-darrington.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Gilbert F. Darrington is a native of Montgomery, Alabama. He is a
          graduate of Robert E. Lee High School and is married with two sons.
          Darrington holds a Master of Arts degree in Human Resources
          Development, Bachelor of Science degree in Occupational Education,
          B.S.O.E. in Business Administration/Healthcare Administration, A.A in
          General Studies and a LPN Certification. He is also a member of Omega
          Psi Phi Fraternity, Incorporated. 
        </h3>
        <p>
          Darrington retired from the United States Army after 20 of service in
          the medical field. After retiring, he served as the Director of Human
          Resources at Jackson Hospital in Montgomery, Alabama for 10 years.
          Darrington is currently the Chief Executive Officer of Health
          Services, Incorporated in Montgomery, Alabama. At HSI, he works with
          healthcare providers to offer a wide spectrum of health care services
          through 11 health centers, two wellness centers, four school-based
          health centers and two mobile health care units. 
        </p>
        <p>
          Health Services, Inc. is a progressive healthcare organization
          specializing in innovative quality patient care, integrating physical,
          mental and social well-being. The focus on a broader spectrum of
          health including primary medical care, mental & behavioral health, and
          social health services offers a well-rounded approach for happier,
          healthier patients. HSI has served the community for over 45 years and
          is the first Federally Qualified Health Center in Alabama to earn dual
          accreditation with the Joint Commission and has earned their Gold Seal
          of Approval by demonstrating compliance with The Joint Commission’s
          national standards for health care quality and safety as a Primary
          Care Medical Home as well as having Ambulatory Health Care
          Accreditation. 
        </p>
      </>,
    ],
  },
  {
    id: 4,
    name: "Adaeze Enekwechi, PhD, MPP",
    title: "Research Associate Professor",
    company: "George Washington University",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/adaeze-enekwechi.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Dr. Adaeze Enekwechi is a leading voice in health equity and
          evidence-based health policy making. She is committed to building a
          health care system that evolves beyond its current piecemeal,
          short-term approach to big challenges in order to meaningfully improve
          access to equitable, quality health care for all Americans. 
        </h3>
        <p>
          She most recently served as the President of IMPAQ, a policy research
          and implementation firm focused on health, workforce and advanced
          analytics. In that role, she provided strategic oversight of all
          research, technical assistance and technology services across all
          policy and program areas at IMPAQ. She also led the organization’s
          work on health equity, advancing ideas for how policymakers, payers
          and providers can engage for meaningful, measurable change in quality,
          costs and outcomes for vulnerable and underserved populations.
        </p>
        <p>
          Dr. Enekwechi served as the Associate Director for Health Programs at
          the White House Office of Management and Budget under President Obama,
          where she provided policy, management and regulatory oversight for
          over $1 trillion in spending on a range of programs across all federal
          health agencies. These agencies and oversight areas included the
          Centers for Medicare & Medicaid Services, the Centers for Disease
          Control and Prevention, the National Institutes of Health, the Food
          and Drug Administration, and policy and spending negotiations for
          Medicaid, the Zika virus, and other public health funding efforts. She
          also led a multi-agency implementation of the Affordable Care Act,
          where she coordinated and set up the infrastructure to implement the
          complex law.
        </p>
        <p>
          Dr. Enekwechi completed a BA at the University of Iowa, an MPP at the
          American University and a Ph.D. in Health Services and Policy from the
          University of Iowa. She completed postdoctoral training at the
          University of Chicago. Her research area covers the aging population
          and Medicare, health equity for vulnerable populations and
          evidence-based policymaking.
        </p>
        <p>
          Dr. Enekwechi is a Research Associate Professor of Health Policy and
          Management at the Milken Institute School of Public Health at the
          George Washington University. Her teaching focuses on federal health
          policy, the US health care infrastructure, health equity and
          evidence-based policymaking. She also serves on the boards of
          directors and advisors for a number of health care organizations.
        </p>
        <p>
          Milken Institute School of Public Health at George Washington
          University begins with the basics of our existence—clean water,
          healthy food, safe housing and breathable air—and continues through
          more complex and technical issues such as auto safety, vaccine
          development and distribution, infectious disease, maternal and child
          health, obesity and health care reform. Public health impacts all of
          us: how long we live, the quality of our lives, our sense of
          well-being and mental health, and the health of our children and
          future generations. That’s why right now is the best time in history
          to pursue innovative solutions as we seek to create a healthier planet
          for all, especially underserved populations. 
        </p>
      </>,
    ],
  },
  {
    id: 5,
    name: "Maria S. Gomez, RN, MPH",
    title: "President and CEO",
    company: "Mary's Center",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/maria-gomez.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Maria S. Gomez, President and CEO of Mary’s Center, founded the
          organization in 1988 as a clinic to provide prenatal and postpartum
          care to Latino women living in DC’s Ward 1.</h3>
          <p>Under Gomez’s leadership, Mary’s Center has grown from an initial budget of $250,000, serving
          200 participants a year, to an annual budget of $61 million serving
          nearly 50,000 participants from all over the globe at five medical
          locations, two senior wellness centers and a program office throughout
          DC and Maryland in 2018. Gomez is among the strongest leaders in the
          region. As a testament to her significant commitment to her community,
          she was selected by the White House as one of the 18 recipients of the
          2012 Presidential Citizens Medal, the nation’s second-highest civilian
          honor. She is also frequently recognized for her role in the DC
          metropolitan region’s healthcare system.</p>
          <p>Prior to establishing Mary’s Center, Gomez was a public health nurse at the D.C. Department of
          Health. She also worked at the Red Cross, where she directed community
          education programming and disaster services, and at the Visiting
          Nurses Association. Originally from Colombia, Gomez immigrated with
          her mother at age 13 and attended DC Public Schools. Gomez obtained
          her Bachelor of Science in Nursing from Georgetown University and a
          Master’s in Public Health from the University of California at
          Berkeley. She currently serves as a board member for the DC Primary
          Care Association, the Primary Care Coalition of Montgomery County, and
          the Washington Area Women’s Foundation. Gomez is the recipient of many
          awards.
        </p>
        <p>
          Mary's Center provides primary health care and other wrap-around
          services to any individual that enters their doors regardless of their
          ability to pay. They take most private insurance, Medicaid, Medicare
          and provide a sliding fee-scale to self-paid individuals to guarantee
          that their health care needs are met. Their community is composed of
          citizens born in the U.S., as well as immigrants from more than 100
          different countries living throughout the DC metropolitan area.
        </p>
      </>,
    ],
  },
  {
    id: 6,
    name: "Rachel R. Hardeman, PhD, MPH",
    title: "Tenured Associate Professor",
    company: "University of Minnesota",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/rachel-hardeman.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Dr. Rachel R. Hardeman, a reproductive health equity researcher,
          serves as the center's Founding Director. Dr. Hardeman's program of
          research applies the tools of population health science and health
          services research to elucidate a critical and complex determinant of
          health inequity—racism.</h3>
          <p>Dr. Hardeman leverages the frameworks of
          critical race theory and reproductive justice to inform her
          equity-centered work which aims to build the empirical evidence of
          racism’s impact on health, particularly for Black birthing people and
          their babies. In 2020, she was named the first Blue Cross Endowed
          Professor of Health and Racial Equity.
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
          structures and institutions that allow inequities to persist.
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
        <p>
          The Center for Antiracism Research for Health Equity at the University
          of Minnesota School of Public Health has a mission to identify,
          understand and dismantle structural racism through multidisciplinary
          antiracist and collaborative research, education, authentic community
          engagement and narrative change.
        </p>
      </>,
    ],
  },
  {
    id: 7,
    name: "Stacey D. Stewart",
    title: "President and CEO",
    company: "March of Dimes",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/stacey-stewart.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          Stacey D. Stewart joined March of Dimes as its fifth President and CEO
          on January 1, 2017. In this role, Stewart heads the organization
          leading the fight for the health of all moms and babies. She is
          responsible for all aspects of the organization’s strategy, vision and
          operations.
        </h3>
        <p>
          Stewart came to March of Dimes from United Way Worldwide, where she
          served as U.S. President, leading national efforts in education,
          revenue growth, health and brand recognition.
        </p>
        <p>
          A business veteran with an extensive background in finance, Stewart
          has also held a number of senior roles at Fannie Mae, Merrill Lynch
          and Pryor, McClendon, Counts & Co. Stewart has a Master of Business
          Administration in finance from the University of Michigan and a
          Bachelor of Arts in economics from Georgetown University. She also
          holds honorary degrees from Trinity University, Morgan State
          University, Texas Southern University, Lincoln University and Alabama
          A&M University. She currently serves on several boards nationally and
          in the Washington, D.C. metropolitan area.
        </p>
        <p>
          Stewart and husband Jarvis reside in the DC Metro area with daughters
          Madeline and Savannah.
        </p>
        <p>
          March of Dimes is a national, non-profit organization that was
          established in 1938. The mission of the foundation is to improve the
          health of babies by preventing birth defects, premature birth and
          infant mortality. March of Dimes funds programs of research,
          community services, education and advocacy.
        </p>
      </>,
    ],
  },
  {
    id: 8,
    name: "Richard Taylor",
    title: "CEO",
    company: "ImbuTec",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/richard-taylor.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          With over 30 years of business and professional experience, Richard
          Taylor is responsible for the overall strategic direction of the
          company. Taylor graduated cum laude with a B.S. in Business
          Administration from Georgetown University.</h3>
          <p>During his tenure in the
          nation’s capital, he worked on Capitol Hill as a government relations
          representative for a Fortune 500 energy company and was also actively
          involved in Congressional and Presidential campaigns across the
          country. He later attended Tulane University School of Law where he
          earned his Juris Doctor, cum laude, and then served as a law clerk to
          Judge James L. Dennis on the U.S. 5th Circuit Court of Appeals. 
        </p>
        <p>
          Prior to joining ImbuTec, Taylor served in various legal and senior
          corporate management roles in the energy industry, and he also
          organized and led a non-profit community development corporation
          affiliated with his church to help revitalize the historic Hill
          District community in which it sits. 
        </p>
        <p>
          Taylor is an active civic leader, and currently serves on the Board of
          Directors of the Pittsburgh Foundation, the Board of Fellows for the
          University of Pittsburgh’s Institute of Politics as Co-Chair of the
          Economic Development Committee, the Power of 32 Implementation
          Committee and the Board of Directors for Macedonia Development
          Corporation. He previously served on the Boards of the Port Authority
          of Allegheny County, the August Wilson African American Cultural
          Center, the Urban League of Greater Pittsburgh, the Local Government
          Academy and as Secretary of the Homer S. Brown Law Association.
        </p>
        <p>
          Pittsburgh-based Imbue Technology Solutions, Inc. (“ImbuTec”) was
          formed in 2003. At its inception, the company focused on evaluating
          and deploying innovative technologies to improve energy efficiency in
          commercial buildings. Today, ImbuTec operates as a full-service
          electrical and general contractor serving a wide array of corporate,
          governmental and institutional customers. The company has built a
          strong reputation for delivering outstanding results and has a stellar
          safety record. In addition, ImbuTec is certified as a Minority
          Business Enterprise (MBE) and Disadvantaged Business Enterprise (DBE)
          by the U.S. Small Business Administration, the Pennsylvania Unified
          Certification Program (13311), the National Minority Supplier
          Development Council (PT 01525) and the Pennsylvania Department of
          General Services. 
        </p>
      </>,
    ],
  },
  {
    id: 9,
    name: "Kevin Washington",
    title: "President and CEO",
    company: "YMCA of the USA",
    image: [
      <>
        <StaticImage src="../../images/advisory-board/kevin-washington.jpg" />
      </>,
    ],
    content: [
      <>
        <h3>
          A 43-year YMCA professional, Kevin Washington is the 14th person and
          first African American to lead the Y in the United States.
        </h3>
        <p>
          He came to YMCA of the USA in February 2015 from the YMCA of Greater
          Boston, where he was President and CEO from 2010 to 2014. He expanded
          membership and access by reducing rates, increased diversity and
          engagement among the Board of Directors to better reflect the
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
        <p>
          The YMCA (the Y) is a worldwide youth organization based in Geneva,
          Switzerland, with more than 64 million beneficiaries in 120 countries.
          It was founded on June 6, 1844 by Sir George Williams in London. YMCAs
          are strongly rooted in their communities and offer a variety of
          programs and services based on local priorities and issues affecting
          young people and their communities. The YMCA is a non-governmental
          federation, with each independent local YMCA affiliated with its
          national organization. Each national organization, in turn, is part of
          both an Area Alliance, based on geographic location, and the World
          Alliance of YMCAs.
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
  title = "",
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

        <div className="tab-item__overlay-arrow">
          <img src={imgArrowRightWhite} alt="Arrow"/>
        </div>
        <div className="tab-item__overlay-title">
          {title}
        </div>
      </div>
      <div className="tab-item__text">
        <div className="tab-item__name">{name}</div>
        <div className="tab-item__company">{company}</div>
        <img src={imgRightArrowBlue} alt="Arrow"/>
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
          Meet Our Advisory Panel
        </h2>
      </div>
      <div className="tab-items">
        {tabItems.map(({ id, image, name, company, title }) => (
          <TabItem
            key={name}
            image={image}
            id={id}
            name={name}
            company={company}
            title={title}
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
          <span>Close</span> <img src={imgCloseIcon} alt="Close"/>
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
              <div className="tab-content__personal-info-title">
                {tabItems.map(({ id, title }) => {
                  return active === id ? title : ""
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
