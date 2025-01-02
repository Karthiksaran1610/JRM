// import { Button } from "@/Components/ui/button";
// import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { Field } from "@/Components/ui/field";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box>
      {/*Contact US*/}
      <Heading fontSize="6xl" mb={50} mt={100} ml={100} color={"orange"}>
        Contact US
      </Heading>
      <Text fontSize="2xl" ml={110}>
        Our Experienced Team is
      </Text>
      <Text fontSize="2xl" ml={110} mb={200}>
        Ready to Answer Anything
      </Text>

      {/*Form Contact*/}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        <Heading fontSize="4xl" mb={5} fontStyle="inherit" color="gray.500">
          Have a Project in your Mind?
        </Heading>

        <Text mb={60} color="gray.400">
          Have questions, comments, or want to schedule a call? Please complete
          the contact form below, and we will get in touch shortly.
        </Text>
      </Flex>

      {/*Input Type*/}
      <Box p={5} maxWidth="800px" margin="auto">
        <Heading textAlign="center" mb={6}>
          Contact Us
        </Heading>

        <form>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {/* Left Column  */}
            <Field
              label="Email"
              required
              helperText="We'll never share your email."
            >
              <Input placeholder="Enter your email" />
            </Field>

            <Field
              label="Email"
              required
              helperText="We'll never share your email."
            >
              <Input placeholder="Enter your email" />
            </Field>

            {/* Right Column */}
            <Field
              label="Email"
              required
              helperText="We'll never share your email."
            >
              <Input placeholder="Enter your email" />
            </Field>
            <Field
              label="Email"
              required
              helperText="We'll never share your email."
            >
              <Input placeholder="Enter your email" />
            </Field>
          </Grid>

           <Box mt={4}>
            <Checkbox defaultChecked>I'm not a robot</Checkbox>
          </Box> 

          <Center mt={6}>
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
