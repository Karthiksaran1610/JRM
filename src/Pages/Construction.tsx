import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Construction = () => {
  return (
    <>
      <Box
        position="relative"
        w="100%"
        h="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden" // Prevents overflow during animation
        bg="gray.800" // Optional: Set background color (you can remove or modify this)
        mb={20}
      >
        {/* Motion Div for the Text */}
        <motion.div
          initial={{ x: "-100%" }} // Starts off-screen to the left
          animate={{ x: "0" }} // Moves to its final position
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 2, // Slower animation speed
            damping: 20, // Smoothness of the motion
          }}
        >
          <Box
            textAlign="center" // Center the text
            color="white"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)" // Text shadow for better readability
          >
            {/* Construction Title */}
            <Text fontSize="6xl" fontWeight="bold" mb={4}>
              Construction
            </Text>

            {/* Description Text */}
            <Text fontSize="2xl" maxW="600px">
              Explore our Construction Services page to discover our expertise
              in delivering high-quality, innovative, and sustainable
              construction solutions.
            </Text>
          </Box>
        </motion.div>
      </Box>
      <Box>
        <Box w="100%" p={4} textAlign="center">
          <Text
            fontWeight="light"
            fontSize="2xl"
            whiteSpace="pre-wrap" // Allows line breaks
            mb={4}
          >
            Building your dream home is a truly exciting prospect, but it can
            also be daunting.{"\n"}
            With extensive experience under our belt, we know a thing or two
            about the process.
          </Text>
          <Text
            fontWeight="light"
            fontSize="lg"
            whiteSpace="pre-wrap" // Allows line breaks
            mb={4}
            color="gray.500"
          >
            Let us support you through every step. Our tailored service
            encompasses everything from planning{"\n"}
            permission and engaging an architect, right through to the
            construction phase itself.
          </Text>
          <Text
            fontWeight="light"
            fontSize="lg"
            whiteSpace="pre-wrap" // Allows line breaks
            color="gray.500"
            mb={50}
          >
            Building your dream home is a truly exciting prospect, but it can
            also be daunting.{"\n"}
            With extensive experience under our belt, we know a thing or two
            about the process.
          </Text>
        </Box>
      </Box>

      <Box>
        <Heading
          textAlign="center"
          fontSize="4xl"
          mb={20}
          fontStyle="inherit"
          fontWeight="bold"
        >
          PROJECTS
        </Heading>
       
      
      </Box>
    </>
  );
};

export default Construction;
