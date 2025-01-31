import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <Box bg="white" w="100%" p={{ base: 3, md: 4 }} color="white">
      <Flex
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 8 }}
      >
        {/* Company Logo */}
        <Image
          className="logo"
          src="https://jrmconstruction.in/assets/images/logo.png" 
          alt="Company Logo"
          boxSize={{ base: "40px", sm: "50px", md: "60px", lg: "80px" }} 
        />

        {/* Menu Items */}
        <Flex
          className="navitems"
          as="nav"
          gap={{ base: 4, md: 8 }}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "center" }}
        >
          <Link href="/" _hover={{ textDecoration: "none", color: "gray.200" }}>
            Home
          </Link>
          <Link
            href="/about"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            About
          </Link>

          {/* What we Do Dropdown */}
          <MenuRoot>
            <MenuTrigger>
              <Button
                size="sm"
                variant="outline"
                _hover={{ textDecoration: "none", color: "white.200" }}
                display={{ base: "block", md: "inline-block" }} 
              >
                What We Do
              </Button>
            </MenuTrigger>

            <MenuContent>
              <MenuItem
                value="construction"
                onClick={() => navigateTo("/construction")}
              >
                Construction
              </MenuItem>
              <MenuItem
                value="renovation"
                onClick={() => navigateTo("/renovation")}
              >
                Renovation
              </MenuItem>
              <MenuItem
                value="architect"
                onClick={() => navigateTo("/architecture")}
              >
                Architecture
              </MenuItem>
              <MenuItem
                value="interior"
                onClick={() => navigateTo("/interior")}
              >
                Interior
              </MenuItem>
            </MenuContent>
          </MenuRoot>

          {/* Other Menu Items */}
          <Link
            href="/price"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Price
          </Link>
          <Link
            href="/portfolio"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Blog
          </Link>
          <Link
            href="/team"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Team
          </Link>
          <Link
            href="/calculator"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Calculator
          </Link>
          <Link
            href="/career"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Career
          </Link>
          <Link
            href="/contact"
            _hover={{ textDecoration: "none", color: "gray.200" }}
          >
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
