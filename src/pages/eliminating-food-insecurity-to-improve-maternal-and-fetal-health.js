// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Images
import nursePatientImg from "../images/nurse-patient-1.jpg"

// Sharing
import Sharing from "../components/Sharing/sharing"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "156ba268a0517559cd6a89921ae9cb5f"
)

const planResult = ({ hit }) => {
  const { headline, topic, plans, slug, teaser, img_url, read_time } = hit

  return (
    <div className="plan-result-card">
      <Link to={`/${slug}/`}></Link>
      <div className="plan-result-card-plan">
        <div className="plan-result-card-image">
          <img
            src={`https://www.bcbs.com/sites/default/files/healthequity/images/${img_url}`}
            alt=""
          />
        </div>
        <div className="plan-result-card-company">{plans}</div>
      </div>
      <div className="plan-result-card-meta">
        <div className="plan-result-card-category">{topic}</div>
        <div className="plan-result-card-title">{headline}</div>
        <div className="plan-result-card-excerpt">{teaser}</div>
        <div className="plan-result-card-read">{read_time} min read</div>
      </div>
    </div>
  )
}

const PlanProfile4 = props => {
  return (
    <div>
      <SEO
        title="Eliminating food insecurity improves maternal/fetal health"
        description="Programs located in Minnesota, New York and Kansas City help keep pregnant women and their families from going hungry."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Eliminating food insecurity improves maternal/fetal health"
                url="https://www.bcbs.com/the-health-of-america/healthequity/eliminating-food-insecurity-to-improve-maternal-and-fetal-health/"
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
                    Eliminating food insecurity to improve maternal and fetal
                    health
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
                Researchers are still learning how limited or uncertain access
                to nutritious food can be harmful during and after pregnancy for
                both mother and baby. Food insecurity may increase the{" "}
                <a
                  href="https://sites.nationalacademies.org/cs/groups/dbassesite/documents/webpage/dbasse_084309.pdf"
                  target="_blank"
                >
                  release of stress hormones
                </a>
                , which has been linked to pre-term birth as well as unhealthy
                changes in a mother’s pregnancy weight. It has been linked to{" "}
                <a
                  href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2015.0645"
                  target="_blank"
                >
                  an increased risk for post-partum depression
                </a>
                . Food insecurity can also affect a pregnant woman’s{" "}
                <a
                  href="https://www.cdc.gov/pcd/issues/2016/16_0212.htm"
                  target="_blank"
                >
                  blood pressure
                </a>
                , and so much more.
              </p>
              <h4>Who is food insecure?</h4>
              <p>
                The burden of food insecurity is borne disproportionately by
                Black, Indigenous and women of color.{" "}
                <a
                  href="https://www.healthypeople.gov/2020/topics-objectives/topic/social-determinants-health/interventions-resources/food-insecurity#:~:text=Racial%20and%20ethnic%20disparities%20exist,versus%2012.3%25%2C%20respectively)."
                  target="_blabk"
                >
                  Federal statistics
                </a>{" "}
                show Black Americans are twice as likely to be food insecure as
                the national average. Through another lens, one in five Black
                people is food insecure,{" "}
                <a
                  href="https://www.feedingamerica.org/hunger-in-america/african-american"
                  target="_blank"
                >
                  according to Feeding America
                </a>
                .{" "}
              </p>
              <p>
                Federal food assistance programs may help. But doctors and
                health insurers are seeing an opportunity—and using new
                resources—to support women at risk.
              </p>
              <h4>
                Three programs that keep pregnant women and their families from
                going hungry
              </h4>
              <p>
                In Minnesota,{" "}
                <strong>Blue Cross and Blue Shield of Minnesota</strong> is
                offering mothers and families in need clinically tailored meals
                and food boxes as well as nutritional coaching. Members can
                start as early as 20 weeks into their pregnancy and continue
                through the second month after birth. The program, called{" "}
                <strong>Food Rx</strong>, is a partnership with Project Well and
                Second Harvest Heartland, which will deliver the food and the
                coaching. Members will also be connected to food programs and
                solutions to meet other social needs through case management.
              </p>
              <p>
                In New York, <strong>Excellus BlueCross BlueShield</strong> is
                working with FoodLink, a local food bank, to pilot a nutrition
                program designed to identify at-risk moms and connect them to
                nutritional education and resources. Experts from Excellus BCBS
                say providing boxes of food is only one step in addressing food
                insecurity. Empowering mothers with culturally competent
                nutrition education can do even more to keep moms and their
                children healthy.
              </p>
              <p>
                <strong>Blue Cross and Blue Shield of Kansas City</strong> works
                with local food banks and food distributions centers to help
                members who are pregnant or new moms. Mothers who continue to
                experience food insecurity are connected with a state food
                assistance program. The health plan trains front line providers
                to screen women for food insecurity. Then Blue Cross and Blue
                Shield of Kansas City community health workers connect those
                members to resources to meet their social needs and follow up
                with providers.
              </p>
              <h4>Food as healthcare</h4>
              <p>
                Healthcare providers and health insurers are increasingly
                involved in meeting more than just medical needs for their
                patients. They recognize that having enough food to eat, or
                access to transportation, among other social needs, are just as
                critical for good health as a blood test or a sonogram. And
                right now, there may be more needs to meet. The economic crisis
                brought on by the pandemic has left more Americans out of work,
                living in poverty and struggling. Programs like these will be
                critical for catching those who might otherwise fall through the
                cracks.
              </p>
              <p>
                <em>
                  Blue Cross and Blue Shield of Minnesota, Blue Cross and Blue
                  Shield of Kansas City and Excellus BlueCross BlueShield are
                  independent licensees of the Blue Cross Blue Shield
                  Association, an association of independent, locally operated
                  Blue Cross and Blue Shield companies.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Fade>
        <div className="pp-explore">
          <h2>Explore more stories</h2>
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Strong partnerships aim to improve birth outcomes' OR headline:'BlueCross BlueShield of South Carolina aims to improve pregnancy outcomes in women with diabetes'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default PlanProfile4
