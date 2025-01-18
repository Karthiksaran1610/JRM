import { Box, Grid, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Architecture = () => {
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
        bgImage="url('https://img.freepik.com/free-photo/building_1127-3192.jpg?t=st=1736225455~exp=1736229055~hmac=93fd481752478c3c91205b06df9aba7d6e1f701150e57d6bcf0486022d32c525&w=996')"
        bgSize="cover"
        bgRepeat="no-repeat"
        mb={20}
        backgroundColor="gray.200"
      >
        {/* Motion Div for the Text */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 2, // Slower animation speed
            damping: 20, // Smoothness of the motion
          }}
        >
          <Box
            textAlign="center"
            color="white"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            <Text
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              mb={4}
            >
              Architecture
            </Text>

            <Text fontSize={{ base: "lg", md: "2xl" }} maxW="600px">
              Architecture is the creative and technical process of designing
              buildings and spaces that enhance human living and environment.
            </Text>
          </Box>
        </motion.div>
      </Box>

      <Box>
        <Box w="100%" p={4} textAlign="center">
          <Text
            fontWeight="light"
            fontSize={{ base: "xl", md: "2xl" }}
            whiteSpace="pre-wrap"
            mb={4}
          >
            Designing your ideal space is an exciting journey, but it requires
            careful planning and expertise.{"\n"}
            With years of experience in the field, we understand the intricacies
            of architectural design, ensuring every detail aligns with your
            vision.
          </Text>
          <Text
            fontWeight="light"
            fontSize={{ base: "md", md: "lg" }}
            whiteSpace="pre-wrap"
            mb={4}
            color="gray.500"
          >
            Let us guide you through every stage of your architectural journey.
            {"\n"}
            Our personalized service covers everything from initial design
            concepts and architectural planning to the final execution of your
            dream space.
          </Text>
          <Text
            fontWeight="light"
            fontSize={{ base: "md", md: "lg" }}
            whiteSpace="pre-wrap"
            color="gray.500"
            mb={50}
          >
            Embarking on your architectural project is an exciting adventure,
            but it can also feel overwhelming.{"\n"}
            With years of expertise, we’re here to simplify the process and
            bring your vision to life with precision and care.
          </Text>
        </Box>
      </Box>

      {/* Architecture Process*/}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="auto"
        p={5}
      >
        <Box width="100%" maxWidth="1200px">
          <Heading
            mb={6}
            textAlign="center"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="lighter"
          >
            Our Architecture Process
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ base: 4, md: 6 }}
            justifyItems="center"
          >
            {/* First Row */}
            <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
              <Image
                src="https://img.freepik.com/free-photo/architects-working-project_53876-46878.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Concept Design"
                borderRadius="md"
                height="250px"
                objectFit="cover"
              />
              <Heading fontSize="xl" fontWeight="lighter" mt={4}>
                Pre Design
              </Heading>
              <Text mt={2} fontWeight="lighter">
                Pre-design is where we lay the groundwork by understanding your
                vision, evaluating the site, and ensuring the project is set for
                success.
              </Text>
            </Box>
            <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
              <Image
                src="https://img.freepik.com/free-photo/architectural-blueprints_1359-490.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Construction"
                borderRadius="md"
                height="250px"
                objectFit="cover"
              />
              <Heading size="md" mt={4} fontSize="xl" fontWeight="lighter">
                Schematic Design
              </Heading>
              <Text mt={2} fontWeight="lighter">
                Schematic Design is the phase where the approved concepts are
                translated into detailed drawings, setting the foundation for
                construction.
              </Text>
            </Box>
            <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
              <Image
                src="https://img.freepik.com/free-photo/fashion-graphic-interior-exterior-design-concept_53876-123743.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Final Inspection"
                borderRadius="md"
                height="250px"
                objectFit="cover"
              />
              <Heading size="md" mt={4} fontSize="xl" fontWeight="lighter">
                Design Development
              </Heading>
              <Text mt={2} fontWeight="lighter">
                Design Development is the phase where the design is refined, and
                a thorough inspection ensures all standards and codes are met
                before moving forward.
              </Text>
            </Box>

            {/* Second Row */}
            <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
              <Image
                src="https://img.freepik.com/free-photo/site-engineer-construction-site_53876-42833.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Planning"
                borderRadius="md"
                height="250px"
                objectFit="cover"
              />
              <Heading size="md" mt={4} fontSize="xl" fontWeight="lighter">
                Construction Document
              </Heading>
              <Text mt={2} fontWeight="lighter">
                Construction Documents provide detailed planning and
                specifications for the architectural and construction phases,
                ensuring a smooth building process.
              </Text>
            </Box>
            <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
              <Image
                src="https://img.freepik.com/free-photo/corporate-clients-evaluating-investment-opportunity-real-estate_482257-90788.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Design Finalization"
                borderRadius="md"
                height="250px"
                objectFit="cover"
              />
              <Heading size="md" mt={4} fontSize="xl" fontWeight="lighter">
                Construction Administration
              </Heading>
              <Text mt={2} fontWeight="lighter">
                Construction Administration ensures final approval and
                optimization of the design, overseeing the project to meet all
                specifications during construction.
              </Text>
            </Box>
            <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
              <Image
                src="https://img.freepik.com/free-vector/businessmen-run-their-business-with-broad-vision-choose-right-channels-lead-company-success_24797-2310.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Completion"
                borderRadius="md"
                height="250px"
                objectFit="cover"
              />
              <Heading size="md" mt={4} fontSize="xl" fontWeight="lighter">
                Project Completion
              </Heading>
              <Text mt={2} fontWeight="lighter">
                Project Completion marks the phase where the building is ready
                for use after final adjustments and handover.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Architecture Images */}
      <Box padding={{ base: "10px", md: "20px" }}>
        <SimpleGrid columns={{ base: 2, md: 4 }} padding={6}>
          {[
            "https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003979.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/view-3d-house-model_23-2150761032.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-psd/close-up-house-isolated_23-2151616349.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694078.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-psd/3d-house-property-illustration_23-2151682308.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-vector/modern-house-pack_23-2147778067.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799727.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-vector/collection-modern-realistic-houses_23-2147785740.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-rendering-isometric-house-model_23-2150799795.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-vector/modern-flat-residential-house-illustration-set_1344-248.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/house-3d-rendering-design_23-2150505837.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-house-plans_1048-4704.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
          ].map((src, index) => (
            <Box
              key={index}
              overflow="hidden"
              position="relative"
              padding="5px"
              _hover={{
                boxShadow: "xl",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <Image
                src={src}
                alt={`Construction Image ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Architecture;
