// Base Imports
import * as React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { InstantSearch, InfiniteHits, Configure } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

// Styles
import "../components/pages.css"

// Components
import SEO from "../components/seo"

// Sharing
import Sharing from "../components/Sharing/sharing"

const searchClient = algoliasearch(
  "B604WWKJH0",
  "d5f4c69eedaa62952d698d108856f2a0"
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

const BaltimoreInfantMortality = props => {
  return (
    <div>
      <SEO
        title="Podcast: Baltimore cut infant mortality and helped moms thrive, too."
        description="In 10 years, Baltimore cut its infant mortality by nearly 40%. It's an incredible success story. But there's more work to do as the initiative B'more for Healthy Babies enters its second decade. Substantial racial disparities persist between Black and white infant and maternal health. In this episode, we visit the communities hardest hit by those disparities and learn how this massive, grassroots effort is turning the tide."
      />
      <Fade>
        <div className="pp-hero">
          <div className="pp-hero__share">
            <div className="pp-hero__share-content">
              <h4>Share</h4>
              <Sharing
                title="Podcast: Baltimore cut infant mortality and helped moms thrive, too."
                url="https://www.bcbs.com/the-health-of-america/healthequity/baltimore-cut-infant-mortality-and-helped-moms-thrive-too/"
              />
            </div>
          </div>
          <div
            className="pp-hero__image"
            style={{
              backgroundImage: `url("https://www.bcbs.com/sites/default/files/healthequity/images/feature-baltimore-cut-infant-mortality-and-helped-moms-thrive-too.jpg")`,
            }}
          >
            <div className="pp-hero__meta">
              <div className="pp-hero__meta-content">
                <div className="pp-hero__category">
                  <span>Maternal health</span>
                </div>
                <div className="pp-hero__date">
                  <span>Published May 21, 2021</span>
                </div>
                <div className="pp-hero__title">
                  <h1>
                    Podcast: Baltimore cut infant mortality and helped moms
                    thrive, too
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
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/racial-disparities-in-maternal-health">
                    Racial disparities in maternal health
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Report</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/the-health-of-america/reports/trends-in-pregnancy-and-childbirth-complications-in-the-us">
                    Trends in pregnancy and childbirth complications in the U.S.
                  </a>
                </div>
              </li>
              <li className="pp-related__list-item">
                <div className="pp-related__category">
                  <span>Story</span>
                </div>
                <div className="pp-related__text">
                  <a href="https://www.bcbs.com/coronavirus-updates/stories/telemedicine-has-silver-lining-pregnant-women-during-covid-19">
                    Telemedicine has a silver lining for pregnant women during
                    COVID-19
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
                In 10 years, Baltimore cut its infant mortality by nearly 30%.
                It's an incredible success story. But there's more work to do as
                the initiative B'more for Healthy Babies enters its second
                decade. Substantial racial disparities persist between Black and
                white infant and maternal health. In this episode, we visit the
                communities hardest hit by those disparities and learn how this
                massive, grassroots effort is turning the tide.
              </p>
              <iframe
                style={{ border: "none" }}
                src="//html5-player.libsyn.com/embed/episode/id/19170437/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/"
                height="90"
                width="100%"
                scrolling="no"
                allowFullScreen
              ></iframe>
              <h4>Infant mortality rates skyrocketing</h4>
              <p>
                In 2009, when infant mortality rates were going down in most
                places, Baltimore’s infant mortality rate spiked to its highest
                ever. Nearly 14 babies were dying for every 1000 born. For white
                babies, the rate was 3.5 per 1000. For African American babies,
                18. Black mothers were dying at higher rates, too.
              </p>
              <p>
                Maria Harris Tildon led corporate philanthropy for CareFirst
                BlueCross BlueShield, which helped launch the initiative, B'more
                for Healthy Babies, until 2019. "Look, the notion that we are
                sitting in a city with major international health systems--Johns
                Hopkins, University of Maryland—and we are still dealing with
                infant mortality rates that rival third world countries is
                absolutely incomprehensible."
              </p>
              <p>
                When infant mortality rates were spiking in 2008, then Health
                Commissioner Josh Sharfstein called Harris Tildon and other
                health officials to a meeting to introduce them to the data and
                urge community, government and private partners to unite in a
                strategy like nothing they'd ever tried.
              </p>
              <h4>A bold new strategy to save lives</h4>
              <p>
                Harris Tilden says CareFirst BlueCross BlueShield provided the
                city with seed money for planning. The company added its own
                experts to the mix of community members, nonprofit agencies, and
                health professionals working on the problem. To start, teams
                combed the data about the health of moms and babies in the city,
                piecing together a bigger picture and teasing out the nuances of
                what was happening. They scoured the scientific literature for
                best practices in infant and maternal health. They looked for
                examples from other places that had managed to address this kind
                of major public health challenge.
              </p>
              <p>
                In a year, Baltimore had a bold, city-wide strategy involving
                150 different organizations called B’more for Healthy Babies.
                Part of the program’s bedrock: a universal intake system for any
                mother and baby at risk. For Harris Tildon, it’s been personal.
              </p>
              <p>
                "I personally am a Baltimore native. These are my neighbors. And
                the notion that we had the potential with a very, very
                thoughtful and aggressive plan to make a difference and save not
                only the lives of babies but really have a meaningful impact on
                the mothers before and after delivery was something that we
                thought was important and didn't hesitate to do," says Tildon.
                "A couple of the neighborhoods in which this program is really
                having a significant impact are neighborhoods where I actually
                grew up."
              </p>
              <p>
                Those are neighborhoods steeped in poverty, stung by violence.
                But she says those factors alone aren’t responsible for
                Baltimore’s infant and maternal health crisis. It’s also a
                history of racial inequities. For African Americans, says Harris
                Tildon, that’s led to years of declining health. And when more
                than two-thirds of the city’s citizens are black, she says, not
                taking action is like turning your back on a whole city.
              </p>
              <h4>
                Home visiting to reach pregnant and postpartum women in need
              </h4>
              <p>
                In Baltimore’s Belair-Edison neighborhood, a bit northeast of
                downtown, two home visitors have come to check in on a young
                mother named Charmaine and her baby boy Kam’il.
              </p>
              <p>
                Charmaine welcomes the team into her living room just as Kam'il
                is waking from a nap. She brings him downstairs and it's clear
                he's thriving--eating and sleeping well and, most importantly
                sleeping somewhere safe. That’s one of the most important
                reasons these home visitors are here. With every client they
                visit, they repeat B’more for Healthy Babies’ alphabet mantra:
                ABCD. Babies should always sleep: alone, on their back, in a
                crib or pack and play, and don’t smoke. It’s too dangerous to
                let babies sleep in a bed with others, or in a swing or a car
                seat, too dangerous to fill the crib with blankets and bumpers.
                Those increase the risk of dying from suffocation or SIDS,
                sudden infant death syndrome, both among the leading causes of
                death for babies in Baltimore.
              </p>
              <p>
                Not long before Ka’mil was born, Charmaine didn’t have a crib.
              </p>
              <p>
                "My due date was approaching and I needed help. It was like last
                minute and things were just not going the way that I had planned
                so I needed everything," says Charmaine, whose last name we're
                not using to protect her privacy. Home visitor Bryione Moore,
                part of B'more for Healthy Babies arsenal of community health
                workers, brought her a pack and play and more. "She brought me
                everything even down to one of those little sleepers for them to
                sleep in and stay warm. I have now a stroller, a car seat,
                [more] than I ever had," says Charmaine.
              </p>
              <p>
                Home visitors Bryione Moore and her partner Cheriise McNamara
                have a roster of pregnant and post-partum women to visit every
                day—women identified by that city-wide intake system. Moore and
                McNamara aren’t nurses, but they’re trained to provide resources
                and answer questions. They visit about 1200 women a year in
                neighborhoods all over Baltimore with a trunk stocked full of
                supplies. Moore says sometimes the needs are urgent.
              </p>
              <p>
                "We try to get out there as soon as possible because we don't
                want people to get comfortable with putting the baby in the bed.
                And we have a lot of people in this like, ‘oh well I didn't have
                anywhere for the baby to sleep so we just thought that we'll put
                the baby in a bed,’ and we're like ‘No!’" says Moore.
              </p>
              <p>
                Recently, she got a call from a woman who had already delivered
                her baby. She asked, "S'o where's the baby sleeping at the
                moment?’ And the girl said, ‘oh well the baby's sleeping on a
                swing.’
              </p>
              <p>
                "And I lost my mind and I was like ‘No! I'm on my way. Where do
                you live? Give me your address.’ And I went directly to her. I
                told her, 'I need to bring you this pack and play because I
                don't want that loss on my mind or my heart.,'" says Moore. She
                didn't want the loss of a baby, because of she lacked a safe
                place to sleep, on her conscience.
              </p>
              <p>
                But Moore and McNamara's visits are about more than supplies:
                there’s a large body of evidence showing that regular home
                visiting programs for new mothers and babies improves the
                likelihood both will thrive. The practice is another part of the
                bedrock of the city’s campaign.
              </p>
              <p>
                "So at that moment when we're in our homes we're able to see if
                mom needs further assistance," says Cheriise McNamara. "We try
                to encourage them to use home visiting as an option to carry on
                the care."
              </p>
              <p>
                Mothers may need food or housing assistance, follow up care for
                babies born premature or at a low birth weight, assistance
                following up with doctor visits or specialized care.
              </p>
              <p>
                A mom might be struggling with post-partum depression or
                substance use.
              </p>
              <p>
                "Post-partum depression and things of that nature need to be
                assessed in order for mom to be at her best health," says
                McNamara. "It goes hand in hand. Infant mortality and maternal
                mortality. If we can’t keep the moms healthy, you know, they
                can't keep their babies healthy."
              </p>
              <h4>
                An army of neighborhood moms and dads takes the message, and the
                resources, door to door
              </h4>
              <p>
                On the other side of town from Charmaine and Ka’mil’s house,
                Stacey Stephens is leading a tour up a leafy street in
                Baltimore’s Upton/Druid Heights neighborhood. She runs B’More
                for Healthy Babies efforts in this community, which had some of
                the highest infant mortality rates in the city. But Stephens
                doesn’t like to start with that fact. She’s focused on the rich
                history. The untapped talent. So much potential.
              </p>
              <p>
                "But," says Stephens, "there are areas, as we know, that have
                been neglected for various reasons."
              </p>
              <p>
                She points to neighborhoods like this one that have been left
                behind by development or politics or inequality. That process,
                says Stephens, sets a neighborhood up for generations of
                problems, including infant mortality. That’s why there’s a
                special focus on this neighborhood, and it’s where Stephens
                comes in. It’s one more part of the bedrock of the city’s
                strategy: focus resources where communities need them most.
              </p>
              <p>
                "I have a team of six who are community health workers, who we
                call resource parents, folks from the community who are trained
                in ensuring that women and families have healthy babies," says
                Stephens. "And they do community outreach, distribute
                information, and look for pregnant women"
              </p>
              <p>
                They go door to door, this army of resource moms and dads,
                knocking and asking 'any pregnant women here? Anyone in your
                family pregnant or parenting an infant?' And when they do find
                an expecting mom, they offer to connect her and her family to
                any services they need as soon as possible.
              </p>
              <p>
                Thanks in part to that centralized intake system, says Stephens,
                "B’more for Healthy Babies has a very intricate system developed
                to ensure that no pregnant woman in the city falls through the
                cracks. So if it's food they need, they can assist with that or
                refer them for mental health services or refer them for domestic
                violence services, or get them connected to insurance or health
                care."
              </p>
              <p>
                Stephens says they can’t keep everyone from falling through the
                cracks. But when they can connect a woman to services, they may
                well be saving a baby’s and a mother’s life.
              </p>
              <p>
                "Because I know that anytime I meet a mom and she's pregnant,
                literally with expectations," says Stephens, "this mom and dad
                want the absolute best for that child."
              </p>
              <p>
                Stephens says the work continues. But it’s critical now to
                sharpen the focus on maternal health in this majority black
                community.
              </p>
              <p>
                "We know when we're looking at the infant mortality rate it
                reflects the health of the community," says Stephens. "So it
                already reflects the health of that woman. And so we know that
                when we look at our data and our numbers and the drivers of low
                birth weight babies, very low birth weight babies, that some of
                those drivers have to do with mom’s health before she’s
                pregnant."
              </p>
              <p>
                Stephens says babies die in Baltimore not just because they were
                put to sleep someplace unsafe. Many die because they’re
                extremely small or born too early. Unmanaged diabetes or high
                blood pressure can contribute to those outcomes. And they can
                also seriously harm or kill a mother. Since, for a host of
                reasons, Black women are statistically likelier to have certain
                chronic conditions such as obesity, diabetes and hypertension
                than white women, having a baby is much more dangerous. Add to
                that, Black women sometimes face implicit bias in a doctor’s
                office or in the delivery room. That might mean they’re not
                believed when they tell doctors something is wrong. They’re not
                treated the same as white women when they ask for pain
                medication. Racial disparities in health care can lead to
                tragedy.
              </p>
              <p>
                So Stephens says her team in the predominantly Black Upton/Druid
                Heights is determined not only to find pregnant women or women
                who’ve recently given birth to provide information about safe
                sleep. They’re also working to find women before they get
                pregnant to make sure they’re as healthy as possible and get
                them the care they need.
              </p>
              <h4>Catching health problems before they threaten lives</h4>
              <p>
                Cathy Costa, with the Baltimore City Health Department, says one
                of those outreach efforts involves community-based health
                screening for hypertension for women of reproductive age.
              </p>
              <p>
                She’s been with B’more for Healthy Babies since the start, and
                these days she analyzes infant and maternal mortality data for
                clues about what went wrong. She sees in the numbers what Stacey
                Stephens sees in the community, that as Baltimore battles for
                the lives of babies and mothers, it finds the fights are tougher
                to win for Black moms and babies. Catching and treating chronic
                diseases, which can be dangerous during pregnancy or childbirth
                for mom or baby, is essential. And community screening efforts
                are paying off.
              </p>
              <p>
                "They’re finding so much hypertension," says Costa, "that
                they’re often finding women out in the community and sending
                them immediately to the emergency room, because women are not
                realizing that they have such high blood pressure that they’re
                in crisis."
              </p>
              <p>
                Costa says B’more for Healthy Babies didn’t start out with a
                goal to reduce maternal mortality. But over the past decade it’s
                become clear that saving mothers is the next frontier.
              </p>
              <h4>What lies ahead: a focus on maternal health</h4>
              <p>
                Still, as they head into the next decade, there’s reason to
                celebrate. B’more for Healthy Babies has helped cut infant
                mortality rates by nearly 40 percent. Harvard’s Kennedy School
                and the Pew Charitable Trusts have recognized the work, and
                cities around the country are looking at adopting the model.
                CareFirst BlueCross BlueShield has given millions to support the
                effort to help make up for what federal dollars don’t cover.
                It’s the health plan’s biggest sustained community investment.
                The public private partnership has made a huge difference.
              </p>
              <p>
                <em>
                  CareFirst BlueCross BlueShield is a licensee of the Blue Cross
                  Blue Shield Association, an association of independently owned
                  and operated Blue Cross and Blue Shield companies.
                </em>
              </p>
              <p>
                <em>
                  The programs mentioned in this podcast are in no way
                  associated or affiliated with, or endorsed by, the Blue Cross
                  Blue Shield Association.{" "}
                </em>
              </p>
              <p>
                <em>
                  Music Credits:
                  <br />
                  Chad Crouch, copyright 2020, 1019, Creative Commons License,
                  BY-NC 4.0
                  <br />
                  Podington bear, copyright 2015, Creative Commons License,
                  BY-NC 4.0
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
              filters="headline:'Culturally appropriate interventions for mothers and
                    newborns' OR headline:'How doulas can improve the safety of childbirth for women of
                    color'"
            />

            <InfiniteHits hitComponent={planResult} />
          </InstantSearch>
        </div>
      </Fade>
    </div>
  )
}

export default BaltimoreInfantMortality
