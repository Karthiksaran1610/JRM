import React, { useState } from "react";
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
  // Importing the useToast hook
} from "@chakra-ui/react";
import { toaster } from "@/Components/ui/toaster";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const companyRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^[789]\d{9}$/;
  const messageRegex = /^[\s\S]+$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    if (!nameRegex.test(formData.name)) {
      formErrors.name = "Name should contain only alphabets and spaces.";
      isValid = false;
    } else {
      formErrors.name = "";
    }

    if (!companyRegex.test(formData.company)) {
      formErrors.company = "Company name should contain only alphabets and spaces.";
      isValid = false;
    } else {
      formErrors.company = "";
    }

    if (!emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
      isValid = false;
    } else {
      formErrors.email = "";
    }

    if (!phoneRegex.test(formData.phone)) {
      formErrors.phone = "Phone number should start with 7, 8, or 9 and contain 10 digits.";
      isValid = false;
    } else {
      formErrors.phone = "";
    }

    if (!messageRegex.test(formData.message)) {
      formErrors.message = "Message cannot be empty.";
      isValid = false;
    } else {
      formErrors.message = "";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      toaster.create({
        description: "Your details have been successfully submitted.",
        type: "success",
        duration: 3000,
      });

      console.log("Form Details:", formData);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };


  return (
    <Box>
      {/* Contact US */}
      <Box
        position="relative"
        w="100%"
        h={{ base: "60vh", md: "80vh" }} // Responsive height
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bgSize="cover"
        bgRepeat="no-repeat"
        mb={20}
        backgroundColor="gray.800" // Fallback color
      >
        <Box
          textAlign="center"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" mb={4}>
            Contact Us
          </Text>

          <Text fontSize={{ base: "lg", md: "2xl" }} maxW="600px">
            Our experienced team will contact you
          </Text>
        </Box>
      </Box>

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
        <form onSubmit={handleSubmit}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // One column on small screens, two columns on medium and larger screens
            gap={6}
          >
            {/* Left Column */}
            <Field label="Name" required>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                size="xl" // Larger size
                fontSize={{ base: "md", md: "lg" }} // Larger font size
                width="100%"
              />
              {errors.name && <Text color="red.500">{errors.name}</Text>}
            </Field>

            <Field label="Company" required>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company"
                size="xl" // Larger size
                fontSize={{ base: "md", md: "lg" }} // Larger font size
                width="100%"
              />
              {errors.company && <Text color="red.500">{errors.company}</Text>}
            </Field>

            {/* Right Column */}
            <Field label="Email" required>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                size="xl" // Larger size
                fontSize={{ base: "md", md: "lg" }} // Larger font size
                width="100%"
              />
              {errors.email && <Text color="red.500">{errors.email}</Text>}
            </Field>

            <Field label="Phone" required>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                size="xl" // Larger size
                fontSize={{ base: "md", md: "lg" }} // Larger font size
                width="100%"
              />
              {errors.phone && <Text color="red.500">{errors.phone}</Text>}
            </Field>

            {/* Full-Width Message Input */}
            <GridItem colSpan={2}>
              <Field label="Message" required>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  size="xl" // Larger size
                  fontSize={{ base: "md", md: "lg" }} // Larger font size
                  width="100%"
                  height="150px" // Added height for larger textarea
                />
                {errors.message && (
                  <Text color="red.500">{errors.message}</Text>
                )}
              </Field>
            </GridItem>
          </Grid>

          <Center mt={6}>
            <Button colorScheme="blue" type="submit" size="xl" mb={20}>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.7655462120233!2d80.23873097484002!3d12.894862887413458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dc5db6042dd%3A0xbdae6af9ef79614a!2sJRM%20Construction%20%7C%20Best%20Construction%20Company%20in%20Chennai%20%7C%20Architecture%20Construction%20%7C%20ECR!5e1!3m2!1sen!2sin!4v1736744264726!5m2!1sen!2sin"
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
