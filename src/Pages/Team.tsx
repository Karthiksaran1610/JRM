import { Box, Circle, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Team = () => {
  return (
    <Box>
      {/* Heading Image Section */}
      <Heading as="h1" size="4xl" textAlign="center" m="10px" mb="20px">
        Our Team
      </Heading>
      <Image
        src="https://plus.unsplash.com/premium_photo-1661310027237-8f4ed9ebc6ee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Team Image"
        height="700px"
        width="1500px"
        mb="30px"
      />

      {/* Team Members */}
      <Box textAlign={{ base: "center", md: "left" }} m="20px">
        <Flex direction={{ base: "column", md: "row" }} align="center" gap={8}>
          {/* Member 1 */}
          <Circle size="300px" bg="gray.100" shadow="lg">
            <Image
              src="	https://jrmconstruction.in/assets/images/rebecca.jpg"
              alt="Founder of JRM Construction"
              boxSize="280px"
              borderRadius="full"
            />
          </Circle>

          <Box>
            <Heading as="h2" size="lg">
              Rebecca Malsawmi J
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={4}>
              Founder
            </Text>
            <Text fontSize="md">
              Rebecca Malsawmi J is a distinguished construction professional
              and pioneering woman entrepreneur in the construction-tech sector,
              with over 14 years of experience. As the founder of JRM
              Construction, she has positioned the company as a top builder in
              Chennai, renowned for delivering ultra-premium projects along the
              East Coast Road (ECR).
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Member 2 */}
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={8}>
        <Box textAlign={{ base: "center", md: "left" }} m="20px">
          <Heading as="h2" size="lg" ml="10px">
            Manikandan
          </Heading>
          <Text fontSize="sm" color="gray.500" mb={4} ml="10px">
            General Manager
          </Text>
          <Text fontSize="md" ml="10px">
            Manikandan is the General Manager of JRM Construction. With
            extensive experience in managing large-scale projects, he plays a
            pivotal role in overseeing operations, ensuring efficiency, and
            maintaining high-quality standards. His strategic leadership and
            commitment to excellence contribute significantly to JRM's
            reputation as a leading construction company.
          </Text>
        </Box>

        <Circle size="300px" bg="gray.100" shadow="lg">
          <Image
            src="https://jrmconstruction.in/assets/images/team-1.jpg"
            alt="Founder of JRM Construction"
            boxSize="280px"
            borderRadius="full"
          />
        </Circle>
      </Flex>
    </Box>
  );
};

export default Team;
