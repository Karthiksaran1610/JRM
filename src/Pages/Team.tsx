import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const Team = () => {
  interface TeamMemberProps {
    src: string;
    alt: string;
    name: string;
    position: string;
  }

  const TeamMember: React.FC<TeamMemberProps> = ({
    src,
    alt,
    name,
    position,
  }) => (
    <MotionBox
      textAlign="center"
      mb={10}
      whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={src}
        alt={alt}
        borderRadius="full"
        boxSize="200px"
        objectFit="cover"
        bg="gray.200"
        mx="auto"
        mb="4"
      />
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm" color="gray.500">
        {position}
      </Text>
    </MotionBox>
  );
  const teamMembers = [
    {
      src: "https://jrmconstruction.in/assets/images/rebecca.jpg",
      alt: "Rebecca Malswami",
      name: "Rebecca Malswami",
      position: "Founder",
    },
    {
      src: "https://jrmconstruction.in/assets/images/team-1.jpg",
      alt: "Manikandan",
      name: "Manikandan",
      position: "General Manager",
    },
    {
      src: "https://jrmconstruction.in/assets/images/team-7.jpg",
      alt: "Ar. Rajeswari Bai",
      name: "Ar. Rajeswari Bai",
      position: "Principle Architect",
    },
    {
      src: "	https://jrmconstruction.in/assets/images/kishore.jpg",
      alt: "Kishore D",
      name: "Kishore D",
      position: "Project Manager",
    },
    {
      src: "https://jrmconstruction.in/assets/images/anudevi.jpg",
      alt: "Anudevi J",
      name: "Anudevi J",
      position: "Structural Designer",
    },
    {
      src: "	https://jrmconstruction.in/assets/images/aravind.jpg",
      alt: "Aravind Kumar B",
      name: "Aravind Kumar B",
      position: "Site Engineer",
    },
    {
      src: "https://jrmconstruction.in/assets/images/vignesh.png",
      alt: "Vignesh S",
      name: "Vignesh S",
      position: "Automation Engineer",
    },
    {
      src: "	https://jrmconstruction.in/assets/images/tharani.jpg",
      alt: "Tharani S",
      name: "Tharani S",
      position: "Lead Architect",
    },
    {
      src: "	https://jrmconstruction.in/assets/images/team-3.jpg",
      alt: "Jeyasurya V",
      name: "Jeyasurya V",
      position: "Architect",
    },
    {
      src: "	https://jrmconstruction.in/assets/images/Ar%20Dhatchayini.png",
      alt: "Dhatchayani",
      name: "Dhatchayani",
      position: "Junior Architect",
    },
    {
      src: "https://jrmconstruction.in/assets/images/suganthi.jpg",
      alt: "Suganthi G",
      name: "Suganthi G",
      position: "Designer",
    },
    {
      src: "https://jrmconstruction.in/assets/images/team-4.jpg",
      alt: "Baskar A",
      name: "Baskar A",
      position: "Office Admin",
    },
    {
      src: "https://jrmconstruction.in/assets/images/sarath.jpg",
      alt: "Sarath Kumar K",
      name: "Sarath Kumar K",
      position: "Senior Site Engineer",
    },
    {
      src: "https://jrmconstruction.in/assets/images/sasi.jpg",
      alt: "Sasi Kumar K",
      name: "Sasi Kumar K",
      position: "Senior Site Engineer",
    },
    {
      src: "https://jrmconstruction.in/assets/images/t3.jpg",
      alt: "Ajith Kumar R",
      name: "Ajith Kumar R",
      position: "Site Engineer",
    },
    {
      src: "https://jrmconstruction.in/assets/images/viji.jpg",
      alt: "Viji J",
      name: "Viji J",
      position: "Site Engineer",
    },
    {
      src: "https://jrmconstruction.in/assets/images/sujith.jpg",
      alt: "Sujith M",
      name: "Sujith M",
      position: "Site Engineer",
    },
  ];
  return (
    <>
      <Box>
        {/* Heading Image Section */}
        <Image
          src="https://plus.unsplash.com/premium_photo-1661310027237-8f4ed9ebc6ee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Team Image"
          height="700px"
          width="1500px"
          mb="30px"
        />
      </Box>

      {/*Team Image SEction*/}

      <Box>
        {/* Heading Section */}
        <Heading as="h1" size="4xl" textAlign="center" m="10px" mb="20px">
          Our Team
        </Heading>

        {/* Responsive Grid for Team Members */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} p="40px">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              src={member.src}
              alt={member.alt}
              name={member.name}
              position={member.position}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Team;
