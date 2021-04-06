import React, { useState } from 'react'
import "./Tabs.css"

const tabItems = [
  {
    id: 1,
    title: 'Tracey Brown',
    company: 'American Diabetes Association',
    icon: 'tab-item__icon fas fa-child',
    content: [
      <>
        <div className="tab-content-grid">
          <div className="tab-content__personal-info"></div>
          <div className="tab-content__copy">
            <h3>Tracey D. Brown is Chief Executive Officer of the American Diabetes Association (ADA), the nation’s largest voluntary health organization and a global authority on diabetes.</h3>
            <p>Tracey joined the ADA in June 2018 after her tenure as senior vice president of operations and chief experience officer at Sam's Club, a division of Walmart, Inc., where she was responsible for creating meaningful member experiences, directing member strategy, marketing and branding, go-to-market execution, data and analytics, and membership operations.</p> 
            <p>Tracey brings more than 25 years of experience in driving global business growth, leveraging data to connect consumers with brands and creating omni-channel experiences to escalate customer loyalty. Prior to joining Sam’s Club, Tracey was chief executive officer and managing director of RAPP Dallas, a data-driven integrated marketing agency. Before RAPP, she served as chief operating officer for direct marketing agency, Direct Impact, where she coordinated strategic, tactical and overall company operations.</p> 
            <p>Previously, Tracey was director of worldwide consumer marketing for Advanced Micro Devices, where she drove global marketing and demand generation activity around the world, including China, India, Russia, France, Spain, Italy, and Japan. Early in her career, she served in leadership positions at American Express, Proctor & Gamble and Exxon Mobil.</p> 
            <p>Tracey earned a master of business administration degree from Columbia Business School in New York and a bachelor of chemical engineering degree from the University of Delaware.</p> 
            <p>Tracey, who lives with type 2 diabetes, recently served as a volunteer and fundraiser for the ADA in her local community. She joined the ADA’s National Board of Directors in January 2018, before transitioning to her new role as CEO. She and her family reside in the Washington, D.C. metropolitan area.</p> 
          </div>
        </div>
      </>
    ],
  },
  {
    id: 2,
    title: 'Marshall Chin, MD, MPH',
    company: 'University of Chicago',
    icon: 'tab-item__icon fas fa-users',
    content: [
      <>
        <div className="tab-content-grid">
          <div className="tab-content__personal-info"></div>
          <div className="tab-content__copy">
            <h3>Marshall H. Chin, MD, MPH, FACP, Richard Parrillo Family Professor of Healthcare Ethics in the Department of Medicine at the University of Chicago.</h3>
            <p>He is Co-Director of the Robert Wood Johnson Foundation (RWJF) Advancing Health Equity: Leading Care, Payment, and Systems Transformation Program Office; Director of the Chicago Center for Diabetes Translation Research; Co-Director of the Merck Foundation Bridging the Gap: Reducing Disparities in Diabetes Care National Program Office; Associate Chief and Director of Research in the Section of General Internal Medicine; and Associate Director of the MacLean Center for Clinical Medical Ethics at the University of Chicago.  Dr. Chin co-chairs the National Quality Forum (NQF) Disparities Standing Committee. Currently Dr. Chin is improving diabetes care and outcomes on the South Side of Chicago supported by grants from the National Institutes of Health (NIH) and the Merck Foundation.  He is co-directing a project evaluating the value of the national federally-qualified health center system.  Dr. Chin is also leading an Agency for Healthcare Research and Quality (AHRQ)-funded research project to improve shared decision making among clinicians and LGBTQ racial/ethnic minority patients.</p> 
            <p>Dr. Chin serves on the Centers for Disease Control and Prevention (CDC) Community Preventive Services Task Force, the National Advisory Council to the National Institute on Minority Health and Health Disparities, and the National Academy of Medicine Committee on the Future of Nursing 2020-2030.  He is a former President of the Society of General Internal Medicine (SGIM).</p> 
            <p>Dr. Chin is a graduate of Harvard College and the University of California at San Francisco School of Medicine, and he completed residency and fellowship training in general internal medicine at Brigham and Women’s Hospital, Harvard Medical School.  He was elected to the National Academy of Medicine in 2017.</p> 
          </div>
        </div>
      </>
    ],
  },
  {
    id: 3,
    title: 'Gilbert Darrington',
    company: 'Health Services, Inc.',
    icon: 'tab-item__icon fas fa-network-wired',
    content: [
      <>
        <div className="tab-content-grid">
          <div className="tab-content__personal-info"></div>
          <div className="tab-content__copy">
            <h3>Gilbert F. Darrington is a native of Montgomery, Alabama. He is a graduate of Robert E. Lee High School, and is married with two sons.</h3>
            <p>Mr. Darrington holds a Master of Arts degree in Human Resources Development, Bachelor of Science degree in Occupational Education, B.S.O.E. in Business Administration/ Healthcare Administration, A.A in General Studies and a LPN Certification. He is also a member of Omega Psi Phi Fraternity, Incorporated.</p> 
            <p>Gilbert Darrington retired from the United States Army after twenty years of service in the medical field. After retiring, he served as the Director of Human Resources at Jackson Hospital in Montgomery, Alabama for ten year. Mr. Darrington is currently the Chief Executive Officer of Health Services, Incorporated in Montgomery, Alabama. At HSI, he works with healthcare providers to officer a wide spectrum of health care services through 11 health centers, 2 wellness centers, 4 school-based health centers and 2 mobile health care units.</p> 
          </div>
        </div>
      </>
    ],
  },
  {
    id: 4,
    title: 'Adaeze Enekwechi, Ph.D, MPP',
    company: 'Milken Institute School of Public Health',
    icon: 'tab-item__icon fas fa-money-check-alt',
    content: [
      <>
      </>
    ],
  },
];

const TabItem = ({
  icon = '',
  id= '',
  title = '',
  company = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {
  return (
    <div id={id} className={isActive ? 'tab-item' : 'tab-item tab-item--inactive'} onClick={onItemClicked}>
      <i className={icon}></i>
      <div className="tab-item__title">{title}</div>
      <div className="tab-item__company">{company}</div>
    </div>
  )
};

const Tabs = () => {
 const [active, setActive] = useState(1);
  
  return (
    <section className="tabs-wrapper">
      <div className="tab-items">
        {tabItems.map(({ id, icon, title, company }) =><TabItem
           key={title}
           icon={icon}
           id={id}
           title={title}
           company={company}
           onItemClicked={() => setActive(id)}
           isActive={active === id}
         />
      )}
      </div>
      <div className="tab-content">
        {tabItems.map(({ id, content }) => {
          return active === id ? content : ''
        })}
      </div>
    </section>
  )
}

export default Tabs