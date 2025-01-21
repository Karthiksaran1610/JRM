import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Portfolio = () => {
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
        mb={100}
      >
        <Box
          textAlign="center"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" mb={4}>
            Our Portfolio
          </Text>
        </Box>
      </Box>

      {/*Portfolio*/}
      <Box p={4} mb="20">
      <Box width={{ base: "100%", md: "70%" }} p={4} mx="auto">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
          columnGap={8} // Gap between columns
          rowGap={6} // Gap between rows
        >
          <GridItem>
            <Image
              height="200px"
              width="100%"
              objectFit="cover"
              borderRadius="md"
              src="https://jrmconstruction.in/assets/images/g-1.jpg"
              alt="Construction Image"
            />
          </GridItem>
          <GridItem>
            <Image
              height="200px"
              width="100%"
              objectFit="cover"
              borderRadius="md"
              src="https://www.bluentcad.com/images/architectural-walkthrough-portfolio-2-jpeg.webp"
              alt="Architecture Image"
            />
          </GridItem>
          <GridItem>
            <Image
              height="200px"
              width="100%"
              objectFit="cover"
              borderRadius="md"
              src="https://jrmconstruction.in/assets/images/portfolio/interior/6.png"
              alt="Interior Image"
            />
          </GridItem>
          <GridItem>
            <Image
              height="200px"
              width="100%"
              objectFit="cover"
              borderRadius="md"
              src="https://img.freepik.com/free-photo/couple-choosing-house-wallpaper_53876-165174.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming"
              alt="Renovation Image"
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
    </>
  );
};

export default Portfolio;
