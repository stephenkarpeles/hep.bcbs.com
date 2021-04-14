// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import {
  InstantSearch,
  SearchBox,
  InfiniteHits,
  Configure,
  RefinementList,
  MenuSelect,
  ClearRefinements,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Images
import nursePatientImg from "../images/nurse-patient-1.jpg"

import Sharing from "../components/Sharing/sharing"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const planResult = ({ hit }) => {
  const { title, category, plan, url, excerpt, img_url } = hit

  return (
    <div className="plan-result-card">
      <Link to={url}>
        <div className="plan-result-card-plan">
          <div className="plan-result-card-image">
            <img src={img_url} />
          </div>
          <div className="plan-result-card-company">{plan}</div>
        </div>
        <div className="plan-result-card-meta">
          <div className="plan-result-card-category">{category}</div>
          <div className="plan-result-card-title">{title}</div>
          <div className="plan-result-card-excerpt">{excerpt}</div>
        </div>
      </Link>
    </div>
  )
}

const PlanProfile1 = props => {

  return (
    <div>
      <SEO title="How doulas can improve the safety of childbirth for BIPOC mothers" />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="How doulas can improve the safety of childbirth for BIPOC mothers"
                url="http://www.bcbs.com"
                img={nursePatientImg}
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{ backgroundImage: `url(${nursePatientImg})` }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__date">
                  <span>Published March 3, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    How doulas can improve the safety of childbirth for BIPOC
                    mothers
                  </h1>
                </div>
                <div className="pp-hero__author">
                  <span>Kristin Gourlay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="pp-main">
        <Fade>
          <div className="pp-related">
            <h5 className="pp-related__title">Related</h5>
            <ul className="pp-related__list">
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Health of America</span>
                </div>
                <div className="pp-related__text">
                  <Link to="/">
                    Doulas of color can help moms of color have healthier babies
                  </Link>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <Link to="/">
                    Inclusive and equitable perinatal care for pregnant Black
                    women
                  </Link>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <Link to="/">
                    In New Jersey, addressing postpartum depression in Black
                    mothers
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                For every mother who dies a pregnancy-related death in the U.S.,
                70 experience a life threatening event. These are unexpected
                cases of what doctors call severe maternal morbidity (SMM)
                events such as cardiac arrest, hemorrhage or sepsis, events that
                could have been fatal or can affect a woman long after
                childbirth. The overall rate of these events{" "}
                <a
                  href="https://www.cdc.gov/reproductivehealth/maternalinfanthealth/severematernalmorbidity.html"
                  target="_blank"
                >
                  has increased by over 200%
                </a>{" "}
                in the past two decades. And the statistics are worse for Black,
                Indigenous and other women of color (BIPOC). Researchers at the
                University of Illinois Chicago found that{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/30877505/"
                  target="_blank"
                >
                  Black women face a 70% higher risk of SMM than any other
                  racial group
                </a>
                . Doulas might provide the prenatal support women at risk need
                to have a healthy pregnancy and childbirth.
              </p>
              <h4>The role of doulas in reducing SMM</h4>
              <p>
                Doulas provide emotional, physical, and informational support to
                women before, during and after childbirth. They’re trained but
                non-clinical partners to women, often supplementing care from
                doctors and midwives. There’s evidence to suggest that working
                with a doula can reduce serious complications among BIPOC women.
                Research finds that doula care can help reduce c-sections,
                decrease maternal anxiety and depression and help coordinate
                care and communication between BIPOC women and their other
                healthcare providers.{" "}
                <a
                  href="https://www.marchofdimes.org/materials/Doulas%20and%20birth%20outcomes%20position%20statement%20final%20January%2030%20PM.pdf"
                  target="_blank"
                >
                  According to the March of Dimes
                </a>
                , “The role of doula care in reducing c-sections is important,
                because c-sections contribute to the risk of maternal morbidity
                and mortality in initial and subsequent pregnancies.”
              </p>
              <blockquote>
                The role of doula care in reducing c-sections is important,
                because c-sections contribute to the risk of maternal morbidity
                and mortality in initial and subsequent pregnancies.
              </blockquote>
              <h4>
                Blue Cross and Blue Shield companies are increasing support for
                doulas
              </h4>
              <p>
                Many BCBS companies are including doula coverage in their
                members’ plans, making philanthropic contributions to doula
                organizations that focus on underserved communities and funding
                training programs to increase the number of BIPOC doulas.
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <h5>Training</h5>
                  <p>
                    The Blue Cross Blue Shield of Michigan Foundation funded a
                    program at Western Michigan University Homer Stryker Medical
                    School to create and train a network of eight community
                    doulas to assist women at risk of poor birth outcomes. Blue
                    Cross and Blue Shield of Minnesota is providing scholarships
                    to increase the number of BIPOC doulas in areas with the
                    least access.
                  </p>
                </li>
                <li>
                  <h5>Doula coverage</h5>
                  <p>
                    CareFirst BlueCross BlueShield, through their grant making
                    efforts, covers doula services for Medicaid patients,
                    including for those who visit the innovative Mamatoto
                    Village, an organization focused on empowering Black mothers
                    with services and education. Blue Cross and Blue Shield of
                    Minnesota is exploring ways to let members know that doula
                    care is covered. Analyzing claims data, the health plan
                    found that moms who used doulas had healthier outcomes.
                  </p>
                </li>
                <li>
                  <h5>Supporting doula organizations</h5>
                  <p>
                    Blue Cross and Blue Shield of Illinois, a division of Health
                    Care Service Corporation (HCSC), has provided funding to
                    Chicago Volunteer Doulas, who care for pregnant and new
                    mothers in vulnerable communities. Excellus BlueCross
                    BlueShield supports Syracuse Community Connections, an
                    organization that provides culturally competent doula care
                    with a focus on Black women and women of color.{" "}
                  </p>
                </li>
              </ul>
              <h4>Doulas and culturally competent care </h4>
              <p>
                Doulas may also be able to play another role in eliminating
                racial disparities in maternal health. A Tufts University School
                of Medicine researcher{" "}
                <a
                  href="https://www.aamc.org/media/44091/download"
                  target="_blank"
                >
                  notes
                </a>{" "}
                that doulas may be more trusted members of the community and
                able to spend time listening to a mother's needs and concerns.
                Within the traditional healthcare system, Black women face
                unconscious bias, which can cause doctors to dismiss a Black
                mother's concerns or create a lack of trust between patient and
                doctor.
              </p>
              <p>
                <em>
                  Blue Cross Blue Shield of Michigan, Blue Cross Blue Shield of
                  Michigan Foundation, Blue Cross and Blue Shield of Minnesota,
                  CareFirst BlueCross BlueShield, Health Care Service
                  Corporation and Excellus BlueCross BlueShield are licensees of
                  the Blue Cross Blue Shield Association, an association of
                  independent, locally owned Blue Cross and Blue Shield
                  companies.
                </em>
              </p>
              <p>
                <em>
                  All company names and brands are the property of their
                  respective owners, used for identification purposes only, and
                  are in no way associated or affiliated with the Blue Cross and
                  Blue Shield Association. Use of these names and brands does
                  not imply endorsement.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Fade>
        <div className="pp-explore">
          <h2>Explore more stories</h2>
          <InstantSearch searchClient={searchClient} indexName="test_index">
            <Configure hitsPerPage={2} distinct />

            <InfiniteHits
              hitComponent={planResult}
              translations={{
                loadMore: "Load more",
              }}
            />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default PlanProfile1
