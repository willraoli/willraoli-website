import { ChakraProvider, Container } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

function ContentContainer({ children }) {
  return (
    <Container maxW={"3xl"}>
      {children}
    </Container>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
    </ChakraProvider>
  )
}

export default MyApp
