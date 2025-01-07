import { Button } from "@/Components/ui/button";
import { Field } from "@/Components/ui/field";
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box>
      {/* Contact US */}
      <Heading
        fontSize={{ base: "4xl", md: "6xl" }}
        mb={50}
        mt={100}
        ml={{ base: 0, md: 100 }}
        color="orange"
      >
        Contact US
      </Heading>
      <Text fontSize={{ base: "lg", md: "2xl" }} ml={{ base: 0, md: 110 }}>
        Our Experienced Team is
      </Text>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        ml={{ base: 0, md: 110 }}
        mb={200}
      >
        Ready to Answer Anything
      </Text>

      {/* Form Contact */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        px={{ base: 4, md: 0 }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={5}
          fontStyle="inherit"
          color="gray.500"
        >
          Have a Project in your Mind?
        </Heading>

        <Text mb={30} fontSize={{ base: "md", md: "lg" }} color="gray.400">
          Have questions, comments, or want to schedule a call? Please complete
          the contact form below, and we will get in touch shortly.
        </Text>
      </Flex>

      {/* Input Type */}
      <Box p={5} maxWidth="800px" margin="auto">
        <form>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // One column on small screens, two columns on medium and larger screens
            gap={6}
          >
            {/* Left Column */}
            <Field label="Name" required>
              <Input
                placeholder="Enter your name"
                size="xl" // Larger size
                fontSize={{ base: "md", md: "lg" }} // Larger font size
                width="100%"
              />
            </Field>

            <Field label="Company" required>
              <Input
                placeholder="Enter your company"
                size="xl" // Larger size
                fontSize={{ base: "md", md: "lg" }} // Larger font size
                width="100%"
              />
            </Field>

            {/* Right Column */}
            <Field label="Email" required>
              <Input
                placeholder="Enter your email"
                size="xl" // Larger size
                fontSize={{ base: "md", md: "lg" }} // Larger font size
                width="100%"
              />
            </Field>

            <Field label="Phone" required>
              <Input
                placeholder="Enter your phone number"
                size="xl" // Larger size
                fontSize={{ base: "md", md: "lg" }} // Larger font size
                width="100%"
              />
            </Field>

            {/* Full-Width Message Input */}
            <GridItem colSpan={2}>
              <Field label="Message" required>
                <Textarea
                  placeholder="Enter your message"
                  size="xl" // Larger size
                  fontSize={{ base: "md", md: "lg" }} // Larger font size
                  width="100%"
                  height="150px" // Added height for larger textarea
                />
              </Field>
            </GridItem>
          </Grid>

          <Center mt={6}>
            <Button colorScheme="blue" type="submit" size="xl" mb={20}>
              {" "}
              {/* Larger button size */}
              Submit
            </Button>
          </Center>
        </form>
      </Box>

      {/* Google Map */}
      <Box
        width="100%"
        maxWidth="100%"
        overflow="hidden"
        height="400px"
        mb={10}
      >
        <AspectRatio ratio={16 / 9} width="100%" height="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.7655462120233!2d80.23873097484002!3d12.894862887413458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dc5db6042dd%3A0xbdae6af9ef79614a!2sJRM%20Construction%20%7C%20Best%20Construction%20Company%20in%20Chennai%20%7C%20Architecture%20Construction%20%7C%20ECR!5e1!3m2!1sen!2sin!4v1735887917178!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Contact;
