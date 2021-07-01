import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const FAQs = () => {
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
    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {data.allNodeHealthEquityFaqs.edges[0].node.title}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allNodeHealthEquityFaqs.edges[0].node.body.value,
            }}
          />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default FAQs
