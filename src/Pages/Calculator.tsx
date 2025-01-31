import { Button } from "@/Components/ui/button";
import {
  NumberInputField,
  NumberInputLabel,
  NumberInputRoot,
} from "@/Components/ui/number-input";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/Components/ui/select";
import {
  Box,
  Center,
  createListCollection,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface ConstructionData {
  type: string;
  squareFeet: number;
  floors: number;
  waterTank: number;
  compoundWall: number;
  carParking: number;
}

interface ConstructionType {
  label: string;
  value: string;
}

const constructionTypes = createListCollection<ConstructionType>({
  items: [
    { label: "Basic", value: "basic" },
    { label: "Premium", value: "premium" },
  ],
});

const Calculator = () => {
  const [data, setData] = useState<ConstructionData>({
    type: "basic",
    squareFeet: 0,
    floors: 1,
    waterTank: 0,
    compoundWall: 0,
    carParking: 0,
  });

  const [estimate, setEstimate] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const calculateEstimate = () => {
    const { squareFeet, floors, waterTank, compoundWall, carParking } = data;

    const sqFt = Number(squareFeet);
    const flrs = Number(floors);
    const tank = Number(waterTank);
    const wall = Number(compoundWall);
    const parking = Number(carParking);

    // Check if any required field is empty or invalid
    if (
      isNaN(sqFt) ||
      isNaN(flrs) ||
      isNaN(tank) ||
      isNaN(wall) ||
      isNaN(parking) ||
      sqFt <= 0 ||
      flrs <= 0
    ) {
      alert("Please enter all the required fields");
      return;
    }

    // Price Calculation
    const pricePerSqFt = data.type === "basic" ? 2250 : 2450;
    const totalCost =
      sqFt * flrs * pricePerSqFt + tank * 30 + wall * 500 + parking * 200;

    // Set the estimate
    setEstimate(totalCost);
    resetForm();
  };

  const resetForm = () => {
    setData({
      type: "basic",
      squareFeet: 0,
      floors: 1,
      waterTank: 0,
      compoundWall: 0,
      carParking: 0,
    });
  };
  return (
    <>
      <Center>
        <VStack
          padding={4}
          p={10}
          borderWidth={1}
          borderRadius="lg"
          width="400px"
        >
          <Text fontSize="xl" fontWeight="bold">
            Estimate Your Cost
          </Text>

          {/* Select Construction Type */}
          <SelectRoot collection={constructionTypes} size="sm" width="320px">
            <SelectLabel>Select Construction Type</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder="Select construction type" />
            </SelectTrigger>
            <SelectContent>
              {constructionTypes.items.map((item: ConstructionType) => (
                <SelectItem key={item.value} item={item}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          {/* No. of Square Feet */}
          <NumberInputRoot width="320px" defaultValue="0" min={0} max={10000}>
            <NumberInputLabel mb={10}>No. of Square Feet</NumberInputLabel>
            <NumberInputField
              value={data.squareFeet}
              onChange={(e) => handleInputChange(e, "squareFeet")}
              placeholder="Enter square feet"
            />
          </NumberInputRoot>

          {/* No. of Floors */}
          <NumberInputRoot width="320px" defaultValue="0" min={0} max={5}>
            <NumberInputLabel>No. of Floors</NumberInputLabel>
            <NumberInputField
              value={data.floors}
              onChange={(e) => handleInputChange(e, "floors")}
              placeholder="Enter number of floors"
            />
          </NumberInputRoot>

          {/* Water Tank (litres) */}
          <NumberInputRoot width="320px" defaultValue="0" min={0} max={1000}>
            <NumberInputLabel>Water Tank (litres)</NumberInputLabel>
            <NumberInputField
              value={data.waterTank}
              onChange={(e) => handleInputChange(e, "waterTank")}
              placeholder="Enter water tank capacity"
            />
          </NumberInputRoot>

          {/* Compound Wall (feet) */}
          <NumberInputRoot width="320px" defaultValue="0" min={0} max={500}>
            <NumberInputLabel>Compound Wall (feet)</NumberInputLabel>
            <NumberInputField
              value={data.compoundWall}
              onChange={(e) => handleInputChange(e, "compoundWall")}
              placeholder="Enter compound wall length"
            />
          </NumberInputRoot>

          {/* Car Parking (sq. feet) */}
          <NumberInputRoot width="320px" defaultValue="0" min={0} max={500}>
            <NumberInputLabel>Car Parking (sq. feet)</NumberInputLabel>
            <NumberInputField
              value={data.carParking}
              onChange={(e) => handleInputChange(e, "carParking")}
              placeholder="Enter car parking area"
            />
          </NumberInputRoot>

          {/* Submit Button */}
          <Button colorScheme="blue" onClick={calculateEstimate}>
            Submit
          </Button>

          {/* Display Estimated Cost */}
          {estimate !== null && (
            <Box p={3} mt={3} borderWidth={1} borderRadius="md">
              <Text fontSize="lg">
                Estimated Cost: ₹{estimate.toLocaleString()}
              </Text>
            </Box>
          )}
        </VStack>
      </Center>
    </>
  );
};

export default Calculator;
