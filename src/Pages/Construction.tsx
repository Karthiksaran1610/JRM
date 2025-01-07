import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Construction = () => {
  return (
    <>
      <Box
              position="relative"
              w="100%"
              h={{ base: "60vh", md: "80vh" }} // Responsive height
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              bgImage="url('https://media.istockphoto.com/id/1178982949/photo/man-holding-blue-helmet-close-up.jpg?s=612x612&w=0&k=20&c=MyliIMUynBu6lsT8kh_9FvqBKoIUwWGg-iuoNippZPI=')"
              bgSize="cover"
              bgRepeat="no-repeat"
              // position="center"
              mb={20}
              backgroundColor="gray.200" // Fallback color
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
              Construction
            </Text>

            <Text fontSize={{ base: "lg", md: "2xl" }} maxW="600px">
              Explore our Construction Services page to discover our expertise
              in delivering high-quality, innovative, and sustainable
              construction solutions.
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
            Building your dream home is a truly exciting prospect, but it can
            also be daunting.{"\n"}
            With extensive experience under our belt, we know a thing or two
            about the process.
          </Text>
          <Text
            fontWeight="light"
            fontSize={{ base: "md", md: "lg" }}
            whiteSpace="pre-wrap"
            mb={4}
            color="gray.500"
          >
            Let us support you through every step. Our tailored service
            encompasses everything from planning{"\n"}
            permission and engaging an architect, right through to the
            construction phase itself.
          </Text>
          <Text
            fontWeight="light"
            fontSize={{ base: "md", md: "lg" }}
            whiteSpace="pre-wrap"
            color="gray.500"
            mb={50}
          >
            Building your dream home is a truly exciting prospect, but it can
            also be daunting.{"\n"}
            With extensive experience under our belt, we know a thing or two
            about the process.
          </Text>
        </Box>
      </Box>

      {/* Construction Models */}
      <Box>
        <Heading
          textAlign="center"
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={20}
          fontStyle="inherit"
          fontWeight="bold"
        >
          Construction Models
        </Heading>
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
                src="https://thomassattlerhomes.com/wp-content/uploads/2023/05/Bemis-Exterior-Rendering-Final.jpg"
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
                Custom Home Design and Construction
              </Heading>
              <Text color="gray.600">
                "We specialize in designing and building custom residential
                homes that perfectly match your vision and lifestyle. Our expert
                team works closely with clients to create personalized,
                high-quality homes that reflect unique tastes and preferences.
                Whether you're looking for a modern, traditional, or luxury
                home, we ensure every detail is crafted to exceed your
                expectations. With a focus on craftsmanship and customer
                satisfaction, we provide a seamless experience from design to
                completion, delivering results that truly meet your needs and
                desires."
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Luxury Villas */}
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
              Luxury Residential Homes
            </Heading>
            <Text color="gray.600">
              "We specialize in designing and building custom residential homes
              that perfectly match your vision and lifestyle. Our expert team
              works closely with clients to create personalized, high-quality
              homes that reflect unique tastes and preferences. Whether you're
              looking for a modern, traditional, or luxury home, we ensure every
              detail is crafted to exceed your expectations. With a focus on
              craftsmanship and customer satisfaction, we provide a seamless
              experience from design to completion, delivering results that
              truly meet your needs and desires."
            </Text>
          </Box>

          {/* Image Section */}
          <Box
            position="relative"
            overflow="hidden"
            width={{ base: "100%", md: "500px" }} // Full width on smaller screens, fixed width on larger ones
          >
            <Image
              src="https://www.ikonmarket.com/assets/images/marketing-articles/luxury-home.jpg"
              alt="Residential Construction"
              aspectRatio={4 / 3}
              height="auto"
            />
          </Box>
        </Flex>
      </Box>

      {/* Smart Home */}
      <Box padding={{ base: "10px", md: "20px" }}>
        <Flex
          direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on larger screens
          gap={6}
          justify="flex-start"
          mb={10}
        >
          {/* Image Section */}
          <Box
            position="relative"
            overflow="hidden"
            width={{ base: "100%", md: "500px" }}
          >
            <Image
              src="https://www.homeautomat.in/images/ha.webp"
              alt="Residential Construction"
              aspectRatio={4 / 3}
              height="auto"
            />
          </Box>

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
              Smart Home Construction
            </Heading>
            <Text color="gray.600">
              "We specialize in designing and building custom residential homes
              that perfectly match your vision and lifestyle. Our expert team
              works closely with clients to create personalized, high-quality
              homes that reflect unique tastes and preferences. Whether you're
              looking for a modern, traditional, or luxury home, we ensure every
              detail is crafted to exceed your expectations. With a focus on
              craftsmanship and customer satisfaction, we provide a seamless
              experience from design to completion, delivering results that
              truly meet your needs and desires."
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Construction Images */}
      <Box padding={{ base: "10px", md: "20px" }}>
        <SimpleGrid columns={{ base: 2, md: 4 }} padding={6}>
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7_ry3_ZZ34Av1ILCW4s4GqbnQuANY9GReQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWclKFa4R3p5dppVVSbgSCeQ9uNRIpuiOTwQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3m0tBxq6H8cQr4V07Agrgbl6XQUvfY65-A&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz84-_nFxEihFpWJztwDAPkA67b5o_3rt59A&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaggnElVft16w68juQ2GWhvVZWDZe6l-gXw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86D5gzEmBx-KcppwwkBxP1m4I0dcVsBVttA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90-70mYEaORQdXVTQgOyIh3EVekjZs1M5pg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_m9kMDDJp1_ysLvsgH1z4xBuPdslKzAMYw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuublebL-qGjOJeJEWmJlHcD38ED36HZJ8IQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBbRPRNO53y6GgJ1BDiO7gozR6SRLmz4cOw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjJhR5_QcWQ3PpQt6P2OG6RAd5rqGRJI8IQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFpOjme6zoU0ZW2OYm_p9fOAMWyHKpBAPLA&s",
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

export default Construction;
