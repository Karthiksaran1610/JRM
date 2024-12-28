import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Circle,
  VStack,
  TimelineRoot,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} from "@chakra-ui/react";
import { px } from "framer-motion";
import { LuCheck, LuPackage, LuShip } from "react-icons/lu";

const About = () => {
  return (
    <Box p={8}>
      {/* Main Heading */}
      <Heading as="h1" size="5xl" textAlign="center" mb={6}>
        "Building Dreams, Crafting Realities"
      </Heading>

      {/* SEO Content */}
      <Text fontSize="lg" textAlign="center" mb={100}>
        At JRM Construction, we specialize in world-class construction,
        innovative renovations, architectural excellence, and bespoke designing
        services. With a legacy of trust and quality, we transform spaces into
        masterpieces.
      </Text>

      {/* Experience Section */}
      <Box textAlign="center" mb={100}>
        {/* Centered Heading */}
        <Heading fontSize="2xl" mb={10} fontFamily="cursive">
          Why Choose JRM?
        </Heading>

        {/* Flex Container for Circles */}
        <Flex justify="center" gap={10}>
          {/* Circle 1 */}
          <Circle size="200px" bg="gray.200" textAlign="center" shadow="md">
            <VStack>
              <Image
                src="https://img.freepik.com/free-vector/14th-anniversary-golden-edition_1017-4050.jpg"
                alt="Image 1"
                boxSize="100px" // Adjusts image size within the circle
                objectFit="cover"
              />
            </VStack>
          </Circle>

          {/* Circle 2 */}
          <Circle size="200px" bg="gray.200" textAlign="center" shadow="md">
            <VStack>
              <Image
                src="https://via.placeholder.com/100"
                alt="Image 2"
                boxSize="100px"
                objectFit="cover"
              />
            </VStack>
          </Circle>

          {/* Circle 3 */}
          <Circle size="200px" bg="gray.200" textAlign="center" shadow="md">
            <VStack>
              <Image
                src="https://via.placeholder.com/100"
                alt="Image 3"
                boxSize="100px"
                objectFit="cover"
              />
            </VStack>
          </Circle>
        </Flex>
      </Box>

      {/* Founder Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={8}>
        <Circle size="300px" bg="gray.100" shadow="lg">
          <Image
            src="	https://jrmconstruction.in/assets/images/rebecca.jpg"
            alt="Founder of JRM Construction"
            boxSize="280px"
            borderRadius="full"
          />
        </Circle>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Rebecca Malsawmi J
          </Heading>
          <Text fontSize="md">
            Rebecca Malsawmi J is a distinguished construction professional and
            pioneering woman entrepreneur in the construction-tech sector, with
            over 14 years of experience. As the founder of JRM Construction, she
            has positioned the company as a top builder in Chennai, renowned for
            delivering ultra-premium projects along the East Coast Road (ECR).
            Her exceptional leadership and project management skills have earned
            her widespread respect, allowing JRM to achieve the status of the
            best construction company in the region within just a decade. Under
            Rebecca’s guidance, JRM Construction has successfully completed a
            diverse portfolio of projects, including the best individual villas
            and exclusive luxury residential properties featuring top
            architectural designs. Her commitment to quality and efficiency has
            fostered a loyal clientele, solidifying JRM's reputation for turnkey
            projects. As a forward-thinking leader, she integrates the latest
            innovations into her work, ensuring that each client’s vision is
            meticulously realized, making her a key figure in the real estate
            landscape of Chennai.
          </Text>
        </Box>
      </Flex>

      {/*ISO Content*/}
      <Flex
        marginTop="100px"
        justifyContent="center"
        alignItems="center"
        direction="column"
        textAlign="center"
      >
        <Box>
          <Image
            src="https://i.pinimg.com/736x/98/c5/f0/98c5f0d628cca6d334b8ee3d311f42be.jpg"
            alt="Dan Abramov"
            borderRadius="20px"
            boxSize="280px"
            mx="auto"
          />

          <Heading fontSize="3xl" marginTop="20px">
            ISO AWARD 2021
          </Heading>

          <Text marginTop="20px" mx="20px" textStyle="md">
            "ISO certification demonstrates a company’s commitment to quality,
            efficiency, and customer satisfaction. It ensures compliance with
            internationally recognized standards, boosting credibility and
            trust. Achieving ISO certification enhances operational processes
            and showcases dedication to continuous improvement."
          </Text>
        </Box>
      </Flex>

      {/* Our Process */}
      <Flex direction="column" align="center" mt="70px" mb="50px">
        {/* Heading */}
        <Heading as="h2" size="3xl" mb={50}>
          Our Process
        </Heading>

        {/* Timeline */}
        <TimelineRoot maxW="400px" textAlign="center">
          <TimelineItem>
            <TimelineConnector>
              <LuShip />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle mb={10} fontSize="md">
                Initial Consultation
              </TimelineTitle>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector>
              <LuCheck />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle mb={10} fontSize="md">
                Design & Planning
              </TimelineTitle>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector>
              <LuPackage />
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>Construction Phase</TimelineTitle>
            </TimelineContent>
          </TimelineItem>
        </TimelineRoot>
      </Flex>
    </Box>
  );
};

export default About;
