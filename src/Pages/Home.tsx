import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  const items = [
    {
      value: "1",
      title: " What types of projects does your company handle?",
      text: "We specialize in residential, commercial, industrial construction, and renovation projects. Whether you need a custom-built home, office space, or factory setup, we have the expertise to deliver high-quality results",
    },
    {
      value: "2",
      title: " How much will my project cost?",
      text: "The cost of a project depends on several factors, including the size, complexity, materials used, and location. We provide a detailed estimate after understanding your requirements and conducting a site visit. Rest assured, our pricing is transparent, with no hidden charges.",
    },
    {
      value: "3",
      title: "How do you ensure the quality of your work?",
      text: "We ensure quality by using top-grade materials, working with skilled professionals, and following strict industry standards. Every project goes through rigorous checks at each stage to guarantee durability and customer satisfaction",
    },
    {
      value: "4",
      title: " What is the timeline for completing my project?",
      text: "The timeline for completing a project varies depending on its scope and complexity. After assessing your requirements and conducting a site evaluation, we will provide you with a detailed schedule. We prioritize efficiency and strive to deliver your project on time without compromising on quality.",
    },
  ];
  return (
    <Box>
      <Heading as="h1" size="4xl" textAlign="center"></Heading>
      <Image
        src="https://media.istockphoto.com/id/689935500/photo/iron-rod.jpg?s=612x612&w=0&k=20&c=fE8ZdVmvzjjCSwOyVi4nspC7HHdU_tBtBgNqefcWBVo="
        alt="Team Image"
        height={{ base: "auto", md: "500px", lg: "700px" }}
        width="100%"
        objectFit="cover"
        mb="50px"
      />
      <Flex align="center" justify="center" direction="column" p={12}>
        <Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="center" mb={8}>
          Expertise
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Stack on mobile, side by side on tablet and up
          gap={6} // Adjust space between the cards
          maxW="4xl"
          w="full"
        >
          {/* Card 1 */}
          <GridItem>
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "row" }} // Stack vertically on mobile, row on tablet+ screens
              overflow="hidden"
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              height="100%" // Ensure cards have equal height
              _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
            >
              {/* Left side: Image */}
              <Image
                objectFit="cover"
                w={{ base: "100%", md: "200px" }} // 100% width on mobile, fixed width on desktop
                h={{ base: "200px", md: "100%" }} // Set image height on mobile, full height on desktop
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Construction Image"
              />

              {/* Right side: Content */}
              <Box
                p={4}
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  mb={2}
                >
                  Construction
                </Text>
                <Text mb={4} fontSize={{ base: "sm", md: "md" }} flex="1">
                  We specialize in delivering high-quality construction projects
                  with a focus on innovation, sustainability, and excellence.
                </Text>
                <Box mt={4}>
                  <Link href="/nextpage" color="teal.500" fontWeight="bold">
                    Read More
                  </Link>
                </Box>
              </Box>
            </Box>
          </GridItem>

          {/* Card 2 */}
          <GridItem>
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "row" }} // Stack vertically on mobile, row on tablet+ screens
              overflow="hidden"
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              height="100%" // Ensure cards have equal height
              _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
            >
              {/* Left side: Image */}
              <Image
                objectFit="cover"
                w={{ base: "100%", md: "200px" }} // 100% width on mobile, fixed width on desktop
                h={{ base: "200px", md: "100%" }} // Set image height on mobile, full height on desktop
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Interior Design Image"
              />

              {/* Right side: Content */}
              <Box
                p={4}
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  mb={2}
                >
                  Interior Design
                </Text>
                <Text mb={4} fontSize={{ base: "sm", md: "md" }} flex="1">
                  Our expertise includes creating stunning and functional
                  interior designs tailored to client needs.
                </Text>
                <Box mt={4}>
                  <Link href="/nextpage" color="teal.500" fontWeight="bold">
                    Read More
                  </Link>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Flex>

      {/* Why Choose JRM*/}
      <Box>
        {/* Centering the Heading */}
        <Flex justify="center" align="center" mt={50} mb={8}>
          <Heading
            textAlign="center"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          >
            Why Build With Us ?
          </Heading>
        </Flex>

        {/* Display Cards in a Row or Stack based on screen size */}
        <Flex
          justify="center"
          align="center"
          mt={8}
          gap={{ base: 4, md: 8 }} // Adjust space between cards for different screen sizes
          direction={{ base: "column", md: "row" }} // Stack cards vertically on mobile
          wrap="wrap" // Allow wrapping on smaller screens
        >
          {/* Card 1 */}
          <Card.Root maxW="sm" overflow="hidden" boxShadow="lg" w={250} mb={30}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8fHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              objectFit="cover"
            />
            <Card.Body gap="2">
              <Card.Title fontSize={{ base: "lg", md: "xl" }}>
                Timely Delivery
              </Card.Title>
              <Card.Description>
                JRM Construction ensures that all projects are completed on
                schedule, reducing unnecessary costs and boosting customer
                satisfaction.
              </Card.Description>
            </Card.Body>
          </Card.Root>

          {/* Card 2 */}
          <Card.Root maxW="sm" overflow="hidden" boxShadow="lg" w={250} mb={30}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8fHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              objectFit="cover"
            />
            <Card.Body gap="2">
              <Card.Title fontSize={{ base: "lg", md: "xl" }}>
                Cost-Effective Solution
              </Card.Title>
              <Card.Description>
                By optimizing resource allocation and using cost-effective
                materials, JRM Construction delivers
              </Card.Description>
            </Card.Body>
          </Card.Root>

          {/* Card 3 */}
          <Card.Root maxW="sm" overflow="hidden" boxShadow="lg" w={250} mb={30}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8fHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              objectFit="cover"
            />
            <Card.Body gap="2">
              <Card.Title fontSize={{ base: "lg", md: "xl" }}>
                Use Modern Technology
              </Card.Title>
              <Card.Description>
                JRM Construction leverages modern technologies and sustainable
                practices to enhance efficiency, reduce waste.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </Flex>

        {/*Projects We have Delivered*/}
        <>
          <Heading textAlign="center" fontSize="2xl" mb={2}>
            Projects We are delivered
          </Heading>
          <Box
            background="gray.200"
            padding="4"
            color="black"
            mx={250}
            mb={50}
            mt={10}
            borderRadius={10}
          >
            <Flex align="center" gap={4}>
              <Image
                height="200px"
                borderRadius={10}
                src="https://media.istockphoto.com/id/1449364000/photo/minimalist-style-tiny-room.jpg?s=612x612&w=0&k=20&c=uokTOpJl8Hoc4HGqJPicYjy8SBMwCEWkGLUhhvJYgTA="
                alt="Project"
              />
              <Box
                padding="4"
                background="gray.100"
                borderRadius="md"
                boxShadow="sm"
              >
                <Heading fontSize="lg" mt={2} mb={2}>
                  Interior Design
                </Heading>
                <Flex align="center" mb={3}>
                  <Text fontSize="sm" color="gray.600">
                    Madhavaram
                  </Text>
                </Flex>
                <Text fontSize="md">
                  This is a description of the project. It highlights the key
                  features and achievements, providing a brief overview of what
                  was delivered.
                </Text>
              </Box>
            </Flex>
          </Box>
          {/* Second Column*/}
          <Box
            background="gray.200"
            padding="4"
            color="black"
            mx={250}
            mb={50}
            mt={10}
            borderRadius={10}
          >
            <Flex align="center" gap={4}>
              <Image
                height="200px"
                borderRadius={10}
                src="https://media.istockphoto.com/id/1449364000/photo/minimalist-style-tiny-room.jpg?s=612x612&w=0&k=20&c=uokTOpJl8Hoc4HGqJPicYjy8SBMwCEWkGLUhhvJYgTA="
                alt="Project"
              />
              <Box
                padding="4"
                background="gray.100"
                borderRadius="md"
                boxShadow="sm"
              >
                <Heading fontSize="lg" mt={2} mb={2}>
                  Interior Design
                </Heading>
                <Flex align="center" mb={3}>
                  <Text fontSize="sm" color="gray.600">
                    Madhavaram
                  </Text>
                </Flex>
                <Text fontSize="md">
                  This is a description of the project. It highlights the key
                  features and achievements, providing a brief overview of what
                  was delivered.
                </Text>
              </Box>
            </Flex>
          </Box>
        </>

        {/* Ratings
        <>
          <Box>
            <Stack maxW="320px" gap="4">
              <Rating
                colorPalette="orange"
                readOnly
                size="xs"
                defaultValue={5}
              />

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
          </Box>
        </> */}

        {/*FAQs*/}

        <Heading textAlign="center" fontSize="2xl" mb={2}>
          Frequently Asked Questions
        </Heading>
        <Box ml={200} mr={200} mt={3} mb={6}>
          <AccordionRoot collapsible defaultValue={["b"]}>
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.value}>
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent>{item.text}</AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
