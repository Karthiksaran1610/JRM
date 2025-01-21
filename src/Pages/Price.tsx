import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '@/Components/ui/accordion';
import { Box, Grid, Heading, Text, Flex, Image, ListItem, List } from '@chakra-ui/react';


const Price = () => {
  const packages = [
    {
      title: 'Basic Package',
      normalPrice: 2250,
      offerPrice: 2150,
      topics: [
        { title: 'Design', content: 'Details about Design...' },
        { title: 'Project Development', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
      ],
    },
    {
      title: 'Medium Package',
      normalPrice: 2450,
      offerPrice: 2350,
      topics: [
        { title: 'Design', content: 'Details about Design...' },
        { title: 'Project Development', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Structure...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
      ],
    },
    {
      title: 'Premium Package',
      normalPrice: 2750,
      offerPrice: 2650,
      topics: [
        { title: 'Design', content: 'Details about Design...' },
        { title: 'Project Development', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Structure...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
      ],
    },
    {
      title: 'Customizable Package',
      normalPrice: 'Price will be change on custom package',
      offerPrice: 'Price will be change on custom package',
      topics: [
        { title: 'Design', content: <List.Root p={2}>
        <List.Item>Point 1 about Design</List.Item>
        <List.Item>Point 2 about Design</List.Item>
        <List.Item>Point 3 about Design</List.Item>
      </List.Root> },
        { title: 'Project Development', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Structure...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        { title: 'Structure', content: 'Details about Project Development...' },
        
      ],
    },
  ];

  return (
    <>
   <Box>
   <Flex align="center" ml={50} mb={50}>
      <Box mr={8}>
        <Image src="https://img.freepik.com/free-vector/construction-costs-concept-illustration_114360-7458.jpg?ga=GA1.1.1410370334.1734773987&semt=ais_hybrid" alt="Your image description" />
      </Box>
      <Box>
        <Heading size="6xl" color="gray.500">Residential Packages in JRM Construction</Heading>
      </Box>
    </Flex>
   </Box>

{/*Packages in JRM */}
    <Box p={5}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {packages.map((pkg, pkgIndex) => (
          <Box key={pkg.title} shadow="md" borderRadius="md" p={4}>
            <Heading size="3xl"  mb={4} >{pkg.title}</Heading>
            <Flex align="center" mb={4}>
              {typeof pkg.normalPrice === 'number' && typeof pkg.offerPrice === 'number' ? (
                <>
                  <Text color="black" mr={2} fontSize="4xl">₹{pkg.offerPrice}</Text>
                  <Text as="s" color="red.500" mr={2} >₹{pkg.normalPrice}</Text>
                  <Text color="green.500">
                    ({Math.round(((pkg.normalPrice - pkg.offerPrice) / pkg.normalPrice) * 100)}% off)
                  </Text>
                </>
              ) : (
                <Text fontSize="lg">{pkg.normalPrice}</Text>
              )}
            </Flex>
            <AccordionRoot collapsible>
              {pkg.topics.map((topic, index) => (
                <AccordionItem key={index} value={`item-${pkgIndex}-${index}`}>
                  <AccordionItemTrigger >
                    {topic.title}
                  </AccordionItemTrigger>
                  <AccordionItemContent>
                    <Text>{topic.content}</Text>
                  </AccordionItemContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </Box>
        ))}
      </Grid>
    </Box>

    
    </>
  );
};

export default Price;
