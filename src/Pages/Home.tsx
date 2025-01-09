import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  AspectRatio,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Home = () => {
  interface CardProps {
    imageSrc: string; // Explicitly type 'imageSrc' as a string
    title: string; // Explicitly type 'title' as a string
    description: string; // Explicitly type 'description' as a string
    link: string; // Explicitly type 'link' as a string
  }

  const Card: React.FC<CardProps> = ({
    imageSrc,
    title,
    description,
    link,
  }) => (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="xl"
      height="100%"
      _hover={{ transform: "scale(1.03)", transition: "0.3s ease-in-out" }}
    >
      <Image
        objectFit="cover"
        w={{ base: "100%", md: "250px" }}
        h={{ base: "250px", md: "100%" }}
        src={imageSrc}
        alt={title}
        borderRight={{ base: "none", md: "1px solid #e2e8f0" }}
      />
      <Flex
        p={6}
        flex="1"
        flexDirection="column"
        justifyContent="space-between"
        backgroundColor="white"
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mb={2}
          color="gray.800"
        >
          {title}
        </Text>
        <Text mb={4} fontSize={{ base: "sm", md: "md" }} color="gray.600">
          {description}
        </Text>
        <Link href={link} color="teal.500" fontWeight="bold">
          Read More
        </Link>
      </Flex>
    </Box>
  );

  {
    /*FAQ's*/
  }
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

  {
    /*Completed Projects*/
  }
  const projectVideos = [
    "https://www.youtube.com/embed/YaFKEQOrIs0?si=ZJn6PNvNOa9xiTup",
    "https://www.youtube.com/embed/cbtd2ov4YJ4?si=Ws2T_k_JFHIVTpud",
    "https://www.youtube.com/embed/kBgaAoPLWSU?si=NGe-aUaoA2hfuiPL",
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
            Crafting Homes That Last a Lifetime
          </Text>
        </Box>
      </Box>

      <Flex align="center" justify="center" direction="column" p={12}>
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          textAlign="center"
          mb={8}
          fontWeight="lighter"
        >
          Expertise
        </Heading>
        <Box p={{ base: 4, md: 8 }} maxW="7xl" mx="auto">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={8}
            w="full"
          >
            <Card
              imageSrc="https://img.freepik.com/free-photo/working-with-blueprint_1098-14292.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
              title="Construction"
              description="We specialize in delivering high-quality construction projects with a focus on innovation, sustainability, and excellence."
              link="/construction"
            />
            <Card
              imageSrc="https://img.freepik.com/free-photo/set-designer-work-indoors_23-2149837030.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
              title="Renovation"
              description="Our expertise includes creating stunning and functional interior designs tailored to client needs."
              link="/renovation"
            />
            <Card
              imageSrc="https://img.freepik.com/free-vector/architecture-background-design_1168-180.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
              title="Architecture"
              description="We specialize in delivering high-quality construction projects with a focus on innovation, sustainability, and excellence."
              link="/architecture"
            />
            <Card
              imageSrc="https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
              title="Interior"
              description="We specialize in delivering high-quality construction projects with a focus on innovation, sustainability, and excellence."
              link="/interior"
            />
          </Grid>
        </Box>
      </Flex>

      {/* Why Choose JRM*/}
      <Box>
        <Center width="100%" minHeight="100vh">
          <Box width="80%" maxWidth="1200px">
            <Heading
              mb={6}
              textAlign="center"
              fontSize="4xl"
              fontWeight="lighter"
            >
              Why Choose Us
            </Heading>
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={6}
              justifyItems="center"
            >
              {/* First Row */}
              <Box p={5} borderWidth={1} borderRadius="md" boxShadow="sm">
                <Image
                  src="https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
                  alt="Concept Design"
                  borderRadius="md"
                  height="250px" // Fixed height for consistency
                  objectFit="cover"
                />
                <Heading fontSize="xl" fontWeight="lighter" mt={4}>
                  Timely Delivery
                </Heading>
                <Text mt={2} fontWeight="lighter">
                  We pride ourselves on completing projects on time, ensuring
                  your plans stay on track without delays
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
                  Cost-Effective Solutions
                </Heading>
                <Text mt={2} fontWeight="lighter">
                  "Our cost-effective solutions are designed to provide maximum
                  value without compromising on quality.
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
                  Use of Modern Technology
                </Heading>
                <Text mt={2} fontWeight="lighter">
                  We harness the power of modern technology to enhance
                  efficiency and precision in our construction processes.
                </Text>
              </Box>
            </Grid>
          </Box>
        </Center>

        {/*Ongoing Projects*/}
        <>
          <Heading
            textAlign="center"
            fontSize="4xl"
            mb={2}
            fontWeight="lighter"
          >
            Ongoing Projects
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
                src="https://media.istockphoto.com/id/170616024/photo/concrete-highrise-construction-site.jpg?s=612x612&w=0&k=20&c=7-lJj9c_WVakkqoM6WTCNu9Q-E7bV6goRzS0NBnKsCc="
                alt="Project"
              />
              <Box
                padding="4"
                background="gray.100"
                borderRadius="md"
                boxShadow="sm"
              >
                <Heading fontSize="2xl" mt={2} mb={2} fontStyle="revert">
                  Sholinganallur
                </Heading>
                <Flex align="center" mb={3}></Flex>
                <Text fontSize="md">
                  Our ongoing projects at Sholinganallur focus on delivering
                  quality residential spaces, blending modern design with timely
                  execution.
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
                src="https://media.istockphoto.com/id/981339754/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?s=612x612&w=0&k=20&c=ACQLq17lMGeOpqp51hfR5AmK_yk_X_AIngfeq1frujk="
                alt="Project"
              />
              <Box
                padding="4"
                background="gray.100"
                borderRadius="md"
                boxShadow="sm"
              >
                <Heading fontSize="2xl" mt={2} mb={2} fontStyle="revert">
                  Medavakam
                </Heading>
                <Flex align="center" mb={3}></Flex>
                <Text fontSize="md">
                  Our Medavakkam project features thoughtfully designed
                  residential spaces, offering a blend of comfort, style, and
                  convenience for modern living.
                </Text>
              </Box>
            </Flex>
          </Box>
        </>

        {/*Completed Projects*/}

        <Box p={4}>
          <Text fontSize="4xl" mb={4} textAlign="center" fontWeight="lighter">
            Our Completed Projects
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} padding={6} mr={5} ml={5}>
            {projectVideos.map((video, index) => (
              <AspectRatio ratio={16 / 9} key={index}>
                <iframe
                  width="100%"
                  height="100%"
                  src={video}
                  title={`Project Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            ))}
          </SimpleGrid>
        </Box>
        {/*FAQs*/}

        <Heading
          textAlign="center"
          fontSize="4xl"
          mb={10}
          mt={6}
          fontWeight="lighter"
        >
          Frequently Asked Questions
        </Heading>
        <Box ml={200} mr={200} mt={3} mb={6} fontWeight="lighter">
          <AccordionRoot collapsible defaultValue={["b"]}>
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.value}>
                <AccordionItemTrigger fontSize="xl" fontWeight="light">
                  {item.title}
                </AccordionItemTrigger>
                <AccordionItemContent fontSize="md">
                  {item.text}
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Box>
      </Box>
    </>
  );
};

export default Home;
