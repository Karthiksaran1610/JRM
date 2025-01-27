import {
  Box,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

const Blog = () => {
  const blogData = [
    {
      image:
        "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxWYXN0dSUyMGZvciUyMG9mZmljZXN8ZW58MHx8fHwxNzMyNzA0MDM0fDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&h=1080",
      title: "Best Direction for Office Doors | Vastu Shastra Tips",
      description:
        "Discover the best direction for office doors according to Vastu Shastra. Learn how to align your workspace for success with expert insights from JRM Construction..",
      date: "Nov 27, 2024",
      link: "/blog1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxWYXN0dSUyMFNoYXN0cmElMjBvZmZpY2UlMjBkZXNpZ258ZW58MHx8fHwxNzMyNzAyNzg5fDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&h=1080",
      title: "Best Sitting Directions in Office as Per Vastu",
      description:
        "Learn the ideal sitting direction for office setups as per Vastu. Boost productivity with JRM Construction’s expert tips..",
      date: "Nov 27, 2024",
      link: "/blog2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1660855428770-7e2fd214f8e1?auto=format&fit=crop&w=1800&h=1080",
      title:
        "The Ideal Direction for Placing God Idols According to Vastu Shastra",
      description:
        "Learn the correct direction for placing god idols as per Vastu guidelines. Enhance harmony with expert tips from JRM Construction.",
      date: "Nov 27, 2024",
      link: "/blog3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1567591391293-f9a99c77e128?auto=format&fit=crop&w=1800&h=1080",
      title: "Best Placement for Pooja Rooms as Per Vastu",
      description:
        "Find the ideal location for pooja rooms according to Vastu. Discover placement tips and guidelines with JRM Construction’s expertise.",
      date: "Nov 27, 2024",
      link: "/blog4",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?auto=format&fit=crop&w=1800&h=1080",
      title: "Complete Guide to Vastu Homam Procedure",
      description:
        "Understand the procedure for Vastu Homam. Learn its significance in creating harmonious spaces with insights from JRM Construction.",
      date: "Nov 27, 2024",
      link: "/blog5",
    },
    {
      image:
        "https://images.unsplash.com/photo-1646488993053-8c182b628696?auto=format&fit=crop&w=984&h=417",
      title: "Vastu Tips for Overhead Water Tank Placement",
      description:
        "Discover the ideal placement for overhead water tanks according to Vastu Shastra. Learn placement tips from JRM Construction experts",
      date: "Nov 27, 2024",
      link: "/blog6",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603404235009-71c1f80e31fc?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxWYXN0dSUyMFNoYXN0cmElMjBiZW5lZml0c3xlbnwwfHx8fDE3MzI2OTk1OTV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&h=1080",
      title: "Best Location for a Sump Tank as Per Vastu",
      description:
        "Learn where to place a sump tank as per Vastu guidelines. Discover tips for aligning water storage with Vastu principles from JRM Construction.",
      date: "Nov 27, 2024",
      link: "/blog7",
    },
    {
      image:
        "https://images.unsplash.com/photo-1597149305638-fef8c2b1981b?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxWYXN0dSUyMHByaW5jaXBsZXN8ZW58MHx8fHwxNzMyNjkyNjgxfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&h=1080",
      title: "Vastu Plants for Wealth and Prosperity",
      description:
        "Learn how Vastu plants like tulsi, money plant, and bamboo can bring wealth and prosperity. Discover expert tips on placement from JRM Construction Blog.",
      date: "Nov 27, 2024",
      link: "/blog8",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512548438457-4c9584d3766b?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxpbXByb3ZlJTIwc2xlZXAlMjBxdWFsaXR5fGVufDB8fHx8MTczMjYyNzA5OHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&h=1080",
      title: "Vastu & Feng Shui Bedroom Tips for Better Sleep | JRM Blog",
      description:
        "Enhance sleep quality with Vastu & Feng Shui bedroom tips. Discover the best sleeping directions for health and relaxation with JRM Construction’s insights. Read now!",
      date: "Nov 27, 2024",
      link: "/blog9",
    },
  ];
  return (
    <>
  <Box p="8">
    <Box mb="8" fontSize="4xl" textAlign="center">
      Latest Blogs
    </Box>
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap="6"
      alignItems="stretch"
    >
      {blogData.map((blog, index) => (
        <Link
          key={index}
          href={blog.link} // Navigate to the blog page
          _hover={{ textDecoration: "none" }} // Remove underline on hover
        >
          <GridItem
            display="flex"
            flexDirection="column"
            p="4"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            shadow="md"
            _hover={{ shadow: "lg", transform: "scale(1.02)" }} // Add hover effect
            transition="all 0.2s ease-in-out"
            h="100%" // Full height in the grid
          >
            {/* Image */}
            <Image
              src={blog.image}
              alt={blog.title}
              objectFit="cover"
              w="100%"
              h="200px"
            />

            {/* Vertical card content */}
            <VStack
              align="stretch"
              p="3"
              mt="4"
              flex="1" // Fills the remaining space to ensure equal height
              justifyContent="space-between" // Space out elements in the VStack
            >
              <Text fontSize="lg" fontWeight="bold" color="gray.800">
                {blog.title}
              </Text>

              <Text fontSize="sm" color="gray.600">
                {blog.description}
              </Text>

              <Text fontSize="sm" color="gray.500" alignSelf="flex-start">
                {blog.date}
              </Text>
            </VStack>
          </GridItem>
        </Link>
      ))}
    </Grid>
  </Box>
</>


  );
};

export default Blog;
