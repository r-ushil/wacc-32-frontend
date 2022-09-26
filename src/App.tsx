import * as React from "react"
import {
  ChakraProvider,
  theme,
  Flex,
} from "@chakra-ui/react"
import { Logo } from "./components/Logo"
import init, { compile } from "wacc_32";
import Editors from "./components/editors";


export function App() {

  return (
    <ChakraProvider theme={theme}>
      <Editors />
    </ChakraProvider>
  )
}
