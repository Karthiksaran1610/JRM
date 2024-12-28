import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  Icon,
  Link,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={8} px={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        maxW="1200px"
        mx="auto"
      >
        {/* Left: Logo and Address */}
        <VStack align="flex-start" p={4} mb={{ base: 6, md: 0 }}>
          <Image
            src="https://jrmconstruction.in/assets/images/logo.png"
            alt="Company Logo"
            boxSize="60px"
          />
          <Text fontSize="sm">
            1st floor, PHASE-1, No 1A, Kalaignar Karunanidhi Salai, <br />
            Adityaram Township, Sholinganallur, <br />
            Chennai, Tamil Nadu 600115
          </Text>
        </VStack>

        {/* Middle: Explore Links */}
        <VStack align="center" p={4} mb={{ base: 6, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Explore
          </Text>
          <HStack p={6} color={"white"}>
            <Link
              href="#home"
              _hover={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
            <Link
              href="#about"
              _hover={{ textDecoration: "none", color: "gray.300" }}
            >
              About
            </Link>
            <Link
              href="#what-we-do"
              _hover={{ textDecoration: "none", color: "gray.300" }}
            >
              What We Do
            </Link>
            <Link
              href="#team"
              _hover={{ textDecoration: "none", color: "gray.300" }}
            >
              Team
            </Link>
            <Link
              href="#career"
              _hover={{ textDecoration: "none", color: "gray.300" }}
            >
              Career
            </Link>
            <Link
              href="#contact"
              _hover={{ textDecoration: "none", color: "gray.300" }}
            >
              Contact
            </Link>
          </HStack>
        </VStack>

        {/* Right: Social Media Links */}
        <HStack p={4}>
          <Link href="https://www.instagram.com/jrm__construction?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <Icon boxSize={6} color={"white"}>
              <FaInstagram />
            </Icon>
          </Link>
          <Link href="https://youtube.com/@jrmconstruction?si=F_b-KsuQhfhDZNHL">
            <Icon boxSize={6} color={"white"}>
              <FaYoutube />
            </Icon>
          </Link>
          <Link href="https://www.linkedin.com/company/jrmconstruction/?trk=ppro_cprof&originalSubdomain=in">
            <Icon boxSize={6} color={"white"}>
              <FaLinkedin />
            </Icon>
          </Link>
          <Link href="https://whatsapp.com">
            <Icon boxSize={6} color={"white"}>
              <FaWhatsapp />
            </Icon>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
