import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const FAQs = ({ heading }) => {
  const data = useStaticQuery(graphql`
    {
      allNodeHealthEquityFaqs {
        edges {
          node {
            title
            body {
              value
            }
          }
        }
      }
    }
  `)

  return (
    <section className="faq" id="faq">
      <div className="inner-content">
        <h3>{heading}</h3>

        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          {data.allNodeHealthEquityFaqs.edges.map(faq => (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>{faq.node.title}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div
                  dangerouslySetInnerHTML={{
                    __html: faq.node.body.value,
                  }}
                />
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQs
