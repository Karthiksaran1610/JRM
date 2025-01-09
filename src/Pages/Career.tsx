import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";
import { Field } from "@/Components/ui/field";
import { Box, Fieldset, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";


type JobItem = {
  value: string;
  title: string;
  description: string;
  keyResponsibilities: string[];
  qualifications: string;
};

const Career = () => {
  const items: JobItem[] = [
    {
      value: "Architect",
      title: "Lead Architect",
      description: "Responsible for creating the user interface and ensuring a smooth user experience.",
      keyResponsibilities: [
        "Develop and maintain user interfaces using React.js.",
        "Collaborate with designers to translate designs into functional components.",
        "Ensure cross-browser compatibility and performance optimization.",
      ],
      qualifications: "Bachelor's degree in Computer Science or related field, proficiency in React.js.",
    },
    {
      value: "Designer",
      title: "Junior Designer",
      description: "Responsible for managing the server, databases, and ensuring the smooth operation of the backend.",
      keyResponsibilities: [
        "Develop and maintain server-side logic using Node.js and Express.js.",
        "Design and implement RESTful APIs.",
        "Ensure database efficiency and data security.",
      ],
      qualifications: "Bachelor's degree in Computer Science, proficiency in Node.js, Express.js.",
    },
    {
      value: " Manager",
      title: "Project Manager",
      description: "Responsible for creating the user interface and ensuring a smooth user experience.",
      keyResponsibilities: [
        "Develop and maintain user interfaces using React.js.",
        "Collaborate with designers to translate designs into functional components.",
        "Ensure cross-browser compatibility and performance optimization.",
      ],
      qualifications: "Bachelor's degree in Computer Science or related field, proficiency in React.js.",
    },
    {
      value: "Architect",
      title: "Junior Architect",
      description: "Responsible for creating the user interface and ensuring a smooth user experience.",
      keyResponsibilities: [
        "Develop and maintain user interfaces using React.js.",
        "Collaborate with designers to translate designs into functional components.",
        "Ensure cross-browser compatibility and performance optimization.",
      ],
      qualifications: "Bachelor's degree in Computer Science or related field, proficiency in React.js.",
    },
    {
      value: "Engineer",
      title: "Site Engineer",
      description: "Responsible for creating the user interface and ensuring a smooth user experience.",
      keyResponsibilities: [
        "Develop and maintain user interfaces using React.js.",
        "Collaborate with designers to translate designs into functional components.",
        "Ensure cross-browser compatibility and performance optimization.",
      ],
      qualifications: "Bachelor's degree in Computer Science or related field, proficiency in React.js.",
    },
  ];

 

  return (
    <>
      <Box
        position="relative"
        w="100%"
        h={{ base: "60vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bgImage="url('https://img.freepik.com/free-photo/young-woman-working-office_1150-14801.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid')"
        bgSize="cover"
        bgRepeat="no-repeat"
        backgroundColor="gray.800"
      >
        <Box
          textAlign="center"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" mb={4}>
            Career
          </Text>
          <Text fontSize={{ base: "lg", md: "2xl" }} maxW="600px">
            Explore our Construction Services page to discover our expertise in delivering high-quality, innovative, and sustainable construction solutions.
          </Text>
        </Box>
      </Box>

      {/* Open Positions */}
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        py={10}
        bg="gray.50"
      >
        <Heading mb={8} fontSize="4xl" fontWeight="lighter">Hiring Now</Heading>
        <Box width="100%" maxW="800px" bg="white" borderRadius="md" boxShadow="lg" p={4}>
          <AccordionRoot collapsible defaultValue={["frontend"]}>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent>
                  <p><strong>Description:</strong> {item.description}</p>
                  <p><strong>Key Responsibilities:</strong></p>
                  <ul>
                    {item.keyResponsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  <p><strong>Qualifications:</strong> {item.qualifications}</p>
                  <Button
                    colorScheme="blue"
                    size="lg"
                    mt={4}
                    onClick={() => alert(`Applying for ${item.title}`)} // You can replace this with actual apply functionality
                  >
                    Apply Now
                  </Button>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Box>
      </Flex>

      {/* Training Edu & Internship */}
      <Box maxW="600px" mx="auto" p={6} borderRadius="md" boxShadow="lg" bg="white" mt={10}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        Training, Education, and Internship
      </Text>

      <Fieldset.Root size="lg" maxW="md">
        <Stack p={6}>
          {/* Name Input */}
          <Fieldset.Content>
          <Field label="Name">
            <Input name="name" placeholder="Enter your full name" />
          </Field>

          {/* Email Input */}
          <Field label="Email Address">
            <Input name="email" type="email" placeholder="Enter your email" />
          </Field>

          {/* College/University Name Input */}
          <Field label="College/University Name">
            <Input name="college" placeholder="Enter your college or university name" />
          </Field>

          {/* Degree Input */}
          <Field label="Degree">
            <Input name="degree" placeholder="Enter your degree" />
          </Field>

          {/* Country Selection */}
          {/* <Field label="Country">
            <Input as="select" name="country" placeholder="Select your country">
              <option value="UK">United Kingdom (UK)</option>
              <option value="CA">Canada (CA)</option>
              <option value="US">United States (US)</option>
            </Input>
          </Field> */}

          
          <Field label="Upload Resume">
            <Input type="file" name="resume" accept=".pdf,.doc,.docx" />
          </Field>
          </Fieldset.Content>

          
          <Button colorScheme="blue" size="lg" alignSelf="center" mt={4}>
            Submit
          </Button>
        </Stack>
      </Fieldset.Root>
    </Box>
    </>
  );
};

export default Career;
