import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Blog1 = () => {
  const MotionBox = motion(Box);

  const sections = [
    {
      title: "Understanding Vastu Principles for Office Spaces",
      content:
        "Vastu Shastra, an ancient Indian science of architecture, provides guidelines for creating harmonious spaces that enhance positivity and productivity. When it comes to office design, one critical aspect that varies from one workspace to another is the alignment of doors. According to Vastu principles, the direction of office doors plays a crucial role in influencing the flow of energy, which can significantly impact both employee morale and overall productivity.",
    },
    {
      title: "The Importance of Door Alignment",
      content:
        "Door alignment is vital as it serves as the gateway, or entry point, for energy (also known as 'Prana') into the workspace. An office door that aligns with Vastu principles can facilitate the smooth flow of positive energy, encouraging creativity and collaboration. For instance, doors that face certain cardinal directions, such as the East or North, are considered auspicious as they invite new opportunities and growth. Conversely, misalignment can lead to stagnant energy, increasing feelings of lethargy among employees.",
    },
    {
      title: "Designing Vastu-Friendly Workspaces with JRM Construction",
      content:
        "At JRM Construction, we understand the intricacies of Vastu application in both residential and commercial spaces. Our expertise lies in designing environments that are not only aesthetically pleasing but also promote harmony and productivity. By consulting with our team, you can discover how to optimize door placement and alignment according to Vastu principles, ensuring that your office thrives on positive energy.\n\nIncorporating Vastu-friendly designs into your office can also lead to a boost in employee morale, fostering a collaborative and tranquil work environment. Each aspect, from door direction to the overall layout, is considered during the design process, highlighting the importance of creating a cohesive and engaging workspace.\n\nIn conclusion, aligning office doors according to Vastu principles is a foundational step toward cultivating a successful work environment. With our expertise at JRM Construction, your workspace can thrive as a reflection of modern needs rooted in ancient wisdom. Whether you are redesigning or building a new office, let us assist you in creating a Vastu-compliant space that significantly enhances productivity.",
    },
  ];
  return (
    <>
      <Box p="8">
        <Flex flexDirection="column" align="center" gap="4" justify="center">
          {/* Title */}
          <Heading as="h2" size="3xl" textAlign="center">
            Best Direction for Office Doors | Vastu Shastra Tips
          </Heading>

          {/* Description */}
          <Text
            fontSize="md"
            lineHeight="1.8"
            textAlign="center"
            whiteSpace="pre-wrap"
            color="gray.500"
          >
            Discover the best direction for office doors according to Vastu
            Shastra {"\n"} Learn how to align your workspace for success with
            expert insights from JRM Construction.
          </Text>

          {/* Image */}
          <Box flex="1" width="100%" mt={8}>
            <Image
              src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxWYXN0dSUyMGZvciUyMG9mZmljZXN8ZW58MHx8fHwxNzMyNzA0MDM0fDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=984&h=417"
              alt="Custom Home Design"
              borderRadius="md"
              width="100%"
              height="auto"
              mb={15}
            />
          </Box>
        </Flex>
      </Box>

      {/*Section Box*/}

      <Box p="8">
        <Flex flexDirection="column" gap="8" mt="8" ml="40" mr="40">
          {sections.map((section, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.9 }}
            >
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }} // Adjust for responsive design
                textAlign="center"
                mb="4"
              >
                {section.title}
              </Heading>
              <Text
                fontSize={{ base: "sm", lg: "md" }}
                lineHeight="1.8"
                textAlign="justify" // Justify ensures neat text alignment
                whiteSpace="pre-wrap"
                color="gray.700"
              >
                {section.content}
              </Text>
            </MotionBox>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Blog1;
