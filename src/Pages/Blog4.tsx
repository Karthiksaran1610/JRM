import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Blog4 = () => {
  const MotionBox = motion(Box);

  const sections = [
    {
      title: "Understanding Vastu Shastra and Its Importance",
      content:
        "Vastu Shastra is an ancient Indian architectural science that dates back thousands of years. It serves as a comprehensive guide for designing spaces that promote harmony between the natural elements and the inhabitants. This system is based on the belief that the physical environment can significantly influence the well-being, success, and happiness of the occupants within a structure. Grounded in spiritual and philosophical principles, Vastu emphasizes the flow of energy, often referred to as 'prana' or life force, to create positive living experiences.\n\nAt its core, Vastu Shastra elucidates that the arrangement of spaces within a building can either amplify or hinder the flow of this vital energy. The four cardinal directions—North, South, East, and West—play a critical role in determining how energy interacts with the structure. Each direction corresponds to specific natural elements such as earth, water, fire, and air, which are pivotal in crafting a balanced environment. For instance, a pooja room positioned in the northeast is regarded as particularly auspicious, as this direction is believed to attract divine energy, enhancing spiritual connectivity and tranquility.\n\nThe historical context of Vastu Shastra showcases its evolving relevance in contemporary home design. While rooted in traditional practices, modern architects and home designers increasingly incorporate Vastu principles to foster environments that encourage wellness and positivity. Today, many individuals acknowledge the importance of having a Vastu-compliant living space, particularly in crucial areas like the pooja room, where spiritual activities take place. A well-positioned pooja room not only enhances the ambiance but also serves as a sanctum of peace, offering a space for reflection and meditation. Thus, understanding Vastu Shastra and its significance can greatly influence the overall energy and harmony in one’s home.",
    },
    {
      title: "Ideal Directions for Your Pooja Room",
      content:
        "Creating a Vastu-compliant pooja room is essential for fostering a harmonious environment that supports spiritual practices and connects individuals with divine energies. According to Vastu Shastra, optimal placements of the pooja room can significantly enhance the atmosphere and influence the overall well-being of the household. It is widely recommended to position the pooja altar in the East or North direction. The East is particularly auspicious as it allows natural sunlight to enter during the morning hours, symbolizing positivity and enlightenment. On the other hand, the North direction is associated with wealth and prosperity, contributing to the spiritual enrichment of the home.\n\nWhen setting up a pooja room, ensuring that the idol or image of deities faces East is also advantageous. This positioning encourages an alignment with positive energy flow and facilitates a deeper connection during prayer. Conversely, should the pooja room be placed in a South-facing direction, it may lead to unfavorable outcomes. Such placements are believed to bring about feelings of negativity, stress, and disruption, which can adversely affect the family's spiritual practices and overall harmony. Similarly, pooja rooms located in the West may lead to difficulties in financial matters and health issues.\n\nAdditionally, it is crucial to avoid placing the pooja altar near washrooms or bedrooms, as these areas can disrupt the sacred energy. Opting for a dedicated room or a clearly defined space exclusively for spiritual activities is highly recommended. Through thoughtful planning and consideration of Vastu guidelines, individuals can create a serene pooja room that fosters positivity and spiritual growth. By carefully selecting the right direction for this sacred space, families can cultivate a stronger bond with their spiritual practices, thereby enhancing their overall quality of life.",
    },
    {
      title: "Setting Up the Pooja Room: Design and Decor Tips",
      content:
        "Creating a pooja room that adheres to Vastu principles involves thoughtful design choices and decor elements that foster a serene environment. First and foremost, selecting the right materials for flooring and furnishings is crucial. Natural materials such as wood and stone are preferred, as they promote a sense of tranquility and connection with nature. Avoid synthetic materials that may disrupt the energy flow within the space.\n\nColor schemes play a significant role in establishing a peaceful atmosphere. Soft, muted tones such as whites, creams, and pastel shades are ideal, as they enhance light and promote calmness. Incorporating earthy colors can also resonate well, provided they are balanced and not overwhelming. It is advised to avoid dark colors, as they may create a heavy feeling within the pooja room.\n\nFurniture placement should reflect the principles of Vastu, including the placement of the altar or mandir. The mandir should ideally face the east or north direction to align with positive energy flow. Maintaining cleanliness and organization within the space is essential for spiritual clarity. Regularly decluttering and ensuring that all items have a designated place fosters an environment conducive to meditation and prayer.\n\nWhen it comes to decorations, incorporating symbols and idols that resonate with your spiritual practices can add personal significance. Ensure that these elements are positioned thoughtfully, respecting Vastu guidelines to maintain harmony. It is important to avoid overcrowding the space with excessive decorations, as simplicity often aids in focus and devotion.\n\nLastly, consider incorporating natural elements such as plants, which not only improve air quality but also enhance positivity. By carefully selecting materials, colors, and decor, one can create a pooja room that not only complies with Vastu but also serves as a sanctuary for spiritual practice. Ultimately, a well-designed pooja room will embody peace and encourage a deep spiritual connection.",
    },
    {
      title: "JRM Construction: Your Partner in Vastu-Compliant Designs",
      content:
        "Creating a Vastu-compliant pooja room is not just about aesthetics; it is integral to promoting positive energy and harmony within a home. JRM Construction has established itself as a leading expert in designing residential spaces that align with Vastu principles. Our approach combines years of experience with a deep understanding of how spatial arrangements can influence well-being and tranquility. We focus on ensuring that every element of your pooja room fosters a sense of peace and spiritual fulfillment.\n\nOur team consists of skilled professionals who are well-versed in Vastu Shastra, offering tailored designs that cater to both your personal preferences and the fundamental Vastu guidelines. For example, we have successfully transformed numerous homes by carefully selecting the ideal locations for pooja rooms—taking into account factors such as cardinal directions, natural light, and airflow. These considerations ensure not only the beauty of the space but also enhance the flow of positive energy, which is central to Vastu.\n\nWe have received numerous testimonials from satisfied clients who have experienced a remarkable change in the ambiance of their homes after collaborating with us. One specific case involved a family whose once cramped and dark pooja room was reimagined into a spacious and airy retreat filled with natural light, dramatically improving their spiritual practices. Another client highlighted the importance of our guidance in selecting the perfect location for their pooja room, which has since become a cherished area for family gatherings and worship.\n\nFor those considering a Vastu-compliant pooja room, we invite you to explore our residential services page. Learn more about how JRM Construction can help you create a harmonious space that aligns with Vastu principles, contributing to a positive and inviting atmosphere in your home.",
    },
  ];
  return (
    <>
    <Box p={{ base: "4", md: "8" }}>
      <Flex
        flexDirection="column"
        align="center"
        gap={{ base: "4", md: "6" }}
        justify="center"
      >
        {/* Title */}
        <Heading 
          as="h2" 
          size={{ base: "xl", md: "3xl" }} 
          textAlign="center"
        >
          Best Placement for Pooja Rooms as Per Vastu
        </Heading>

        {/* Description */}
        <Text
          fontSize={{ base: "sm", md: "md" }}
          lineHeight="1.8"
          textAlign="center"
          whiteSpace="pre-wrap"
          color="gray.500"
        >
          Find the ideal location for pooja rooms according to Vastu. Discover
          placement tips and guidelines with JRM Construction’s expertise.
        </Text>

        {/* Image */}
        <Box flex="1" width="100%" mt={{ base: 6, md: 8 }}>
          <Image
            src="https://images.unsplash.com/photo-1598194809345-08b8ed2dd30a?auto=format&fit=crop&w=984&h=562"
            alt="Custom Home Design"
            borderRadius="md"
            width="100%"
            height="auto"
            mb={{ base: 8, md: 15 }}
          />
        </Box>
      </Flex>
    </Box>

    {/*Section Box*/}
    <Box p={{ base: "4", md: "8" }}>
      <Flex
        flexDirection="column"
        gap={{ base: "6", md: "8" }}
        mt={{ base: "6", md: "8" }}
        ml={{ base: "4", md: "40" }}
        mr={{ base: "4", md: "40" }}
      >
        {sections.map((section, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.9 }}
          >
            <Heading
              fontSize={{ base: "xl", md: "3xl" }} // Adjust for responsive design
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

export default Blog4;
