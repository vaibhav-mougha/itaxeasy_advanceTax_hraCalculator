import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
  TableContainer,
  Text,
} from "@chakra-ui/react";

const AdvanceTaxTable = () => {
  return (
    <>
      <Box>
        <Text
          mt={"1rem"}
          textAlign={"center"}
          fontSize={"0.8rem"}
          fontWeight={"bold"}
        >
          Advance Tax liability
        </Text>
        <TableContainer
          border={"1px solid gray"}
          w={"95%"}
          m={"auto"}
          mt={"1rem"}
        >
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th> Advance Tax liability</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Advance tax payable upto June 15, 2023 (Cumulative)</Td>
                <Td>00</Td>
              </Tr>
              <Tr>
                <Td>
                  Advance tax payable upto September 15, 2023 (Cumulative)
                </Td>
                <Td>00</Td>
              </Tr>
              <Tr>
                <Td>Advance tax payable upto December 15, 2023 (Cumulative)</Td>
                <Td>00</Td>
              </Tr>

              <Tr>
                <Td>Advance tax payable upto March 15, 2024 (Cumulative)</Td>
                <Td>00</Td>
              </Tr>

              <Tr>
                <Td>Advance tax payable upto March 31, 2024 (Cumulative)</Td>
                <Td>00</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Text
          mt={"1rem"}
          textAlign={"center"}
          fontSize={"0.8rem"}
          fontWeight={"bold"}
        >
          Advance Tax Installments
        </Text>
        <TableContainer
          border={"1px solid gray"}
          w={"95%"}
          m={"auto"}
          mt={"1rem"}
        >
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th> Installment</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  First installment payable for the period April 1, 2023 to June
                  15, 2023
                </Td>
                <Td>00</Td>
              </Tr>
              <Tr>
                <Td>
                  Second installment payable for the period June 16, 2023 to
                  September 15, 2023
                </Td>
                <Td>00</Td>
              </Tr>
              <Tr>
                <Td>
                  Third installment payable for the period September 16, 2023 to
                  December 15, 2023
                </Td>
                <Td>00</Td>
              </Tr>

              <Tr>
                <Td>
                  Fourth installment payable for the period December 16, 2023 to
                  March 15, 2024
                </Td>
                <Td>00</Td>
              </Tr>

              <Tr>
                <Td>
                  Last installment payable for the period March 16, 2024 to
                  March 31, 2024
                </Td>
                <Td>00</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AdvanceTaxTable;
