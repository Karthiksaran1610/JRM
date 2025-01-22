import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

const Portfolio = () => {
  // Define the categories type
  type Category = "Construction" | "Architecture" | "Interior" | "Renovation";

  // Set the selectedCategory state with the correct type
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const categories: Record<Category, string[]> = {
    Construction: [
      "https://jrmconstruction.in/assets/images/g-3.jpg",
      "https://jrmconstruction.in/assets/images/g-1.jpg",
      "https://jrmconstruction.in/assets/images/g-4.jpg",
      "https://jrmconstruction.in/assets/images/g-5.jpg",
      "https://jrmconstruction.in/assets/images/g-6.jpg",
      "https://jrmconstruction.in/assets/images/g-12.jpg",
      "https://jrmconstruction.in/assets/images/g-10.jpg",
      "https://jrmconstruction.in/assets/images/g-8.jpg",
      "https://jrmconstruction.in/assets/images/g-11.jpg",
      "https://jrmconstruction.in/assets/images/construction/5/1.jpg",
      "https://jrmconstruction.in/assets/images/construction/5/2.jpg",
      "https://jrmconstruction.in/assets/images/construction/5/6.jpg",
      "https://jrmconstruction.in/assets/images/construction/5/11.jpg",
      "https://jrmconstruction.in/assets/images/construction/5/15.jpg",
      "https://jrmconstruction.in/assets/images/construction/5/14.jpg",
      "https://jrmconstruction.in/assets/images/construction/5/18.jpg",
      "https://jrmconstruction.in/assets/images/g-26.jpg",
      "https://jrmconstruction.in/assets/images/g-29.jpg",
    ],
    Architecture: [
      "https://jrmconstruction.in/assets/images/portfolio/architecture/1.png",
      "https://jrmconstruction.in/assets/images/portfolio/architecture/2.png",
      "https://jrmconstruction.in/assets/images/portfolio/architecture/3.png",
      "https://jrmconstruction.in/assets/images/portfolio/architecture/4.png",
      "https://jrmconstruction.in/assets/images/portfolio/architecture/5.png",
    ],
    Interior: [
      "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-design-chandelier_105762-2230.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa-lamp-wood-decor-loft-style_105762-2259.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895587.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/digital-lavender-style-interior-design_23-2151561236.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa-lamp-wood-decor-loft-style_105762-2261.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/neon-robot-vacuum-cleaner_23-2151349264.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-yellow-living-room-with-sofa_105762-2247.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683449.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895587.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/modern-interior-design-interior_23-2151929574.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118945.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/neon-robot-vacuum-cleaner_23-2151349264.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
    ],
    Renovation: [
      "https://media.istockphoto.com/id/1466145748/photo/kitchen-fitters-installing-some-cabinets.jpg?s=2048x2048&w=is&k=20&c=SNjjfHaweu0lW3g22RZfqGmg4k7OA_CfUne64-88Ucw=",
      "https://media.istockphoto.com/id/991867390/photo/that-thing-is-next-on-our-housing-plan.jpg?s=612x612&w=0&k=20&c=7emEOvQq5H6RQl-g1JV1FHXSg_k64ArCIRxdY1zZjBc=",
      "https://media.istockphoto.com/id/1086130766/photo/couple-making-home-improvement-and-measuring.jpg?s=612x612&w=0&k=20&c=ilt3sGBGUIqEYY5-NrVRjbAZrrQ9gNeQoF1ViP8PGBY=",
      "https://img.freepik.com/free-photo/young-couple-doing-apartment-repair-together-themselves-married-man-woman-doing-home-makeover-renovation_155003-26913.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
      "https://img.freepik.com/free-photo/building-construction-workers-site_23-2149124309.jpg?t=st=1736163023~exp=1736166623~hmac=3db3c58ddbca77ee44100bafec754385b5e29afc08cdb3f7ed77ca33ef063078&w=996",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirPOqkcZMpsLwl-ecc6R3AvgMxDvAKuRwXg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmatuZg0_T7ISvoepTMhrIjGoqai1d2A3jw&s",
      "https://img.freepik.com/free-photo/medium-shot-people-carrying-placard-together_23-2149328068.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/worker-work-hard-engineer-tired-work-factory-man-working-danger-area-employee-labor_693193-2594.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
    ],
  };

  
  const handleCategoryClick = (category: Category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
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

      {/* Portfolio */}
      <Box p={4} mb="20">
        <Box width={{ base: "100%", md: "70%" }} p={4} mx="auto">
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {[
              {
                src: "https://jrmconstruction.in/assets/images/g-1.jpg",
                label: "Construction",
              },
              {
                src: "https://www.bluentcad.com/images/architectural-walkthrough-portfolio-2-jpeg.webp",
                label: "Architecture",
              },
              {
                src: "https://jrmconstruction.in/assets/images/portfolio/interior/6.png",
                label: "Interior",
              },
              {
                src: "https://img.freepik.com/free-photo/couple-choosing-house-wallpaper_53876-165174.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_incoming",
                label: "Renovation",
              },
            ].map((item, index) => (
              <GridItem key={index} position="relative">
                <Image
                  src={item.src}
                  alt={`${item.label} Image`}
                  height="200px"
                  width="100%"
                  objectFit="cover"
                  borderRadius="md"
                  transition="transform 0.3s, opacity 0.3s"
                  _hover={{
                    transform: "scale(1.05)",
                    opacity: 0.7,
                  }}
                  cursor="pointer" 
                  onClick={() => handleCategoryClick(item.label as Category)}
                />
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="white"
                  fontSize="lg"
                  fontWeight="bold"
                  textAlign="center"
                  textShadow="0px 0px 10px rgba(0, 0, 0, 0.8)"
                >
                  {item.label}
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* When a category is selected, show images in a 1 row, 3 columns layout with a heading */}
      {selectedCategory && (
        <Box p={4}>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color="gray.700"
            textAlign="center"
            mb={4}
          >
            {selectedCategory} Portfolio
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {categories[selectedCategory].map((src, index) => (
              <GridItem key={index}>
                <Image
                  src={src}
                  alt={`${selectedCategory} Image ${index + 1}`}
                  height="200px"
                  width="100%"
                  objectFit="cover"
                  borderRadius="md"
                  // transition="transform 0.3s, opacity 0.3s"
                  // _hover={{
                  //   transform: "scale(1.05)",
                  //   opacity: 0.7,
                  // }}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Portfolio;
