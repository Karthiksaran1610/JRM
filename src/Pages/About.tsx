import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <Box
        position="relative"
        w="100%"
        h={{ base: "60vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        // bgImage="url('https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid')"
        bgSize="cover"
        bgRepeat="no-repeat"
        backgroundColor="gray.800"
      >
        <Box
          textAlign="center"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" mb={4}>
            Sculpting Your Dream Home
          </Text>
          <Text
            fontWeight="bold"
            fontSize={{ base: "4xl", md: "2xl" }}
            textAlign="center"
            maxW="600px"
            mx="auto" // Ensures the text container itself is centered
          >
            With JRM Construction
          </Text>
        </Box>
      </Box>

      <Box p={8}>
        {/* Main Heading */}
        <Heading
          as="h1"
          size="5xl"
          textAlign="center"
          mb={6}
          fontWeight="lighter"
        >
          "Building Dreams, Crafting Realities"
        </Heading>

        {/* SEO Content */}
        <Text
          fontSize="lg"
          textAlign="center"
          fontWeight="lighter"
          maxW="800px" // Set maximum width to ensure the text doesn't stretch too wide
          mx="auto" // Centers the text horizontally
          wordBreak="break-word" // Ensure long words break to fit the container
        >
          At JRM Construction, we specialize in world-class construction,
          innovative renovations, architectural excellence, and bespoke
          designing services. With a legacy of trust and quality, we transform
          spaces into masterpieces.
        </Text>

        {/* Experience Section */}
        <Flex
          direction="row" // Display items horizontally
          align="center"
          justify="space-between" // Space between each stat box
          gap={10} // Adds space between each stat box
          minH="60vh" // Full height of the page
          px={10} // Horizontal padding for spacing on both sides
        >
          <Box textAlign="center">
            <Text fontSize="4xl" fontWeight="bold">
              Years of Experience
            </Text>
            <Text fontSize="6xl" color="teal.500">
              <CountUp start={0} end={15} duration={3} />
              <span>+</span>
            </Text>
          </Box>

          <Box textAlign="center">
            <Text fontSize="4xl" fontWeight="bold">
              Employees
            </Text>
            <Text fontSize="6xl" color="teal.500">
              <CountUp start={0} end={150} duration={3} />
              <span>+</span>
            </Text>
          </Box>

          <Box textAlign="center">
            <Text fontSize="4xl" fontWeight="bold">
              Clients
            </Text>
            <Text fontSize="6xl" color="teal.500">
              <CountUp start={0} end={200} duration={3} />
              <span>+</span>
            </Text>
          </Box>

          <Box textAlign="center">
            <Text fontSize="4xl" fontWeight="bold">
              Locations
            </Text>
            <Text fontSize="6xl" color="teal.500">
              <CountUp start={0} end={21} duration={3} />
              <span>+</span>
            </Text>
          </Box>
        </Flex>

        {/* Awards and Certifications */}

        <Box>
          <Heading
            textAlign="center"
            fontSize={{ base: "4xl", md: "4xl" }}
            mb={20}
            fontStyle="inherit"
            fontWeight="lighter"
          >
            Awards & Certifications
          </Heading>

          {/*ISO Certificate*/}
          <Box padding={{ base: "10px", md: "20px" }}>
            <Flex
              direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on larger screens
              gap={6} // Gap between text and image
              justify="flex-start"
              mb={10}
            >
              {/* Image Section */}
              <Box
                position="relative"
                overflow="hidden"
                width={{ base: "100%", md: "500px" }} // Full width on smaller screens, fixed width on larger ones
              >
                <Image
                  src="https://img.freepik.com/free-vector/iso-certification-concept-illustration_114360-6017.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                  alt="Residential Construction"
                  aspectRatio={4 / 3}
                  height="auto"
                />
              </Box>

              {/* Text Section */}
              <Box
                flex="1"
                padding={{ base: "10px", md: "20px" }}
                textAlign={{ base: "center", md: "left" }} // Center align text on small screens, left align on larger ones
              >
                <Heading
                  as="h3"
                  size={{ base: "xl", md: "4xl" }}
                  fontWeight="lighter"
                  mb={4}
                >
                  ISO 9001 : 2015
                </Heading>
                <Text color="gray.600">
                  ISO 9001:2015 Certification is a globally recognized standard
                  for Quality Management Systems (QMS). It ensures organizations
                  consistently meet customer and regulatory requirements. The
                  certification improves customer satisfaction, operational
                  efficiency, and fosters continuous improvement. It
                  demonstrates a company’s commitment to quality and enhances
                  brand reputation. The certification process involves a
                  thorough audit to ensure compliance with ISO standards.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/*Best Architect Award*/}
        <Box padding={{ base: "10px", md: "20px" }}>
          <Flex
            direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on larger screens
            gap={6}
            justify="flex-start"
            mb={10}
          >
            {/* Text Section */}
            <Box
              flex="1"
              padding={{ base: "10px", md: "20px" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading
                as="h3"
                size={{ base: "xl", md: "4xl" }}
                fontWeight="lighter"
                mb={4}
              >
                Top 10 Architect firm in chennai
              </Heading>
              <Text color="gray.600">
                JRM Construction, a leading construction company in Chennai, was
                honored with the prestigious Top 10 Architect Firm in Chennai
                Award in 2014, presented by Silicon India. This award recognizes
                the company’s excellence in architectural design, innovation,
                and quality in the construction industry. The recognition
                highlights JRM Construction’s commitment to delivering
                exceptional residential building services with a focus on modern
                design and sustainable practices. Winning this award has further
                strengthened the company’s reputation as a trusted name in the
                Chennai construction sector, ensuring client satisfaction and
                fostering long-term success in the industry.
              </Text>
            </Box>

            <Box
              position="relative"
              overflow="hidden"
              width={{ base: "100%", md: "500px" }} // Full width on smaller screens, fixed width on larger ones
            >
              <Image
                src="https://img.freepik.com/free-psd/modern-architecture-design-template_23-2149566944.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Residential Construction"
                aspectRatio={4 / 3}
                height="auto"
              />
            </Box>
          </Flex>

          {/*Best Contractor Award*/}
          <Box padding={{ base: "10px", md: "20px" }}>
            <Flex
              direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on larger screens
              gap={6} // Gap between text and image
              justify="flex-start"
              mb={10}
            >
              <Box
                position="relative"
                overflow="hidden"
                width={{ base: "100%", md: "500px" }} // Full width on smaller screens, fixed width on larger ones
              >
                <Image
                  src="https://img.freepik.com/free-vector/iso-certification-concept-illustration_114360-6017.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                  alt="Residential Construction"
                  aspectRatio={4 / 3}
                  height="auto"
                />
              </Box>

              <Box
                flex="1"
                padding={{ base: "10px", md: "20px" }}
                textAlign={{ base: "center", md: "left" }} // Center align text on small screens, left align on larger ones
              >
                <Heading
                  as="h3"
                  size={{ base: "xl", md: "4xl" }}
                  fontWeight="lighter"
                  mb={4}
                  mt={6}
                >
                  Best Residential Construction Contractor in chennai
                </Heading>
                <Text color="gray.600">
                  JRM Construction was honored with the Best Residential
                  Construction Contractor in Chennai by Indian Glory,
                  recognizing the company's outstanding contribution to the
                  residential construction industry. This prestigious award
                  highlights JRM Construction’s commitment to excellence in
                  delivering high-quality residential buildings, with a focus on
                  craftsmanship, innovation, and customer satisfaction. Known
                  for its attention to detail and timely project delivery, JRM
                  Construction has earned a reputation as one of the leading
                  contractors in Chennai. The award further strengthens the
                  company’s position as a trusted and reliable choice for
                  residential construction projects.
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Client Testinominals... */}
          <Heading
            textAlign="center"
            fontSize={{ base: "4xl", md: "4xl" }}
            mb={20}
            fontStyle="inherit"
            fontWeight="lighter"
          >
            Client Testimonials
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default About;
