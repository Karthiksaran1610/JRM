import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Interior = () => {
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
        bgImage="url('https://img.freepik.com/free-photo/living-room_1048-2485.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid')"
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
              Interior Design
            </Text>

            <Text fontSize={{ base: "lg", md: "2xl" }} maxW="600px">
              Interior Design is the art of transforming indoor spaces into
              functional, beautiful environments that reflect personal style and
              enhance the overall living experience.
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
            Designing your perfect interior is an exciting journey, but it
            requires meticulous planning and expertise.{"\n"}
            With years of experience, we master the details of interior design
            to create spaces that reflect your style and meet your needs.
          </Text>
          <Text
            fontWeight="light"
            fontSize={{ base: "md", md: "lg" }}
            whiteSpace="pre-wrap"
            mb={4}
            color="gray.500"
          >
            Let us guide you through every stage of your interior design
            journey.
            {"\n"}
            Our tailored service covers everything from initial concepts and
            space planning to the final touches, ensuring your vision becomes a
            reality.
          </Text>
          <Text
            fontWeight="light"
            fontSize={{ base: "md", md: "lg" }}
            whiteSpace="pre-wrap"
            color="gray.500"
            mb={50}
          >
            Embarking on your interior design project is an exciting adventure,
            but it can also feel overwhelming.{"\n"}
            With our years of expertise, we simplify the process, bringing your
            vision to life with attention to detail and creativity.
          </Text>
        </Box>
      </Box>

      {/*Zoom in Images */}
      <Box px={4}>
        <Grid
          templateRows="repeat(2, auto)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          mb={10}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Box bg="gray.200" position="relative" overflow="hidden" h="100%">
              <Image
                src="https://img.freepik.com/free-photo/chair-with-blanket-giant-clock_1048-2486.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Image 1"
                objectFit="cover"
                objectPosition="center"
                w="100%"
                h="100%"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box bg="gray.200">
              <Image
                src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2234.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Image 2"
                objectFit="cover"
                objectPosition="center"
                h="100%"
                w="100%"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box bg="gray.200">
              <Image
                src="https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Image 3"
                objectFit="cover"
                objectPosition="center"
                h="100%"
                w="100%"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={4}>
            <Box bg="gray.200" h="300px">
              <Image
                src="https://img.freepik.com/free-photo/waiting-room-medical-center_188544-27914.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Kitchen Interior"
                objectFit="cover"
                objectPosition="center"
                h="100%"
                w="100%"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Interior Themes*/}
      <Center width="100%" minHeight="100vh">
        <Box width="80%" maxWidth="1200px">
          <Heading
            mb={6}
            textAlign="center"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="lighter"
          >
            Interior Themes
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={6}
            justifyItems="center"
          >
            {/* First Row */}
            <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
              <Image
                src="https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Concept Design"
                borderRadius="md"
                height="250px"
                objectFit="cover"
              />
              <Heading fontSize="xl" fontWeight="lighter" mt={4}>
                Customized Interiors
              </Heading>
              <Text mt={2} fontWeight="lighter">
                Customized Interiors start by understanding your vision and
                tailoring every detail to create a space that perfectly reflects
                your style and needs.
              </Text>
            </Box>
            <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
              <Image
                src="https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa-lamp_105762-2255.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Construction"
                borderRadius="md"
                height="250px"
                objectFit="cover"
              />
              <Heading size="md" mt={4} fontSize="xl" fontWeight="lighter">
                Modern Interiors
              </Heading>
              <Text mt={2} fontWeight="lighter">
                Modern Interiors embrace clean lines, minimalism, and
                functionality, creating a sleek and contemporary living space.
              </Text>
            </Box>
            <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
              <Image
                src="https://img.freepik.com/free-photo/hotel-interior_144627-27370.jpg?ga=GA1.1.1410370334.1734773987"
                alt="Final Inspection"
                borderRadius="md"
                height="250px"
                objectFit="cover"
              />
              <Heading size="md" mt={4} fontSize="xl" fontWeight="lighter">
                Traditional Interiors
              </Heading>
              <Text mt={2} fontWeight="lighter">
                Traditional Interiors blend timeless elegance with classic
                design elements, creating a warm, inviting space filled with
                rich textures and detailed craftsmanship.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Center>

      {/* Architecture Images */}
      <Box padding={{ base: "10px", md: "20px" }}>
        <SimpleGrid columns={{ base: 2, md: 4 }} padding={6}>
          {[
            "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/empty-flat-interrior-with-elements-decoration_1303-23909.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-design-chandelier_105762-2230.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2015.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-design-chandelier_105762-2226.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/life-style_1122-1801.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895587.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895578.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/interior-shot-modern-house-kitchen-with-large-windows_181624-24368.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-vector/apartment-living-room-open-office-lounge-area-interior-realistic-with-coffee-table-near-sofa-paintings-brick-wall-bookshelves-hanging-from-ceiling-vintage-lamps-illustration_1441-3447.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-contemporary-living-room-interior-modern-furniture_1048-9856.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/spacious-room-with-big-window_1203-1490.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
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

export default Interior;
