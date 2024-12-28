import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Heading as="h1" size="4xl" textAlign="center"></Heading>
      <Image
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww"
        alt="Team Image"
        height="700px"
        width="1500px"
        mb="50px"
      />
      <Flex
        align="center"
        justify="center"
        // height="100vh" // Full viewport height
        direction="column"
      >
        <Heading fontSize="2xl" textAlign="center" mb={30}>
          Expertise
        </Heading>
        <Box
          display="flex"
          flexDirection="row"
          overflow="hidden"
          maxW="xl"
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          height="200px"
          mb={30}
        >
          {/* Left side: Image */}
          <Image
            objectFit="cover"
            maxW="200px"
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Contruction Image"
          />

          {/* Right side: Content */}
          <Box p={4} flex="1">
            <Text fontSize="2xl" fontWeight="bold" mb="2" overflow="visible">
              Construction
            </Text>

            {/* SEO Content */}
            <Text mb="4" fontSize="md">
              We specialize in delivering high-quality construction projects
              with a focus on innovation, sustainability, and excellence."
            </Text>

            {/* "Read More" Link */}
            <Box mt="4">
              <Link href="/nextpage" color="teal.500" fontWeight="bold">
                Read More
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
