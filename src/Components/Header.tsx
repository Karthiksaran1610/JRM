import React from "react";
import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="white" w="100%" p={4} color="white">
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        {/* Company Logo */}
        <Image
          className="logo"
          src="	https://jrmconstruction.in/assets/images/logo.png" // Replace with your logo path
          alt="Company Logo"
          boxSize={{ base: "40px", md: "60px", lg: "80px" }} // Adjust the size of the logo
          // mr={4} // Add space to the right of the logo
        />

        {/* Menu Items */}
        <Flex className="navitems" as="nav" gap={{ base: 4, md: 8 }}>
          <Link href="/" _hover={{ textDecoration: "none", color: "gray.200" }}>
            Home
          </Link>
          <Link
            href="/about"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            About
          </Link>
          <Link
            href="/Whatwedo"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            What We Do
          </Link>
          <Link
            href="/team"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Team
          </Link>
          <Link
            href="/career"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Career
          </Link>
          <Link
            href="/contact"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
