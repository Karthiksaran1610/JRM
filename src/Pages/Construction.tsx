import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Construction = () => {
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
        bgImage="url('https://media.istockphoto.com/id/1178982949/photo/man-holding-blue-helmet-close-up.jpg?s=612x612&w=0&k=20&c=MyliIMUynBu6lsT8kh_9FvqBKoIUwWGg-iuoNippZPI=')"
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
            direction={{ base: "column", md: "row" }}
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
              textAlign={{ base: "center", md: "left" }}
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
          direction={{ base: "column", md: "row" }}
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
            width={{ base: "100%", md: "500px" }}
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
          direction={{ base: "column", md: "row" }}
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
            "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150749.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/movie-night-by-pool-whole-family_1268-31098.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/luxury-architecture-exterior-design_23-2151920952.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-model-house-building_23-2150761008.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004030.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/facade-modern-house_1268-24725.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004027.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/render-architectural-matrix-stunning-villa-background_1409-5190.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/house-with-large-roof-balcony-with-tree-middle_1340-35839.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
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
