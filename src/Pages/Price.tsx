import { Box, Grid, Heading, Text, Flex, Image, List } from "@chakra-ui/react";
import { MdOutlineCheck } from "react-icons/md";

const Price = () => {
  const packages = [
    {
      title: "Basic Package",
      normalPrice: 2250,
      sqrFeetPrice: 2250, // Price per sqr feet
      topics: [
        "Wall – Brick / AAC Block",
        "Steel – Fe550 D –Kamatchi TMT and Equivalent",
        "Cement –Dalmia / Zuari",
        "Flooring – Somany / Nitco / KAG/ Sunheart - Equivalent",
        "Main Door (Joinery) – Teak 1st Quality (Frame and Door)",
        "Inner Door (Joinery) – Teak 2nd Quality (Frame and Door)",
        "Window – UPVC With Grill",
        " Pipes (plumbing) – Finolx PVC / Ashrivad CPVC",
        "Fittings (plumbing) – Parryware /Hindware - equivalent",
        "Pipes (Electrical) – Orbit / S V S - Equivalent",
        "Wires (Electrical) - Orbit / Kundan - Equivalent",
        "Switches – Fybros / G M and Equivalent",
        "Putty – Nerolac",
        "Paint – Nippon Paint – Interior and Exterior",
        "Railing – SS – 304 Grade. SS Pipes for Staircase",
        "Glass – Glass of Saint Gobain Brand",
      ],
    },
    {
      title: "Premium Package",
      normalPrice: 2450,
      sqrFeetPrice: 2450,
      topics: [
        "Wall – Wirecut Brick / Renacon AAC Block",
        "Steel – Fe550 D – JSW Neo / Jindal Panther - Equivalent",
        "Cement – Ramco / Ultra Tech - Equivalent",
        "Kitchen Slab & Staircase – Black Galaxy Granite",
        "Flooring –Kajaria / Nitco / Johnson - Equivalent",
        "Main Door (Joinery) – Teak 1st Quality (Frame and Door)",
        "Inner Door (Joinery) – Teak 2nd Quality (Frame and Door)",
        "Window – UPVC With Grill + Mosquito Net",
        "Pipes (plumbing) – Finolx PVC / Ashrivad CPVC",
        "Fittings (plumbing) – Parryware / Jaguar",
        "Pipes (Electrical) – Orbit / Finolex",
        "Wires (Electrical) - Orbit / FRLS Polycab",
        "Switches – Anchor / Roma / Legrand",
        "Putty – Nerolac",
        "Paint – Nippon Paint (Advanced) – Interior and Exterior",
        "Mirror - For all Bathrooms",
        "Master Bedroom - Wooden Flooring",
        "Railing - SS - 304 Grade and SS Pipes for Staircase",
        "Glass - Toughened Glass of Saint Gobain Brand",
      ],
    },
  ];

  return (
    <>
      <Box>
        <Flex
          align="center"
          direction={{ base: "column", md: "row" }}
          ml={{ base: 0, md: 10, lg: 50 }}
          mb={{ base: 5, md: 20, lg: 50 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box mr={{ base: 0, md: 8, lg: 10 }} mb={{ base: 5, md: 0 }}>
            <Image
              src="https://img.freepik.com/free-vector/construction-costs-concept-illustration_114360-7458.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid"
              alt="Your image description"
              maxWidth={{ base: "90%", md: "300px", lg: "400px" }}
              borderRadius="md"
            />
          </Box>
          <Box>
            <Heading
              size={{ base: "xl", md: "3xl", lg: "6xl" }}
              color="gray.500"
            >
              Residential Packages in JRM Construction
            </Heading>
          </Box>
        </Flex>
      </Box>

      {/* Packages in JRM */}
      <Box p={5}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          {packages.map((pkg, pkgIndex) => (
            <Box
              key={pkg.title}
              shadow="md"
              borderRadius="md"
              p={4}
              textAlign="center"
              bgColor="gray.50"
            >
              {/* Title with background color */}
              <Heading
                size={{ base: "xl", md: "2xl", lg: "3xl" }}
                mb={4}
                bgColor="yellow.400"
                p={{ base: 2, md: 4 }}
                borderRadius="md"
                color="white"
              >
                {pkg.title}
              </Heading>

              <Text
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                color="black"
                fontWeight="bold"              >
                ₹{pkg.sqrFeetPrice}/-
              </Text>
              <Text as="span" fontSize={{ base: "xs", md: "sm" }} color="black">
                per sqr feet
              </Text>

              <Box
                height="2px"
                backgroundColor="yellow.400"
                my={4}
                width="80%"
                mx="auto"
              />
              {/* Topics */}
              <List.Root
                p={{ base: 2, md: 3 }}
                mb={4}
                display="flex"
                flexDirection="column"
                alignItems="flex-start" // Align items to the left
                gap={2}
              >
                {pkg.topics.map((topic, index) => (
                  <List.Item
                    key={index}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    textShadow="2px 2px 5px rgba(0, 0, 0, 0.1)"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    <MdOutlineCheck style={{ color: "green" }} />
                    {topic}
                  </List.Item>
                ))}
              </List.Root>

              <Flex justify="center" mt={4}>
                <a
                  href="https://wa.me/917708668707"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    as="button"
                    fontSize={{ base: "md", md: "lg" }}
                    color="teal.500"
                    fontWeight="bold"
                    border="2px solid teal"
                    borderRadius="md"
                    padding={{ base: "8px 16px", md: "10px 20px" }}
                    _hover={{ backgroundColor: "teal.100" }}
                  >
                    Get a Information
                  </Text>
                </a>
              </Flex>
            </Box>
          ))}
        </Grid>

        {/*Customized package*/}
        <Box
          shadow="md"
          borderRadius="md"
          p={6}
          bgColor="gray.50"
          textAlign="center"
          mt={30}
        >
          {/* Title */}
          <Heading size="2xl" fontWeight="bold" color="black" mb={4}>
            Customized Package
          </Heading>

          <Text fontSize="md" color="black" mb={4}  textShadow="2px 2px 5px rgba(0, 0, 0, 0.1)">
            Material will depend on customer requirements.
          </Text>

          <a
            href="https://wa.me/917708668707"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              as="button"
              fontSize="lg"
              color="teal.500"
              fontWeight="bold"
              border="2px solid teal"
              borderRadius="md"
              padding="10px 20px"
              _hover={{ backgroundColor: "teal.100" }}
            >
              Get a Information
            </Text>
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Price;
