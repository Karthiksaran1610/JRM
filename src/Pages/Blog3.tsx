import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react'

const Blog3 = () => {
    const MotionBox = motion(Box);

  const sections = [
    {
      title: "Understanding Vastu Shastra",
      content:
        "Vastu Shastra, the ancient Indian science of architecture, emphasizes the significance of directions in the design of buildings and spiritual spaces. According to this traditional practice, the positioning of items within a home, particularly God idols, plays a crucial role in generating positive energy and promoting well-being. By understanding the auspicious directions, one can ensure that their spiritual practices enhance the flow of energy in their living environment.",
    },
    {
      title: "Why Certain Directions Are Auspicious",
      content:
        "The placement of God idols is believed to harness specific energies emanating from the different cardinal directions. For instance, facing east is often recommended, as this direction is associated with the rising sun symbolizing positivity, success, and prosperity. When idols are placed facing east, it invites the sun's energy, which is believed to foster optimism and illuminate the mind with clarity.\n\nSimilarly, the north direction is deemed auspicious for placing deities, particularly those associated with wealth and prosperity, such as Lakshmi. This direction is believed to promote abundance and brings forth financial gains. Furthermore, having God idols facing south is generally not advised, as it can lead to adverse energies and may create blocks in the flow of positivity. It’s essential to consider these directional influences to cultivate an environment that supports spiritual growth.",
    },
    {
      title: "Impact on Energy Flow",
      content:
        "When God idols are correctly positioned as per Vastu guidelines, they can significantly influence the energy flow within a space. A well-placed idol can create a harmonious atmosphere that encourages meditation, reflection, and spiritual connection. On the other hand, inappropriate placement may lead to disruptions in energy flow, stagnation, and a sense of imbalance.\n\nAt JRM Construction, we understand the importance of designing spiritual spaces that honor the principles of Vastu Shastra. Our expertise in creating environments tailored to your spiritual needs ensures that your space reflects tranquility and positivity while adheres to Vastu considerations.\n\nIn conclusion, when placing God idols, understanding Vastu Shastra's principles regarding directional significance is pivotal. By positioning them in auspicious directions like east or north, you can enhance spiritual energy and foster a nurturing environment for yourself and your loved ones.",
    },
  ];
  return (
     <>
          <Box p="8">
            <Flex flexDirection="column" align="center" gap="4" justify="center">
              {/* Title */}
              <Heading as="h2" size="3xl" textAlign="center">
              The Ideal Direction for Placing God Idols According to Vastu Shastra
              </Heading>
    
              {/* Description */}
              <Text
                fontSize="md"
                lineHeight="1.8"
                textAlign="center"
                whiteSpace="pre-wrap"
                color="gray.500"
              >
                The Ideal Direction for Placing God Idols According to Vastu Shastra
              </Text>
    
              {/* Image */}
              <Box flex="1" width="100%" mt={8}>
                <Image
                  src="https://images.unsplash.com/photo-1660855428770-7e2fd214f8e1?auto=format&fit=crop&w=984&h=417"
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
  )
}

export default Blog3