import { Box, Heading, Text, Flex, Image, Stack, HStack } from "@chakra-ui/react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { Rating } from "@/Components/ui/rating";
import { Avatar } from "@/Components/ui/avatar";

const About = () => {
  const settings = {
    dots: true,          // Enable dots for navigation
    infinite: true,      // Infinite loop scrolling
    speed: 500,          // Animation speed
    slidesToShow: 3,     // Number of slides to show at a time
    slidesToScroll: 1,   // Number of slides to scroll at a time
  };
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

        {/* Awards and Recognization */}

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
                  "We specialize in designing and building custom residential
                  homes that perfectly match your vision and lifestyle. Our
                  expert team works closely with clients to create personalized,
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
                Best Architecture Award 2019
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

            {/* Image Section */}
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

          <Slider {...settings}>
      <Stack maxW="320px" gap="4">
        <Rating colorPalette="orange" readOnly size="xs" defaultValue={5} />
        <Text>
          Sage is a great software engineer. He is very professional and
          knowledgeable.
        </Text>
        <HStack gap="4">
          <Avatar
            name="Matthew Jones"
            src="https://randomuser.me/api/portraits/men/70.jpg"
          />
          <Stack textStyle="sm" gap="0">
            <Text fontWeight="medium">Matthew Jones</Text>
            <Text color="fg.muted">CTO, Company</Text>
          </Stack>
        </HStack>
      </Stack>

      {/* Duplicate the same Stack for additional slides */}
      <Stack maxW="320px" gap="4">
        <Rating colorPalette="orange" readOnly size="xs" defaultValue={4} />
        <Text>
          Alex is an amazing team leader. He is very supportive and motivating.
        </Text>
        <HStack gap="4">
          <Avatar
            name="Alex Smith"
            src="https://randomuser.me/api/portraits/men/60.jpg"
          />
          <Stack textStyle="sm" gap="0">
            <Text fontWeight="medium">Alex Smith</Text>
            <Text color="fg.muted">Team Lead, Company</Text>
          </Stack>
        </HStack>
      </Stack>

      
    </Slider>
        </Box>
      </Box>
    </>
  );
};

export default About;
