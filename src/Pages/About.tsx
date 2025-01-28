import { Avatar } from "@/Components/ui/avatar";
import { Rating } from "@/Components/ui/rating";
import { Box, Heading, Text, Flex, Image, Grid, Stack } from "@chakra-ui/react";
import CountUp from "react-countup";

const About = () => {
  const testimonials = [
    {
      name: "Ashma Fathima",

      text: "Their expertise and guidance throught the process made the entire journey seamless and stress free. JRM Construction team communication was outstanding, keeping me informed every steps.",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjWgO-wfiqdxOncog1ocItokVKFcSXrgQQuTUvv9jaP0gFVu4iWT=w75-h75-p-rp-mo-br100",
      rating: 5,
    },
    {
      name: "muruga nantham",

      text: "I constructed my villa with JRM Construction and my dream house has came out very well. I thank JRM team.",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJpAuuAoCR0OgQcsVKw4Z3DJSmQgGY1zMbUj9YYsWrbaDKtEg=w75-h75-p-rp-mo-br100",
      rating: 4.5,
    },
    {
      name: "Sreenath V",

      text: "The attention to detail and quality of materials used are exceptional. We're so grateful to have chosen JRM Construction for our project.",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjUkGWA9bwaC6h7ruhA5OECxhijEFkpsL6vT7R-jb73N1zySTj0d=w75-h75-p-rp-mo-br100",
      rating: 5,
    },
    {
      name: "Swedha Jayaraman",

      text: "We've never seen a construction company so dedicated to customer satisfaction.We  recommend JRM Construction stonly for your House construction. JRM Construction truly goes above and beyond!",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjWynyhNaeftWbAgjgCYp6zImQ7mTFdIXF2qHX6bZe2oUSDBk0kh=w75-h75-p-rp-mo-br100",
      rating: 5,
    },
    {
      name: "Xena Dev",

      text: "JRM construction are highly qualified and extremely easy to communicate with about any aspect of the project. My farm house in ECR has been constructed by JRM. I had different ideas and concerns. They listened to all and gave an solution for everything. Now I don't have to sacrifice anything and move on as I dreamt.",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocLj21QbUF3TdKSfN4qgB0muLoT33JYKPNnqsF-Xm8u4IwMJzA=w75-h75-p-rp-mo-br100",
      rating: 5,
    },
    {
      name: "Rashmi Dhal",

      text: "We've never seen a construction company so dedicated to customer satisfaction.We  recommend JRM Construction stonly for your House construction. JRM Construction truly goes above and beyond!",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjWze43RZCWEGdmwaXXbB9mOP01ENceCfgsRXYAqQPlgFCp_Pg-4=w75-h75-p-rp-mo-br100",
      rating: 5,
    },
  ];
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
            mx="auto"
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
          maxW="800px"
          mx="auto"
          wordBreak="break-word"
        >
          At JRM Construction, we specialize in world-class construction,
          innovative renovations, architectural excellence, and bespoke
          designing services. With a legacy of trust and quality, we transform
          spaces into masterpieces.
        </Text>

        {/* Experience Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 5, md: 10 }}
          minH="60vh"
          px={{ base: 4, md: 10 }}
        >
          <Box textAlign="center">
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
              Years of Experience
            </Text>
            <Text fontSize={{ base: "4xl", md: "6xl" }} color="teal.500">
              <CountUp start={0} end={15} duration={3} />
              <span>+</span>
            </Text>
          </Box>

          <Box textAlign="center">
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
              Employees
            </Text>
            <Text fontSize={{ base: "4xl", md: "6xl" }} color="teal.500">
              <CountUp start={0} end={150} duration={3} />
              <span>+</span>
            </Text>
          </Box>

          <Box textAlign="center">
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
              Clients
            </Text>
            <Text fontSize={{ base: "4xl", md: "6xl" }} color="teal.500">
              <CountUp start={0} end={200} duration={3} />
              <span>+</span>
            </Text>
          </Box>

          <Box textAlign="center">
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
              Locations
            </Text>
            <Text fontSize={{ base: "4xl", md: "6xl" }} color="teal.500">
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
                textAlign={{ base: "center", md: "left" }}
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
                Top 10 Architect firm in Chennai
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
                continued growth.
              </Text>
            </Box>

            {/* Image Section */}
            <Box
              position="relative"
              overflow="hidden"
              width={{ base: "100%", md: "500px" }}
            >
              <Image
                src="https://img.freepik.com/free-vector/award-winner-concept-illustration_114360-1206.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                alt="Residential Construction"
                aspectRatio={4 / 3}
                height="auto"
              />
            </Box>
          </Flex>
        </Box>

        {/*Best Contractor Award*/}
        <Box padding={{ base: "10px", md: "20px" }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={6}
            justify="flex-start"
            mb={10}
          >
            <Box
              position="relative"
              overflow="hidden"
              width={{ base: "100%", md: "500px" }}
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
              textAlign={{ base: "center", md: "left" }}
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
                Construction Contractor in Chennai by Indian Glory, recognizing
                the company's outstanding contribution to the residential
                construction industry. This prestigious award highlights JRM
                Construction’s commitment to excellence in delivering
                high-quality residential buildings, with a focus on
                craftsmanship, innovation, and customer satisfaction. Known for
                its attention to detail and timely project delivery, JRM
                Construction has earned a reputation as one of the leading
                contractors in Chennai. The award further strengthens the
                company’s position as a trusted and reliable choice for
                residential construction projects.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/*Testimonials */}

      <Box>
        <Stack maxW="1200px" mx="auto" py={8} p={8}>
          {/* Heading */}
          <Heading
            as="h2"
            size="4xl"
            fontWeight="lighter"
            textAlign="center"
            mb={4}
          >
            Client Testimonials
          </Heading>

          {/* Testimonial Grid */}
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            {testimonials.map(({ name, text, avatar, rating }, index) => (
              <Box
                key={index}
                w="360px"
                p="6"
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="lg"
                display="flex"
                flexDirection="column"
              >
                <Stack direction="row" align="center" mb={4}>
                  <Avatar name={name} src={avatar} />
                  <Stack p={0} pl={2}>
                    <Text fontWeight="medium">{name}</Text>
                  </Stack>
                </Stack>

                <Rating
                  colorPalette="orange"
                  readOnly
                  size="sm"
                  defaultValue={rating}
                />

                <Text mt={4}>{text}</Text>
              </Box>
            ))}
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default About;
