import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";
import { CloseButton } from "@/Components/ui/close-button";
import { Field } from "@/Components/ui/field";
import {
  Box,
  Fieldset,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

{
  /*Hiring Now*/
}
type JobItem = {
  value: string;
  title: string;
  description: string;
  keyResponsibilities: string[];
  qualifications: string;
};

{
  /*Hiring Now form */
}
type FormData = {
  name: string;
  email: string;
  experience: string;
  qualification: string;
  noticePeriod: string;
  resume: File | null;
};

const Career = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  {
    /*Hiring Now Form*/
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    experience: "",
    qualification: "",
    noticePeriod: "",
    resume: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    experience: "",
    qualification: "",
    noticePeriod: "",
    resume: "",
  });

  {
    /*Training,Edu & Internship*/
  }
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    college: "",
    degree: "",
    resume: null,
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    college: "",
    degree: "",
    resume: "",
  });

  {
    /*Hiring Now*/
  }
  const handleInputChange = (value: string, field: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files ? e.target.files[0] : null,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      experience: "",
      qualification: "",
      noticePeriod: "",
      resume: "",
    };

    // Name validation: max 50 characters, no numbers
    if (!/^[A-Za-z\s]+$/.test(formData.name) || formData.name.length > 50) {
      newErrors.name =
        "Name should only contain letters and be under 50 characters.";
    }

    // Email validation: should be in proper email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Experience validation: must be between 0 and 25 years
    const experienceNumber = Number(formData.experience); // Convert to number
    if (
      isNaN(experienceNumber) ||
      experienceNumber < 0 ||
      experienceNumber > 25
    ) {
      newErrors.experience = "Experience must be between 0 and 25 years.";
    }

    // Qualification validation: string type and required
    if (!formData.qualification) {
      newErrors.qualification = "Qualification is required.";
    }

    // Notice Period validation: required
    if (!formData.noticePeriod) {
      newErrors.noticePeriod = "Notice period is required.";
    }

    // Resume validation: must be uploaded
    if (!formData.resume) {
      newErrors.resume = "Please upload your resume.";
    } else if (!/\.(pdf|doc|docx)$/i.test(formData.resume.name)) {
      newErrors.resume =
        "Please upload a valid resume file (.pdf, .doc, .docx).";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      // Optionally clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        experience: "",
        qualification: "",
        noticePeriod: "",
        resume: null,
      });
      setFormVisible(false); // Close the form after submission
    }
  };

  const items: JobItem[] = [
    {
      value: "Architect",
      title: "Lead Architect",
      description:
        "Responsible for creating the user interface and ensuring a smooth user experience.",
      keyResponsibilities: [
        "Develop and maintain user interfaces using React.js.",
        "Collaborate with designers to translate designs into functional components.",
        "Ensure cross-browser compatibility and performance optimization.",
      ],
      qualifications:
        "Bachelor's degree in Computer Science or related field, proficiency in React.js.",
    },
    {
      value: "Designer",
      title: "Junior Designer",
      description:
        "Responsible for managing the server, databases, and ensuring the smooth operation of the backend.",
      keyResponsibilities: [
        "Develop and maintain server-side logic using Node.js and Express.js.",
        "Design and implement RESTful APIs.",
        "Ensure database efficiency and data security.",
      ],
      qualifications:
        "Bachelor's degree in Computer Science, proficiency in Node.js, Express.js.",
    },
    {
      value: " Manager",
      title: "Project Manager",
      description:
        "Responsible for creating the user interface and ensuring a smooth user experience.",
      keyResponsibilities: [
        "Develop and maintain user interfaces using React.js.",
        "Collaborate with designers to translate designs into functional components.",
        "Ensure cross-browser compatibility and performance optimization.",
      ],
      qualifications:
        "Bachelor's degree in Computer Science or related field, proficiency in React.js.",
    },
    {
      value: "Architect",
      title: "Junior Architect",
      description:
        "Responsible for creating the user interface and ensuring a smooth user experience.",
      keyResponsibilities: [
        "Develop and maintain user interfaces using React.js.",
        "Collaborate with designers to translate designs into functional components.",
        "Ensure cross-browser compatibility and performance optimization.",
      ],
      qualifications:
        "Bachelor's degree in Computer Science or related field, proficiency in React.js.",
    },
    {
      value: "Engineer",
      title: "Site Engineer",
      description:
        "Responsible for creating the user interface and ensuring a smooth user experience.",
      keyResponsibilities: [
        "Develop and maintain user interfaces using React.js.",
        "Collaborate with designers to translate designs into functional components.",
        "Ensure cross-browser compatibility and performance optimization.",
      ],
      qualifications:
        "Bachelor's degree in Computer Science or related field, proficiency in React.js.",
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
            Explore our Construction Services page to discover our expertise in
            delivering high-quality, innovative, and sustainable construction
            solutions.
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
        <Heading mb={8} fontSize="4xl" fontWeight="lighter">
          Hiring Now
        </Heading>
        <Box
          width="100%"
          maxW="800px"
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          p={4}
        >
          <AccordionRoot collapsible defaultValue={["frontend"]}>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent>
                  <p>
                    <strong>Description:</strong> {item.description}
                  </p>
                  <p>
                    <strong>Key Responsibilities:</strong>
                  </p>
                  <ul>
                    {item.keyResponsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Qualifications:</strong> {item.qualifications}
                  </p>
                  <Button
                    onClick={() => setFormVisible(true)}
                    colorScheme="blue"
                  >
                    Apply Now{" "}
                  </Button>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Box>
      </Flex>

      {/* Form elements*/}
      {isFormVisible && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0,0,0,0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="lg"
            width="100%"
            maxW="500px"
          >
            <CloseButton
              position="absolute"
              top={2}
              right={2}
              onClick={() => setFormVisible(false)}
            />
            <Heading mb={4} fontSize="2xl" textAlign="center">
              Application Form
            </Heading>
            <form onSubmit={handleSubmit}>
              <Stack p={4}>
                <Field label="Name">
                  <Input
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e.target.value, "name")}
                  />
                  {errors.name && <Text color="red.500">{errors.name}</Text>}
                </Field>

                <Field label="Email">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e.target.value, "email")}
                  />
                  {errors.email && <Text color="red.500">{errors.email}</Text>}
                </Field>

                <Field label="Experience (years)">
                  <Input
                    type="number"
                    name="experience"
                    placeholder="Enter years of experience"
                    value={formData.experience}
                    onChange={(e) =>
                      handleInputChange(e.target.value, "experience")
                    }
                  />
                  {errors.experience && (
                    <Text color="red.500">{errors.experience}</Text>
                  )}
                </Field>

                <Field label="Qualification">
                  <Input
                    name="qualification"
                    placeholder="Enter your qualification"
                    value={formData.qualification}
                    onChange={(e) =>
                      handleInputChange(e.target.value, "qualification")
                    }
                  />
                  {errors.qualification && (
                    <Text color="red.500">{errors.qualification}</Text>
                  )}
                </Field>

                <Field label="Notice Period">
                  <Input
                    name="noticePeriod"
                    placeholder="Enter notice period"
                    value={formData.noticePeriod}
                    onChange={(e) =>
                      handleInputChange(e.target.value, "noticePeriod")
                    }
                  />
                  {errors.noticePeriod && (
                    <Text color="red.500">{errors.noticePeriod}</Text>
                  )}
                </Field>

                <Field label="Upload Resume">
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                  {errors.resume && (
                    <Text color="red.500">{errors.resume}</Text>
                  )}
                </Field>

                <Button colorScheme="blue" type="submit">
                  Submit Application
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      )}

      {/* Training Edu & Internship */}
      <Box
        maxW="600px"
        mx="auto"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        bg="white"
        mt={10}
      >
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
          Training, Education, and Internship
        </Text>

        <Fieldset.Root size="lg" maxW="md">
          <Stack p={6}>
            <Fieldset.Content>
              <Field label="Name">
                <Input name="name" placeholder="Enter your full name" />
              </Field>

              <Field label="Email Address">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </Field>

              <Field label="College/University Name">
                <Input
                  name="college"
                  placeholder="Enter your college or university name"
                />
              </Field>

              <Field label="Degree">
                <Input name="degree" placeholder="Enter your degree" />
              </Field>

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
