import React, { useRef, useState } from "react";
import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Tooltip,
  Button,
  useToast,
} from "@chakra-ui/react";
import IfhpContainer from "./IFHP-Box/IfhpContainer";
import CapitalGainsBox from "./Capital-Gains/CapitalGainsBox";
import IncomeFromOtherSources from "./IncomeFromOtherSources/IncomeFromOtherSources";
import DeductionsBox from "./Deductions/DeductionsBox";
import TotalBox from "./Deductions/TotalBox";
import CheckDeduction from "./Deductions/CheckDeduction";
import ILTBox from "./ILTBox/ILTBox";

const Individual = () => {
  const [cal, setCal] = useState({
    incomeFromSalary: "",
    netTaxableIncome: "",
    profitsAndGains: "",
    relief: "",
    tds: "",
    agriculturalIncome: "",
  });

  const [formData, setFormData] = useState({
    incomeTax: "",
    surcharge: "",
    educationCess: "",
    secondaryHigherEducationCess: "",
    totalTaxLiability: "",
    assessedTax: "",
  });

  const toast = useToast();

  const ifhpUrf = useRef(null);
  const [ifhp, setIfhp] = useState(false);

  const capitalGainsRef = useRef(null);
  const [capitalGains, setCapitalGains] = useState(false);

  const incomeFromOtherSourcesRef = useRef(null);
  const [incomeFromOtherSources, setIncomeFromOtherSourcesRef] =
    useState(false);

  const deductionsRef = useRef(null);
  const [deductions, setDeductions] = useState(false);

  const handleShaw = (name) => {
    if (name == "ifhp") {
      if (ifhp) {
        setIfhp(false);
        ifhpUrf.current.style.display = "none";
      } else {
        setIfhp(true);
        ifhpUrf.current.style.display = "block";
      }
    } else if (name == "Capital Gains") {
      if (capitalGains) {
        setCapitalGains(false);
        capitalGainsRef.current.style.display = "none";
      } else {
        setCapitalGains(true);
        capitalGainsRef.current.style.display = "block";
      }
    } else if (name == "incomeFromOtherSources") {
      if (incomeFromOtherSources) {
        setIncomeFromOtherSourcesRef(false);
        incomeFromOtherSourcesRef.current.style.display = "none";
      } else {
        setIncomeFromOtherSourcesRef(true);
        incomeFromOtherSourcesRef.current.style.display = "block";
      }
    } else if (name == "deductions") {
      if (deductions) {
        setDeductions(false);
        deductionsRef.current.style.display = "none";
      } else {
        setDeductions(true);
        deductionsRef.current.style.display = "block";
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCal((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // console.log(cal)

  const handleClick = (event) => {
    const { name, value } = event.target;
    setCal((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    cal.netTaxableIncome = cal.incomeFromSalary + cal.profitsAndGains;

    if (cal.netTaxableIncome <= 250000) {
      cal.netTaxableIncome = 0;
      formData.incomeTax = 0;
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = 0;
      formData.totalTaxLiability = 0;
      formData.assessedTax = 0;

      setCal((prev) => {
        return {
          ...prev,
          relief: 0,
          tds: 0,
        };
      });
      toast({
        position: "top",
        title: "Income Tax Department",
        description:
          "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (
      250001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 500000
    ) {
      formData.incomeTax = (cal.netTaxableIncome * 0.05 - 12500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome / 1000
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (
      500001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 750000
    ) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.1 - 12500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.004
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (
      750001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 1000000
    ) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.15 - 37500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.0045
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (
      1000001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 1250000
    ) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.2 - 62500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.006
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (
      1250001 <= cal.netTaxableIncome &&
      cal.netTaxableIncome <= 1500000
    ) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.25 - 112500).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.007
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (cal.netTaxableIncome > 1500000) {
      // console.log(cal.netTaxableIncome);
      formData.incomeTax = (cal.netTaxableIncome * 0.3 - 188000).toFixed(2);
      formData.surcharge = 0;
      formData.educationCess = 0;
      formData.secondaryHigherEducationCess = (
        cal.netTaxableIncome * 0.008
      ).toFixed(2);
      formData.totalTaxLiability = (
        +formData.secondaryHigherEducationCess + +formData.incomeTax
      ).toFixed(2);
      formData.assessedTax = formData.totalTaxLiability - cal.relief;
      formData.assessedTax = formData.assessedTax - cal.tds;
      (+formData.assessedTax).toFixed(2);

      if (formData.assessedTax <= 10000) {
        formData.incomeTax = 0;
        formData.surcharge = 0;
        formData.educationCess = 0;
        formData.secondaryHigherEducationCess = 0;
        formData.totalTaxLiability = 0;
        formData.assessedTax = 0;
        setCal((prev) => {
          return {
            ...prev,
            relief: 0,
            tds: 0,
          };
        });
        toast({
          position: "top",
          title: "Income Tax Department",
          description:
            "Error:Advance Tax will not be payable if assessed tax is less than ₹10,000",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Income Tax Department",
          description: `Assessed Tax : ${formData.assessedTax}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const handleReset = () => {
    setCal({
      incomeFromSalary: "",
      netTaxableIncome: "",
      profitsAndGains: "",
      relief: "",
      tds: "",
      agriculturalIncome: "",
    });

    setFormData({
      incomeTax: "",
      surcharge: "",
      educationCess: "",
      secondaryHigherEducationCess: "",
      totalTaxLiability: "",
      assessedTax: "",
    });
  };

  return (
    <>
      <Box border={"1px solid #E9E9E9"}>
        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"} pb={"0.1rem"}>
          <FormControl id="bac">
            <Flex>
              <FormLabel fontSize={"1rem"} fontWeight={"normal"}>
                <Flex>
                  <Text>Whether opting for taxation under Section</Text>
                  <Text color={"#3B9AC6"} ml={"0.4rem"}>
                    115BAC
                  </Text>
                  <Text>?</Text>
                </Flex>
              </FormLabel>
              <Select
                placeholder="Select"
                name="bac"
                bg={"#FFFFFF"}
                w={"10rem"}
                size={"base"}
                ml={"31rem"}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Select>
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="citizen">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Male / Female / Senior Citizen
              </FormLabel>
              <Select
                placeholder="Select"
                name="citizen"
                bg={"#FFFFFF"}
                w={"16rem"}
                size={"sm"}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Senior Citizen">Senior Citizen</option>
                <option value="Super Senior Citizen">
                  Super Senior Citizen
                </option>
                <option value="Foreign Company">Foreign Company</option>
              </Select>
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="residential">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Residential Status
              </FormLabel>
              <Select
                placeholder="Select"
                name="residential"
                bg={"#FFFFFF"}
                w={"16rem"}
                size={"sm"}
              >
                <option value="Resident">Resident</option>
                <option value="Non-Resident">Non-Resident</option>
                <option value="Not Ordinary Resident">
                  Not Ordinary Resident
                </option>
              </Select>
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="incomeFromSalary">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Income from Salary (Income from salary after standard deduction
                of Rs.50000.)
              </FormLabel>

              <Input
                name="incomeFromSalary"
                value={cal.incomeFromSalary}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                onChange={handleChange}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="taxPayer">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                <Flex>
                  <Text>Income From House Property </Text>
                  <Tooltip
                    label="Note: In case the assesse is opted for Section 115BAC, Loss under head House Property for rented house shall not be allowed to set off from any other head of income and cannot be carried forward"
                    fontSize="sm"
                    color={"black"}
                    bg={"#FFFFFF"}
                    p={"1rem"}
                    fontWeight={"normal"}
                  >
                    <Text
                      color={"#FFFFFF"}
                      border={"1px solid #3B9AC6"}
                      borderRadius={"50%"}
                      bg={"#3B9AC6"}
                      ml={"1rem"}
                      w="1.4rem"
                      textAlign={"center"}
                    >
                      i
                    </Text>
                  </Tooltip>
                </Flex>
              </FormLabel>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  color={"white"}
                  bg={"#333333"}
                  cursor={"pointer"}
                  h="20px"
                  fontSize={"12px"}
                  borderRadius={"4px"}
                  p={"2px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => handleShaw("ifhp")}
                >
                  {ifhp ? "Hide Details" : "Show Details"}
                </Box>
              </Box>

              <Input
                name="incomeFromHouseProperty"
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
              />
            </Flex>
          </FormControl>
        </Flex>

        {/* IFHP-Box */}
        {/* //////////////// */}
        <Box
          bg={"#B4B4B4"}
          minH={"200px"}
          w="100%"
          m={"auto"}
          px={"0.7mre"}
          py={"10px"}
          display={"none"}
          ref={ifhpUrf}
        >
          <IfhpContainer
            text={"a. Income from Self-occupied Property"}
            show={false}
          />
          <IfhpContainer
            text={"Interest Paid/Payable on Housing Loan"}
            show={false}
          />
          <IfhpContainer text={"1. Interest on Housing Loan"} show={true} />
          <IfhpContainer
            text={"Income from self-occupied house property"}
            show={true}
          />
          <IfhpContainer
            text={"b. Income from Let-out Property"}
            show={false}
          />
          <IfhpContainer
            text={"1. Annual Letable Value/Rent Received or Receivable"}
            show={true}
          />
          <IfhpContainer
            text={"2. Less: Municipal Taxes Paid During the Year"}
            show={true}
          />
          <IfhpContainer text={"3. Less:Unrealized Rent"} show={true} />
          <IfhpContainer text={"4. Net Annual Value (1-(2+3))"} show={true} />
          <IfhpContainer
            text={"Less: Deductions from Net Annual Value"}
            show={false}
          />
          <IfhpContainer
            text={"i. Standard Deduction @ 30% of Net Annual Value"}
            show={true}
          />
          <IfhpContainer text={"ii. Interest on Housing Loan"} show={true} />
          <IfhpContainer
            text={"Income from Let-out House Property"}
            show={true}
          />
        </Box>
        {/* /////////////// */}

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="incomeTax">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Capital Gains
              </FormLabel>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  color={"white"}
                  bg={"#333333"}
                  cursor={"pointer"}
                  h="20px"
                  fontSize={"12px"}
                  borderRadius={"4px"}
                  p={"2px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => handleShaw("Capital Gains")}
                >
                  {capitalGains ? "Hide Details" : "Show Details"}
                </Box>
              </Box>

              <Input
                name="capitalGains"
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
              />
            </Flex>
          </FormControl>
        </Flex>

        {/* Capital Gains */}
        {/* /////////////////////////// */}
        <Box
          bg={"#B4B4B4"}
          minH={"200px"}
          w="100%"
          m={"auto"}
          px={"10px"}
          py={"25px"}
          display={"none"}
          ref={capitalGainsRef}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr 1fr"}
            gap={"30px 10px"}
          >
            <CapitalGainsBox text={"From 01/04/2023 to 15/06/2023"} />
            <CapitalGainsBox text={"From 16/06/2023 to 15/09/2023"} />
            <CapitalGainsBox text={"From 16/09/2023 to 15/12/2023"} />
            <CapitalGainsBox text={"From 16/12/2023 to 15/03/2024"} />
            <CapitalGainsBox text={"From 16/03/2024 to 31/03/2024"} />
            <CapitalGainsBox text={"Total"} bold={true} />
            <CapitalGainsBox text={"From 01/04/2023 to 15/06/2023"} />
            <CapitalGainsBox text={"From 16/06/2023 to 15/09/2023"} />
            <CapitalGainsBox text={"From 16/09/2023 to 15/12/2023"} />
            <CapitalGainsBox text={"From 16/12/2023 to 15/03/2024"} />
            <CapitalGainsBox text={"From 16/03/2024 to 31/03/2024"} />
            <CapitalGainsBox text={"Total"} bold={true} />
            <CapitalGainsBox text={"From 01/04/2023 to 15/06/2023"} />
            <CapitalGainsBox text={"From 15/06/2023 to 15/09/2023"} />
            <CapitalGainsBox text={"From 16/09/2023 to 15/12/2023"} />
            <CapitalGainsBox text={"From 16/12/2023 to 15/03/2024"} />
            <CapitalGainsBox text={"From 16/03/2024 to 31/03/2024"} />
            <CapitalGainsBox text={"Total"} bold={true} />
            <CapitalGainsBox text={"From 01/04/2023 to 15/06/2023"} />
            <CapitalGainsBox text={"From 16/06/2023 to 15/09/2023"} />
            <CapitalGainsBox text={"From 16/09/2023 to 15/12/2023"} />
            <CapitalGainsBox text={"From 16/12/2023 to 15/03/2024"} />
            <CapitalGainsBox text={"From 16/03/2024 to 31/03/2024"} />
            <CapitalGainsBox text={"Total"} bold={true} />
            <CapitalGainsBox text={"From 01/04/2023 to 15/06/2023"} />
            <CapitalGainsBox text={"From 16/06/2023 to 15/09/2023"} />
            <CapitalGainsBox text={"From 16/09/2023 to 15/12/2023"} />
            <CapitalGainsBox text={"From 16/12/2023 to 15/03/2024"} />
            <CapitalGainsBox text={"From 16/03/2024 to 31/03/2024"} />
            <CapitalGainsBox text={"Total"} bold={true} />
          </Box>
        </Box>

        {/* ////////////////////////// */}

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="surcharge">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Income From Other Sources
              </FormLabel>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  color={"white"}
                  bg={"#333333"}
                  cursor={"pointer"}
                  h="20px"
                  fontSize={"12px"}
                  borderRadius={"4px"}
                  p={"2px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => handleShaw("incomeFromOtherSources")}
                >
                  {incomeFromOtherSources ? "Hide Details" : "Show Details"}
                </Box>
              </Box>

              <Input
                name="incomeFromOtherSources"
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
              />
            </Flex>
          </FormControl>
        </Flex>

        {/* Income From Other Sources */}
        {/* //////////////////////////// */}

        <Box
          bg={"#B4B4B4"}
          minH={"100px"}
          w="100%"
          m={"auto"}
          px={"0.7mre"}
          py={"10px"}
          display={"none"}
          ref={incomeFromOtherSourcesRef}
        >
          <IncomeFromOtherSources text={"Interest"} show={true} />
          <IncomeFromOtherSources
            text={"Commission/Other Income"}
            show={true}
          />
          <IncomeFromOtherSources
            text={"Winnings from Lottery, Crossword Puzzles, etc."}
            show={true}
          />
        </Box>

        {/* //////////////////////////// */}

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="profitsAndGains">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Profits and Gains of Business or Profession (enter profit only)
              </FormLabel>

              <Input
                name="profitsAndGains"
                value={cal.profitsAndGains}
                bg={"#F4F4F4"}
                w={"16rem"}
                type="number"
                onChange={handleChange}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="agriculturalIncome">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Agricultural Income
              </FormLabel>

              <Input
                name="agriculturalIncome"
                value={cal.agriculturalIncome}
                bg={"#F4F4F4"}
                w={"16rem"}
                type="number"
                onChange={handleChange}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="deductions">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Deductions
              </FormLabel>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  color={"white"}
                  bg={"#333333"}
                  cursor={"pointer"}
                  h="20px"
                  fontSize={"12px"}
                  borderRadius={"4px"}
                  p={"2px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => handleShaw("deductions")}
                >
                  {deductions ? "Hide Details" : "Show Details"}
                </Box>
              </Box>

              <Input
                name="deductions"
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disbaled
              />
            </Flex>
          </FormControl>
        </Flex>

        {/* Deductions Box */}
        {/* ////////////////////// */}

        <Box
          bg={"#B4B4B4"}
          minH={"100px"}
          w="100%"
          m={"auto"}
          px={"0.7mre"}
          py={"10px"}
          display={"none"}
          ref={deductionsRef}
        >
          <DeductionsBox text={"Life Insurance premium paid"} show={true} />
          <DeductionsBox text={"Payment for annuity plan"} show={true} />
          <DeductionsBox text={"Payment for annuity plan"} show={true} />
          <DeductionsBox
            text={"Investment in NSC (VIII issue) + Interest"}
            show={true}
          />
          <DeductionsBox text={"Contribution toward ULIP"} show={true} />
          <DeductionsBox
            text={"Contribution toward notified pension fund by MF/UTI"}
            show={true}
          />
          <DeductionsBox text={"Re-payment of housing loan etc"} show={true} />
          <DeductionsBox text={"Tuition fees paid for children"} show={true} />
          <DeductionsBox
            text={"5 Years fixed deposit with PO or Schedule Bank"}
            show={true}
          />
          <DeductionsBox text={"Contribution toward NPF"} show={true} />
          <DeductionsBox
            text={
              "Employee's / Self-employed contribution toward NPS (up to 20%) (u/s 80CCD)"
            }
            show={true}
          />
          <DeductionsBox
            text={"Additional contribution towards NPS [u/s 80CCD(1B)]"}
            show={true}
          />
          <DeductionsBox
            text={"Employer's contribution toward NPS (u/s 80CCD)"}
            show={true}
          />
          <DeductionsBox
            text={"Deposit with Sukanya Samridhi Accounts"}
            show={true}
          />
          {/* <TotalBox text={"Total"} show={true} />
          <DeductionsBox text={""} show={true} /> */}
          <DeductionsBox text={"Any other deductable (u/s 80C)"} show={true} />
          <TotalBox text={"Total"} show={true} />

          <DeductionsBox
            text={"Actual payment towards medical treatment (u/s 80DDB )"}
            show={true}
          />
          <DeductionsBox
            text={
              "Interest payable on loan for residentials house property (u/s 80EEA )"
            }
            show={true}
          />
          <DeductionsBox
            text={
              "Interest payable on loan for purchase of electric vehicles(u/s 80EEB )"
            }
            show={true}
          />
          <DeductionsBox text={"Donations (u/s 80G)"} show={true} />
          <DeductionsBox
            text={
              "Deduction for maintenance / medical treatment of dependent (u/s 80DD)"
            }
            show={true}
          />
          <CheckDeduction text={"Tick if 80DD is claimed"} show={false} />
          <CheckDeduction text={"Tick if severe disability"} show={false} />
          <DeductionsBox
            text={"Interest on loan for higher education (u/s 80E)"}
            show={true}
          />
          <DeductionsBox
            text={"Interest on loan taken for Residential House (u/s 80EE)"}
            show={true}
          />
          <DeductionsBox
            text={"Deduction in case of a person with disability (u/s 80U)"}
            show={true}
          />
          <CheckDeduction text={"Tick if 80U is claimed"} show={false} />
          <CheckDeduction text={"Tick if severe disability"} show={false} />
          <DeductionsBox text={"Interest on deposits(u/s 80TTB)"} show={true} />
          <DeductionsBox
            text={"Contribution to Agnipath Scheme (u/s 80CCH)"}
            show={true}
          />
          <DeductionsBox text={"Any other deductions"} show={true} />
        </Box>
        {/* ////////////////////// */}

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="netTaxableIncome">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Net Taxable Income
              </FormLabel>

              <Input
                name="netTaxableIncome"
                value={cal.netTaxableIncome}
                bg={"#F4F4F4"}
                w={"16rem"}
                type="number"
                disabled
              />
            </Flex>
          </FormControl>
        </Flex>

        {/* ILT BOX */}
        {/* ///////////////////////////// */}
        <ILTBox
          bg={"#F4F4F4"}
          text={"Income Liable to Tax at Normal Rate ---"}
        />
        <ILTBox
          bg={"#FFFFFF"}
          text={"Short Term Capital Gains (Covered u/s 111A) 15%"}
        />
        <ILTBox
          bg={"#F4F4F4"}
          text={"Long Term Capital Gains (Covered u/s 112A) 10%"}
        />
        <ILTBox
          bg={"#FFFFFF"}
          text={"Long Term Capital Gains (Charged to tax @ 20%) 20%"}
        />
        <ILTBox
          bg={"#F4F4F4"}
          text={"Long Term Capital Gains (Charged to tax @ 10%) 10%"}
        />
        <ILTBox
          bg={"#FFFFFF"}
          text={"Winnings from Lottery, Crossword Puzzles, etc) 30%"}
        />
        {/* ///////////////////////////// */}

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="incomeTax">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Income Tax
              </FormLabel>

              <Input
                name="incomeTax"
                value={formData.incomeTax}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="surcharge">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Surcharge
              </FormLabel>

              <Input
                name="surcharge"
                value={formData.surcharge}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="educationCess">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Education Cess
              </FormLabel>

              <Input
                name="educationCess"
                value={formData.educationCess}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="secondaryHigherEducationCess">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Secondary Higher Education Cess
              </FormLabel>

              <Input
                name="secondaryHigherEducationCess"
                value={formData.secondaryHigherEducationCess}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="totalTaxLiability">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Total Tax Liability
              </FormLabel>

              <Input
                name="totalTaxLiability"
                value={formData.totalTaxLiability}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="relief">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Relief
              </FormLabel>

              <Input
                name="relief"
                value={cal.relief}
                onChange={handleChange}
                bg={"#F4F4F4"}
                w={"16rem"}
                type="number"
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#F4F4F4"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="tds">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                TDS/TCS/MAT (AMT) Credit Utilized
              </FormLabel>

              <Input
                name="tds"
                value={cal.tds}
                onChange={handleChange}
                bg={"#FFFFFF"}
                w={"16rem"}
                type="number"
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex bg={"#FFFFFF"} w={"100%"} m={"auto"} p={"0.7rem"}>
          <FormControl id="assessedTax">
            <Flex justifyContent={"space-between"}>
              <FormLabel fontSize={"1.2rem"} fontWeight={"normal"}>
                Assessed Tax
              </FormLabel>

              <Input
                name="assessedTax"
                value={formData.assessedTax}
                bg={"#E0E0E0"}
                w={"16rem"}
                type="number"
                disabled
                fontWeight={"bold"}
              />
            </Flex>
          </FormControl>
        </Flex>
      </Box>

      <Box w={"20rem"} m={"auto"} mt={"0.7rem"} mb={"1rem"}>
        <Button
          color={"#FFFFFF"}
          bg={"#FE6C5F"}
          fontSize={"0.9rem"}
          borderRadius={"0rem"}
          _hover={{
            color: "#FFFFFF",
            bg: "#FE6C5F",
          }}
          onClick={handleClick}
        >
          Calculate
        </Button>
        <Button
          color={"#FFFFFF"}
          bg={"#A0A1A1"}
          ml={"1rem"}
          borderRadius={"0rem"}
          _hover={{
            color: "#FFFFFF",
            bg: "#A0A1A1",
          }}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
    </>
  );
};

export default Individual;
