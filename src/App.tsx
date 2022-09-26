import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import init, { compile } from "wacc_32";
import Editors from "./components/editors";


export function App() {

  return (
    <ChakraProvider theme={theme}>

      <Editors />
    </ChakraProvider>
  )
}
