import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Container,
  SimpleGrid,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { MdCall, MdEmail, MdLocationCity } from "react-icons/md";

const Footer = () => {
  return (
    <Box bg="#0c0c0c">
      <Container maxW={1300}>
        <SimpleGrid
          textAlign={{ lg: "start", base: "center" }}
          p="30px"
          py="60px"
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        >
          <Box>
            <Heading pb="20px" color="white">
              About Us
            </Heading>
            <Image
              m={{ base: "auto", lg: "0" }}
              src="https://jrmconstruction.in/assets/images/logo.png"
              alt="JRM Construction"
            ></Image>
            <Text pt="15px" pr={{ lg: "40px", base: "0" }} color="gray">
              JRM Construction delivers quality and innovative building
              solutions with integrity and excellence.
            </Text>
          </Box>

          {/*Explore*/}
          <Box>
            <Heading color="white">Explore</Heading>
            <Grid pt="40px" color="gray">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/whatwedo">Whatwedo</Link>
              <Link href="/team">Team</Link>
              <Link href="/career">Career</Link>
              <Link href="/contact">Contact</Link>
            </Grid>
          </Box>

          {/*Follow us*/}
          <Box>
            <Heading color="white">Follow Us</Heading>
            <Grid pt="40px" color="white">
              <Link href="https://www.facebook.com/p/JRM-Construction-100089640972724/">
                Facebook
              </Link>
              <Link href="https://www.linkedin.com/company/jrmconstruction/?trk=ppro_cprof&originalSubdomain=in">
                Linkedin
              </Link>
              <Link href="https://www.instagram.com/jrm__construction/">
                Instagram
              </Link>
              <Link href="https://www.youtube.com/channel/UCSyf3td807NHmOOz3nMqNwA">
                Youtube
              </Link>
            </Grid>
          </Box>
          <Box>
            {/*Contact*/}
            <Heading color="white">Contact Us</Heading>

            <Grid pt="40px" color="white">
              <Flex align="center" mb={3}>
                <MdCall size={24} style={{ marginRight: "8px" }} />
                <Text>+91 72000 94121</Text>
              </Flex>

              <Flex align="center" mb={3}>
                <MdEmail size={24} style={{ marginRight: "8px" }} />
                <Link href="mailto:enquiries@jrmconstruction.in" color="white">
                  <Text>enquiries@jrmconstruction.in</Text>
                </Link>
              </Flex>

              <Flex align="center" mb={3}>
                <MdLocationCity size={24} style={{ marginRight: "8px" }} />
                <Text>Adityaram Township,Sholinganallur, Chennai – 600115</Text>
              </Flex>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
