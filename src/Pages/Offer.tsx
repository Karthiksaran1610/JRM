import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/Components/ui/accordion";

import {
  Box,
  Grid,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";

const Offer = () => {
  const packages = [
    {
      title: "Standard",
      price: "2250",
      description: [
        "RCC framed structure",
        "Basic materials",
        "RCC foundation & roof",
      ],
      accordionDetails: [
        { title: "Design", details: ["2D Floor Plan"] },
        {
          title: "Structural ",
          details: [
            "Basement height: Upto 2 feet.",
            "Steel: Any ISI brand.",
            "Aggregates: 20mm & 40mm.",
            "Blocks: 6 inch for Exterior Wall & 4 inch for Interior Wall or",
            "Bricks: 9 inch for Exterior Wall & 4.5 inch for Interior Wall (Rs.20/sft extra during rainy season due to increase in bricks price)",
            "Cement: Any ISI brand",
            "M Sand: Blockwork & P Sand: Plastering",
            "RCC Design Mix: M20",
            "Ceiling Height: 10 Feet",
          ],
        },
        {
          title: "Kitchen",
          details: [
            "Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 35 Per Sq ft",
            "Main Sink Faucet Upto 1500 & ISI Marked",
            "Kitchen Sink: Stainless Steel Upto 2000 Rs",
            "Kitchen Granite Slab: 20 mm Thick Upto 80 Rs per Sq ft",
          ],
        },
        {
          title: "Bathroom",
          details: [
            "Wall Tiles For 7 Feet Upto 35 Rs Per Sq ft.",
            "Sanitary Ware & CP Fitting Upto Rs 8,000.",
            "CPVC/PVC: Any ISI brand",
            "Bathroom Accessories: EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower",
            "All bathroom fittings are white color & basic model in any ISI brand",
            "PVC WaterProof Doors",
          ],
        },
        {
          title: "Plumbing",
          details: [
            "Bathroom – 1 wash basin with tap, 1 shower with wall mixer for hot & cold water, 1 floor mount western closet with health faucet.",
            "Dining – 1 wash basin with tap ",
            "Kitchen – Single stainless steel sink with 1 tap.",
            "Service – 1 tap point & water outlet point for washing machine",
          ],
        },
        {
          title: "Doors & Windows",
          details: [
            "Main Door: Ready Made Basic Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness",
            "Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch",
            "Used for both construction and finishing.",
          ],
        },
        {
            title: "Painting",
            details: [
              "Interior:\n",
              "Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch",
              "Used for both construction and finishing.\n",
            
              "Exterior:\n",
              "Main Door: Ready Made Basic Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness",
              "Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch",
              "Used for both construction and finishing.",
            ],
          },
      ],
    },
    {
      title: "Premium",
      price: "2450",
      description: [
        "All features in basic package",
        "Free Smart Home Automation",
        "Free Organic Terrace Gardening",
      ],
      accordionDetails: [
        { title: "Design", details: ["2D Floor Plan"] },
        {
          title: "Structural ",
          details: [
            "Basement height: Upto 2 feet.",
            "Steel: Any ISI brand.",
            "Aggregates: 20mm & 40mm.",
            "Blocks: 6 inch for Exterior Wall & 4 inch for Interior Wall or",
            "Bricks: 9 inch for Exterior Wall & 4.5 inch for Interior Wall (Rs.20/sft extra during rainy season due to increase in bricks price)",
            "Cement: Any ISI brand",
            "M Sand: Blockwork & P Sand: Plastering",
            "RCC Design Mix: M20",
            "Ceiling Height: 10 Feet",
          ],
        },
        {
          title: "Kitchen",
          details: [
            "Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 35 Per Sq ft",
            "Main Sink Faucet Upto 1500 & ISI Marked",
            "Kitchen Sink: Stainless Steel Upto 2000 Rs",
            "Kitchen Granite Slab: 20 mm Thick Upto 80 Rs per Sq ft",
          ],
        },
        {
          title: "Bathroom",
          details: [
            "Wall Tiles For 7 Feet Upto 35 Rs Per Sq ft.",
            "Sanitary Ware & CP Fitting Upto Rs 8,000.",
            "CPVC/PVC: Any ISI brand",
            "Bathroom Accessories: EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower",
            "All bathroom fittings are white color & basic model in any ISI brand",
            "PVC WaterProof Doors",
          ],
        },
        {
          title: "Plumbing",
          details: [
            "Bathroom – 1 wash basin with tap, 1 shower with wall mixer for hot & cold water, 1 floor mount western closet with health faucet.",
            "Dining – 1 wash basin with tap ",
            "Kitchen – Single stainless steel sink with 1 tap.",
            "Service – 1 tap point & water outlet point for washing machine",
          ],
        },
        {
          title: "Doors & Windows",
          details: [
            "Main Door: Ready Made Basic Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness",
            "Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch",
            "Used for both construction and finishing.",
          ],
        },
        {
            title: "Painting",
            details: [
              "Interior:\n",
              "Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch",
              "Used for both construction and finishing.\n",
            
              "Exterior:\n",
              "Main Door: Ready Made Basic Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness",
              "Internal Door: Flush Door With Laminates Along With Sal Wood Frame of 4 Inch by 3 Inch",
              "Used for both construction and finishing.",
            ],
          },
      ],
    },
    {
      title: "Customized",
      price: "Customer Package",
      description: [
        "All features in basic package",
        "Free Smart Home Automation",
        "Free Organic Terrace Gardening",
      ],
      accordionDetails: [
        { 
            title: "Design", 
            details: [
              "2D Floor Plan - Custom layout available",
              "3D Visual Design",
              "Interior Design Theme (Modern, Traditional, etc.)",
              "Custom Floor Plans"
            ]
          },
          { 
            title: "Structural", 
            details: [
              "Basement Depth & Design",
              "Steel: Choose grade and brand",
              "Aggregates: Options for 10mm, 20mm, 40mm",
              "Blocks/Bricks: Custom options and rainy season price adjustments",
              "Cement: Branded or specialty choices",
              "RCC Design Mix: Custom grade based on project needs",
              "Ceiling Height: Customizable"
            ]
          },
          { 
            title: "Kitchen", 
            details: [
              "Tiles: Choice of ceramic, porcelain, or stone",
              "Sink Faucets: Premium brands or custom designs",
              "Granite Slabs: Customized options",
              "Cabinets: Customizable designs for cabinetry",
              "Lighting: Custom lighting options"
            ]
          },
          { 
            title: "Bathroom", 
            details: [
              "Wall Tiles: Custom sizes and textures",
              "Sanitary Ware & CP Fittings: Premium or custom fittings",
              "Shower System: Customizable shower features",
              "Vanity & Storage: Custom bathroom storage units",
              "Waterproof Doors: Customized"
            ]
          },
          { 
            title: "Plumbing", 
            details: [
              "Bathroom Fixtures: Premium selections",
              "Kitchen Plumbing: Custom pipes and taps",
              "Service Areas: Custom tap points & outlets",
              "Water Heating System: Solar or geyser"
            ]
          },
          { 
            title: "Doors & Windows", 
            details: [
              "Main Door: Custom designs and materials",
              "Internal Doors: Flush, panel, or bi-fold options",
              "Window Materials: Choose wood, UPVC, or aluminum",
              "Shutters & Louvers: Customizable"
            ]
          },
          { 
            title: "Painting", 
            details: [
              "Interior Painting: Custom colors & finishes",
              "Exterior Painting: High-durability options",
              "Textures: Options for stucco, plaster, coatings"
            ]
          }
      ]
    },
  ];
  return (
    <>
      <Box>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={4}
          mt={6}
          mb={10}
          ml={4}
          mr={4}
        >
          {packages.map((pkg, index) => (
            <VStack
              key={index}
              p={4}
              bg="white"
              boxShadow="lg"
              borderRadius="lg"
              textAlign="center"
              w="-moz-fit-content"
              h="-moz-initial"
            >
              <Heading
                size="2xl"
                bg="yellow.500"
                color="white"
                p={6}
                borderRadius="md"
                w="full"
              >
                {pkg.title}
              </Heading>
              <Grid >
              <Text fontSize="4xl" p={6} fontWeight="bold">
                ₹{pkg.price}/sft
              </Text>
              </Grid>
              {/* <VStack align="start" p={2}>
                {pkg.description.map((point, idx) => (
                  <Text key={idx}>✔ {point}</Text>
                ))}
              </VStack> */}
              <AccordionRoot collapsible>
                {pkg.accordionDetails?.map((section, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${section.title.toLowerCase()}-${index}`}
                  >
                    <AccordionItemTrigger>{section.title}</AccordionItemTrigger>
                    <AccordionItemContent textAlign="left">
                      <List.Root pl={4}  >
                        {section.details.map((item, itemIdx) => (
                          <ListItem   key={itemIdx}>{item}</ListItem>
                        ))}
                      </List.Root>
                    </AccordionItemContent>
                  </AccordionItem>
                ))}
              </AccordionRoot>
            </VStack>
          ))}
        </Grid>
      </Box>

      
    </>
  );
};

export default Offer;





  
 