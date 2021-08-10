// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import { searchClient, planResult } from "../components/Algolia"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

// Image
const mainImage =
  "https://www.bcbs.com/sites/default/files/healthequity/images/feature-in-preventing-or-treating-stroke-one-size-may-not-fit-all.jpg"

const ConfrontingRacialDisparities = props => {
  return (
    <div>
      <SEO
        title="In preventing or treating stroke, one size may not fit all"
        description="Blue Cross Blue Shield Association hosted a discussion on racial health disparities, how to change their trajectory and solutions for Black maternal health."
        image={mainImage}
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="In preventing or treating stroke, one size may not fit all"
                url="https://www.bcbs.com/the-health-of-america/healthequity/in-preventing-or-treating-stroke-one-size-may-not-fit-all/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url(${mainImage})`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                {/* <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div> */}
                <div className="pp-hero__date">
                  <span>Published August 5, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    In preventing or treating stroke, one size may not fit all
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
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/video-clinical-trials-everyone-needs-seat-the-table">
                    In clinical trials, everyone needs a seat at the table
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/advance-personalized-medicine-all-of-us-recruits-diverse">
                    To advance personalized medicine, All of Us recruits diverse
                    participants
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Article</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/articles/bcbs-supporting-efforts-increase-diversity-medical-research">
                    BCBS supporting efforts to increase diversity in medical
                    research
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div className="pp-content">
            <div className="pp-content__inner">
              <p>
                <em>
                  With more people of diverse backgrounds participating in a
                  major health research program, researchers like Dr. Julián
                  Acosta may be able to pinpoint better treatments and
                  prevention for stroke.
                </em>
              </p>
              <p>
                Dr. Julián Acosta wants to know who experiences a stroke and
                why. The deeper he digs for details, the likelier it is he’ll
                find paths toward prevention.
              </p>
              <p>
                <a
                  href="https://medicine.yale.edu/profile/julian_acosta/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acosta
                </a>{" "}
                is a postdoctoral research fellow at the Falcone Lab in the Yale
                School of Medicine. Supported by the prestigious Bugher Training
                Fellowship from the American Heart Association, he studies the
                factors determining the prevalence and incidence of stroke in
                large populations using genetic data. He hopes to use a new
                wealth of data to try to understand the differences in stroke
                prevalence between different groups.
              </p>
              <p>
                Until recently, he could tell you about the prevalence of stroke
                in the U.S. He could tell you which groups are at greater risk
                for stroke, but not precisely why. For example, the data Acosta
                has had to work with couldn’t reveal much about why people of a
                particular ethnicity or socioeconomic status faced a greater
                risk of stroke than others. “That’s because most participants in
                health research studies are individuals of European ancestry.
                People from other ancestries are underrepresented,” says Acosta,
                who is himself from Argentina. His own background isn’t even
                well-represented in the data he studies.
              </p>
              <h4>The far-reaching impact of stroke</h4>
              <p>
                Understanding more about stroke could save and improve lives. In
                the U.S., someone has a stroke every 40 seconds, according to
                the{" "}
                <a
                  href="https://www.cdc.gov/stroke/facts.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Centers for Disease Control and Prevention
                </a>
                . Stroke is the leading cause of long-term, serious disability.
                A recent{" "}
                <a href="https://www.bcbs.com/the-health-of-america/infographics/the-impact-of-hypertension-high-blood-pressure-commercially">
                  Health of America report
                </a>{" "}
                from the Blue Cross Blue Shield Association found that 70
                million commercially insured Americans have high blood pressure,
                a risk factor for stroke. The study finds that they’re five
                times likelier to have a stroke.
              </p>
              <h4>
                Access to broader, more diverse data is a “game changer” for a
                debilitating or deadly event
              </h4>
              <p>
                Now, Acosta and his colleagues have access to data from the{" "}
                <a href="https://www.bcbs.com/the-health-of-america/articles/advance-personalized-medicine-all-of-us-recruits-diverse">
                  <em>All of Us</em> Research Program
                </a>
                , a landmark health research effort launched by the National
                Institutes of Health. On its way toward enrolling a million
                adults in the U.S., the program’s goal is to build one of the
                richest sets of health data ever created, including a
                participant’s anonymized genetic, demographic, socioeconomic
                information and more. The data gives researchers like Acosta a
                much more nuanced view and have led to some surprising findings.
                For Acosta, that’s been especially true about the socioeconomic
                factors associated with stroke.
              </p>
              <p>
                For example, in preliminary analysis of All of Us data, Acosta
                and his team have found:
              </p>
              <ul className="pp-content__fancy-list">
                <li>
                  <p>
                    Women* who have low incomes have a greater stroke prevalence
                    than those with higher incomes.
                  </p>
                </li>
                <li>
                  <p>
                    Black women have a higher stroke prevalence than white women
                    and also a higher prevalence than Black men**. In other
                    ethnic groups, men have higher stroke prevalence.
                  </p>
                </li>
                <li>
                  <p>
                    Men have a greater prevalence of stroke regardless of income
                    level, but Black women with lower incomes have a higher
                    prevalence than Black women with higher incomes and a higher
                    prevalence than men overall.
                  </p>
                </li>
              </ul>
              <p>
                <div>
                  <em>*People whose sex assigned at birth was female.</em>
                </div>
                <div>
                  <em>**People whose sex assigned at birth was male.</em>
                </div>
              </p>
              <div className="pp-content__callout">
                Join the <em>All of Us</em> Research Program and help make
                history. Learn more{" "}
                <a
                  href="http://joinallofus.org/go?utm_source=bcbsa&utm_medium=blog&utm_campaign=y4&utm_term=national&utm_content=acosta_stroke_article"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </div>
              <p>
                Learning as much as we can about stroke is critical because a
                stroke can be debilitating and even deadly. However, it might be
                preventable. Different kinds of stroke (ischemic, when a blood
                clot obstructs an artery and prevents blood from reaching the
                brain, or hemorrhagic, when a blood vessel breaks and leaks
                blood through the brain) are stoked by certain risk factors,
                like high blood pressure or high cholesterol. Knowing more about
                people who have had a stroke and who are at risk is where the
                opportunity for prevention comes in.
              </p>
              <h4>
                More detailed, diverse data could reveal critical differences in
                risk and impact
              </h4>
              <p>
                “We already know there is a difference in stroke prevalence
                between Black and white people, and between Hispanic and Asian
                people,” says Acosta. But as more data from{" "}
                <a
                  href="http://joinallofus.org/go?utm_source=bcbsa&utm_medium=blog&utm_campaign=y4&utm_term=national&utm_content=acosta_stroke_article"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>All of Us</em>
                </a>{" "}
                becomes available, Acosta says his team will be able to study
                differences among groups at an even more granular level than has
                been studied before. In addition to differences between specific
                racial and ethnic groups, Acosta will be able to drill down into
                differences at the individual level related to the social
                determinants of health, such as income, education, geographic
                distribution, disability, and access to health insurance.
              </p>
              <p>
                “We can look deeper than ‘Hispanic,’” says Acosta. “We can look
                at how stroke affects Mexicans and Puerto Ricans.” For example,
                cardiovascular health can affect a person’s risk for stroke.
                “Researchers know that Mexican and other South Americans have a
                higher prevalence of high blood pressure,” he says. “Dominicans
                and Puerto Ricans have a higher prevalence of high cholesterol.”
                Disaggregating, or separating the data into smaller subgroups,
                may reveal even bigger differences in the risk or impact of
                stroke.
              </p>
              <h4>
                The goal: more targeted treatment and prevention, and lessening
                the burden for all
              </h4>
              <p>
                "When you have a stroke, you can become dependent on other
                people or family,” says Acosta. “It impacts families,
                individuals, communities and the healthcare system in general."
              </p>
              <p>
                When researchers know more about an individual’s risk of stroke,
                down to the level of a person’s genetics, they may be able to
                develop individually tailored methods or medications for
                prevention or treatment—often called precision medicine. “They
                can also make policy recommendations about interventions to
                promote cardiovascular health earlier in life,” says Acosta,
                “such as improving access to healthy food, exercise facilities
                and medications.”
              </p>
              <h4>
                About the{" "}
                <a
                  href="http://joinallofus.org/go?utm_source=bcbsa&utm_medium=blog&utm_campaign=y4&utm_term=national&utm_content=acosta_stroke_article"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>All of Us</em> Research Program
                </a>
              </h4>
              <p>
                The mission of the <em>All of Us</em> Research Program is to
                accelerate health research and medical breakthroughs, enabling
                individualized prevention, treatment, and care for all of us.
                The program will partner with one million or more people across
                the U.S. to build the most diverse biomedical data resource of
                its kind, to help researchers gain better insights into the
                biological, environmental, and behavioral factors that influence
                health. For more information or to become a participant, visit
                the{" "}
                <a
                  href="http://joinallofus.org/go?utm_source=bcbsa&utm_medium=blog&utm_campaign=y4&utm_term=national&utm_content=acosta_stroke_article"
                  target="_blank"
                  rel="noreferrer"
                >
                  <em>All of Us website</em>
                </a>
                .
              </p>
              <p>
                <em>
                  The Blue Cross and Blue Shield Association is a national
                  federation of 35 independent, community-based and locally
                  operated Blue Cross and Blue Shield companies that
                  collectively provide health care coverage for one in three
                  Americans.
                </em>
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Fade>
        <div className="pp-explore pp-explore-single-card">
          <h2>Explore more stories</h2>
          <InstantSearch
            searchClient={searchClient}
            indexName="he_plan_profiles"
          >
            <Configure
              hitsPerPage={2}
              distinct
              filters="headline:'Reimagining equity in healthcare, together'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default ConfrontingRacialDisparities
