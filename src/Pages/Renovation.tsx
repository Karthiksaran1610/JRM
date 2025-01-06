import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Renovation = () => {
  return (
    <>
      <Box
        position="relative"
        w="100%"
        h={{ base: "60vh", md: "80vh" }} // Responsive height
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg="gray.800"
        mb={20}
      >
        {/* Motion Div for the Text */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 2, // Slower animation speed
            damping: 20, // Smoothness of the motion
          }}
        >
          <Box
            textAlign="center"
            color="white"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            <Text
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              mb={4}
            >
              Renovation
            </Text>

            <Text fontSize={{ base: "lg", md: "2xl" }} maxW="600px">
              Revamp Your Home with Expert Renovation Services Transform your
              space into something extraordinary with our tailored solutions.
            </Text>
          </Box>
        </motion.div>
      </Box>

      <Box>
        <Box w="100%" p={4} textAlign="center">
          <Text
            fontWeight="light"
            fontSize={{ base: "xl", md: "2xl" }}
            whiteSpace="pre-wrap"
            mb={4}
          >
            Renovating your home can be both thrilling and overwhelming..{"\n"}
            With years of experience in the industry, we’re experts in
            transforming spaces to suit your vision and lifestyle.
          </Text>
          <Text
            fontWeight="light"
            fontSize={{ base: "md", md: "lg" }}
            whiteSpace="pre-wrap"
            mb={4}
            color="gray.500"
          >
            Let us guide you through every stage of your renovation journe{"\n"}
            From initial design and permits to the final touches, we ensure a
            seamless and stress-free experience.
          </Text>
          <Text
            fontWeight="light"
            fontSize={{ base: "md", md: "lg" }}
            whiteSpace="pre-wrap"
            color="gray.500"
            mb={50}
          >
            Renovating your home is an exciting journey, but it can also feel
            overwhelming..{"\n"}
            With years of experience, we’re here to simplify the process and
            bring your vision to life.
          </Text>
        </Box>
      </Box>

      {/* Construction Models */}
      <Box>
        <Heading
          textAlign="center"
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={20}
          fontStyle="inherit"
          fontWeight="bold"
        >
          Renovation Models
        </Heading>
        <Box padding={{ base: "10px", md: "20px" }}>
          <Flex
            direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on larger screens
            gap={6} // Gap between text and image
            justify="flex-start"
            mb={10}
          >
            {/* Home Renovation */}
            <Box
              position="relative"
              overflow="hidden"
              width={{ base: "100%", md: "500px" }} // Full width on smaller screens, fixed width on larger ones
            >
              <Image
                src="https://img.freepik.com/free-photo/young-couple-doing-apartment-repair-together-themselves-married-man-woman-doing-home-makeover-renovation_155003-26913.jpg?t=st=1736162208~exp=1736165808~hmac=579d4b7a2a0e01a0bc7fa4ed7fc8d50cbf1336b29ce0081b4e076a03c343956b&w=996"
                alt="Residential Construction"
                aspectRatio={4 / 3}
                height="auto"
              />
            </Box>

            <Box
              flex="1"
              padding={{ base: "10px", md: "20px" }}
              textAlign={{ base: "center", md: "left" }} // Center align text on small screens, left align on larger ones
            >
              <Heading
                as="h3"
                size={{ base: "xl", md: "4xl" }}
                fontWeight="lighter"
                mb={4}
              >
                Home Renovation
              </Heading>
              <Text color="gray.600">
                "Home renovation is a powerful way to enhance the functionality,
                aesthetics, and value of your living space. Whether you're
                updating outdated features, improving energy efficiency, or
                creating a more comfortable environment, we offer expert
                solutions tailored to your needs. From concept to completion,
                our team ensures that every aspect of your home renovation is
                done to the highest standards, bringing your vision to life with
                quality craftsmanship and attention to detail. With our
                professional approach, we guarantee a seamless process, minimal
                disruption, and results that exceed expectations. "
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Commercial Renovations */}
      <Box padding={{ base: "10px", md: "20px" }}>
        <Flex
          direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on larger screens
          gap={6}
          justify="flex-start"
          mb={10}
        >
          {/* Text Section */}
          <Box
            flex="1"
            padding={{ base: "10px", md: "20px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              as="h3"
              size={{ base: "xl", md: "4xl" }}
              fontWeight="lighter"
              mb={4}
            >
              Commercial Renovation
            </Heading>
            <Text color="gray.600">
              "Commercial renovation is essential for updating and optimizing
              your business space to meet modern standards and improve
              functionality. Whether you're redesigning an office, retail space,
              or restaurant, we provide customized renovation solutions that
              enhance your workspace’s efficiency and appeal. Our team is
              skilled in handling renovations of all sizes, ensuring minimal
              disruption to your business operations while delivering
              exceptional results. With a focus on quality and timely
              completion, we help you create a professional environment that
              aligns with your brand and business goals. "
            </Text>
          </Box>

          {/* Image Section */}
          <Box
            position="relative"
            overflow="hidden"
            width={{ base: "100%", md: "500px" }} // Full width on smaller screens, fixed width on larger ones
          >
            <Image
              src="https://img.freepik.com/free-photo/full-shot-man-woman-standing-ladder_23-2149366705.jpg?t=st=1736162273~exp=1736165873~hmac=07f60bf293e8ae1809e784fcd0893c6c7480d092c97aeeb5ea5df4f64978a2c5&w=996"
              alt="Residential Construction"
              aspectRatio={4 / 3}
              height="auto"
            />
          </Box>
        </Flex>
      </Box>

      {/* Smart Home */}
      <Box padding={{ base: "10px", md: "20px" }}>
        <Flex
          direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on larger screens
          gap={6}
          justify="flex-start"
          mb={10}
        >
          {/* Image Section */}
          <Box
            position="relative"
            overflow="hidden"
            width={{ base: "100%", md: "500px" }}
          >
            <Image
              src="https://img.freepik.com/free-photo/set-designer-work-indoors_23-2149836990.jpg?t=st=1736162414~exp=1736166014~hmac=879b8231a37de230c2b8b2bebb1e3dc57cc4c3406a982168a6d7efb49adecc99&w=1060"
              alt="Residential Construction"
              aspectRatio={4 / 3}
              height="auto"
            />
          </Box>

          {/* Text Section */}
          <Box
            flex="1"
            padding={{ base: "10px", md: "20px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              as="h3"
              size={{ base: "xl", md: "4xl" }}
              fontWeight="lighter"
              mb={4}
            >
              Interior Renovations
            </Heading>
            <Text color="gray.600">
              "Interior renovation focuses on transforming the inside of your
              home or business to create a more functional, aesthetically
              pleasing, and comfortable environment. Whether it’s upgrading your
              living room, refreshing your kitchen, or redesigning office
              spaces, we offer personalized solutions that reflect your style
              and needs. Our team pays close attention to detail, ensuring
              high-quality finishes, modern designs, and a seamless renovation
              experience. From flooring to lighting and custom furnishings, we
              turn your vision into reality, enhancing the beauty and
              functionality of your interiors. "
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Construction Images */}
      <Box padding={{ base: "10px", md: "20px" }}>
        <SimpleGrid columns={{ base: 2, md: 4 }} padding={6}>
          {[
            "https://media.istockphoto.com/id/1466145748/photo/kitchen-fitters-installing-some-cabinets.jpg?s=2048x2048&w=is&k=20&c=SNjjfHaweu0lW3g22RZfqGmg4k7OA_CfUne64-88Ucw=",
            "https://media.istockphoto.com/id/991867390/photo/that-thing-is-next-on-our-housing-plan.jpg?s=612x612&w=0&k=20&c=7emEOvQq5H6RQl-g1JV1FHXSg_k64ArCIRxdY1zZjBc=",
            "https://media.istockphoto.com/id/1086130766/photo/couple-making-home-improvement-and-measuring.jpg?s=612x612&w=0&k=20&c=ilt3sGBGUIqEYY5-NrVRjbAZrrQ9gNeQoF1ViP8PGBY=",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_miTUbaqH2U7_lw-6V8JhmmAV8r1donkOw&s",
            "https://img.freepik.com/free-photo/building-construction-workers-site_23-2149124309.jpg?t=st=1736163023~exp=1736166623~hmac=3db3c58ddbca77ee44100bafec754385b5e29afc08cdb3f7ed77ca33ef063078&w=996",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirPOqkcZMpsLwl-ecc6R3AvgMxDvAKuRwXg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmatuZg0_T7ISvoepTMhrIjGoqai1d2A3jw&s",
            "https://img.freepik.com/free-photo/medium-shot-people-carrying-placard-together_23-2149328068.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://img.freepik.com/premium-photo/worker-work-hard-engineer-tired-work-factory-man-working-danger-area-employee-labor_693193-2594.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBbRPRNO53y6GgJ1BDiO7gozR6SRLmz4cOw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjJhR5_QcWQ3PpQt6P2OG6RAd5rqGRJI8IQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFpOjme6zoU0ZW2OYm_p9fOAMWyHKpBAPLA&s",
          ].map((src, index) => (
            <Box
              key={index}
              overflow="hidden"
              position="relative"
              padding="5px"
              _hover={{
                boxShadow: "xl",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <Image
                src={src}
                alt={`Construction Image ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Renovation;
