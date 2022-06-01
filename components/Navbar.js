import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Stack,
  Link,
  Button,
  useColorMode,
  Switch,
} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import NextLink from "next/link"

const NAV_ITEMS = [
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Get in touch",
    href: "/contact",
  },
]

function DesktopNavigation({ colorMode }) {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((item) => (
        <Box key={item.name}>
          <NextLink href={item.href} passHref>
            <Link
              rounded={"md"}
              py={2}
              px={2}
              _hover={{ textDecoration: "none", bg: colorMode === "light" ? "gray.200" : "gray.700" }}
            >
              {item.name}
            </Link>
          </NextLink>
        </Box>
      ))}
    </Stack>
  )
}

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align={{ base: "center" }}
        >
          <NextLink href={"/"} passHref>
            <Text
              fontFamily={"heading"}
              textAlign={useBreakpointValue({ md: "left" })}
              color={useColorModeValue("gray.800", "white")}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight={"bold"}
              _hover={{ cursor: "pointer" }}
            >
              willraoli
            </Text>
          </NextLink>
          <Flex ml={10}>
            <DesktopNavigation colorMode={colorMode} />
          </Flex>
        </Flex>
        <Stack
          align={"center"}
          direction={"row"}
          justify={{ base: "center", md: "end" }}
        >
          <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Navbar
