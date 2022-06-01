import Head from "next/head"
import { Box, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"

export default function Home() {
  const DESCRIPTION = {
    "pt-BR": "Desenvolvedor web focado em tecnologias modernas, otimização de SEO e clean code.",
    "en-US": "Full-Stack Developer, focused on modern technologies and with focus on software development.",
  }
  
  return (
    <>
      <Head>
        <title>willraoli</title>
        <meta name="description" content="willraoli's website" />
      </Head>
      <Stack
        marginTop={{ base: 16, md: 48 }}
        as={Box}
        align={"center"}
        textAlign={"center"}
        spacing={{ base: 4, md: 6 }}
      >
        <Image src={"avatar.jpg"} borderRadius={"50%"} width={"25%"} />
        <Heading fontWeight={700} fontSize={{ base: 24, md: 48 }} as={"h1"}>
          Olá, eu sou{" "}
          <Text as={"span"} color={useColorModeValue("purple.500", "purple.400")}>
            Will.
          </Text>
        </Heading>
        <Text>
          {DESCRIPTION["pt-BR"]}
        </Text>
      </Stack>
    </>
  )
}
