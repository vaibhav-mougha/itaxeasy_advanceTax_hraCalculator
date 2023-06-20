import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Image,
  Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Accord = () => {
  return (
    <>
      <Box
        // border={"2px solid green"}
        w={"20%"}
      >
        <Box w={"90%"} m={"auto"}>
          {" "}
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton
                bg={"#F3F3F3"}
                border={"1px solid black"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <Flex as="span" flex="1">
                  <Image
                    src={"./taxLaws.jpg"}
                    w={"1.7rem"}
                    h={"1.7rem"}
                    mt={"0.5rem"}
                  />
                  <Text
                    w={"80%"}
                    ml={"1.5rem"}
                    fontSize={"0.9rem"}
                    textAlign={"left"}
                  >
                    TAX INFORMATION AND SERVICES
                  </Text>
                </Flex>

                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax Services
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax Calculators
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Legal Maxim
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax Charts & Tables
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax FAQS
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax Tutorials
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax Information
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax Exempted Institutions
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax Offices
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax Helpline
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax Utilities
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle mt={"1.5rem"}>
            <AccordionItem>
              <AccordionButton
                bg={"#F3F3F3"}
                border={"1px solid black"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <Flex as="span" flex="1">
                  <Image src={"./taxInfo.jpg"} w={"1.6rem"} h={"1.6rem"} />
                  <Text
                    w={"80%"}
                    ml={"1.5rem"}
                    fontSize={"0.9rem"}
                    textAlign={"left"}
                  >
                    TAX LAWS & RULES
                  </Text>
                </Flex>

                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Acts
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Rules
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Budget and Bills
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Circulars & Notification
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle mt={"1.5rem"}>
            <AccordionItem>
              <AccordionButton
                bg={"#F3F3F3"}
                border={"1px solid black"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <Flex as="span" flex="1">
                  <Image
                    src={"./InternationalTaxation.jpg"}
                    w={"1.6rem"}
                    h={"1.6rem"}
                    mt={"0.5rem"}
                  />
                  <Text
                    w={"80%"}
                    ml={"1.5rem"}
                    fontSize={"0.9rem"}
                    textAlign={"left"}
                  >
                    INTERNATIONAL TAXATION
                  </Text>
                </Flex>

                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Advance Rulings
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> DTAAs
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> International Businessess: Sections to be
                remembered
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Relevant provisions for non-resident
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Treaty Comparison
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Transfer Pricing as contained in Chapter X
                of income-tax Act,1961
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> TDS rates under DTAA
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Tax rates as per Income-tax Act vis-a-vis
                tax treaties
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Utility on DTAA
                <Divider />
              </AccordionPanel>

              <AccordionPanel pb={1}>
                <ChevronRightIcon /> Withholding Tax
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default Accord;
