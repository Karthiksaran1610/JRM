import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Blog9 = () => {
  const MotionBox = motion(Box);

  const sections = [
    {
      title: "Understanding Sleep Quality",
      content:
        "Sleep is an essential aspect of our daily lives, significantly impacting our health, productivity, and overall well-being. In our quest to improve sleep quality, we often explore various techniques and philosophies that offer insights into the optimal sleeping environment. Today, we delve into the ancient principles of Vastu Shastra and Feng Shui, alongside modern scientific perspectives, to uncover the best sleeping directions for rejuvenating rest.",
    },
    {
      title: "The Role of Orientation: Vastu Shastra and Feng Shui",
      content:
        "Vastu Shastra, an ancient Indian architectural science, emphasizes the alignment of structures with natural forces to promote harmony and wellness. According to Vastu principles, sleeping with your head facing south is considered most beneficial. This orientation is believed to align your body's energy with the Earth's magnetic field, leading to restful sleep and improved energy levels.\n\nFeng Shui, the Chinese art of placement, similarly advocates for specific sleeping positions to enhance health and tranquility. In Feng Shui, sleeping with your head facing east is thought to attract positivity and vitality. This approach stresses the importance of aligning your sleeping space with the flow of Chi, or life energy, ensuring a harmonious balance that fosters restorative sleep.",
    },
    {
      title: "Modern Science and Sleep Orientation",
      content:
        "While ancient traditions provide valuable insights, modern science also supports the significance of sleeping orientation. Research indicates that the position of your bed can influence sleep quality and physical health. For instance, aligning your bed with window placements might expose you to outside disturbances, potentially disrupting sleep. Therefore, taking note of the arrangement and ensuring your bedroom is free from noise and light is equally crucial.\n\nMoreover, a recent study highlighted that individuals who maintained consistent sleep schedules and positions experienced better sleep quality and higher energy levels during the day. This reinforces the idea that creating a conducive sleep environment, informed by both traditional and contemporary wisdom, is key to achieving optimal rest.",
    },
    {
      title: "JRM Construction: Designing for Better Sleep",
      content:
        "At Jrm construction, we recognize the profound effects of thoughtful design on sleep quality. Our luxury home designs across Chennai incorporate principles from Vastu Shastra and Feng Shui, ensuring that every bedroom is tailored to promote relaxation and well-being. By aligning spaces to reflect the best sleeping directions, we aim to create environments that not only fulfill aesthetic desires but also nurture health and rejuvenation.\n\nTo set up your bedroom for restful sleep, consider the placement of your bed, minimizing clutter, and using calming colors. It is essential to create a sanctuary where you can unwind after a long day. Additionally, enhancing air quality, incorporating plants, and utilizing soft lighting can elevate your sleeping experience further.\n\nIn conclusion, the orientation of your sleeping space is pivotal in enhancing your sleep quality. Whether derived from Vastu Shastra, Feng Shui, or modern science, the integration of these timeless principles can help create an environment that promotes health, boosts energy, and ultimately enhances well-being. Join us at JRM Construction to explore how we can help you design a restful retreat within your home.",
    },
  ];
  return (
    <>
      <Box p="8">
        <Flex flexDirection="column" align="center" gap="4" justify="center">
          {/* Title */}
          <Heading as="h2" size="3xl" textAlign="center">
            Vastu & Feng Shui Bedroom Tips for Better Sleep | JRM Blog
          </Heading>

          {/* Description */}
          <Text
            fontSize="md"
            lineHeight="1.8"
            textAlign="center"
            whiteSpace="pre-wrap"
            color="gray.500"
          >
            Enhance sleep quality with Vastu & Feng Shui bedroom tips. Discover
            the best sleeping directions for health {"\n"} and relaxation with
            JRM Construction’s insights. Read now!
          </Text>

          {/* Image */}
          <Box flex="1" width="100%" mt={8}>
            <Image
              src="https://images.unsplash.com/photo-1512548438457-4c9584d3766b?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxpbXByb3ZlJTIwc2xlZXAlMjBxdWFsaXR5fGVufDB8fHx8MTczMjYyNzA5OHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=984&h=417"
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

export default Blog9;
