import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-julia";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";
import init, { compile } from "wacc_32";

import { ReactTerminal } from "react-terminal";
import { ChakraProvider, Grid, GridItem, Text, theme } from "@chakra-ui/react";
import WACCExample from "./waccExample";

export function App() {

  const [assemblyText, setAssemblyText] = useState("assembly output will be displayed here.")

  const [waccText, setWaccText] = useState(WACCExample())

  const welcomeMessage = (
    <>
      <Text>
        WACC is a simple while-based language. The compiler is written in Rust, and has been ported to WebAssembly for you to try out below.<br /><br />

        Try typing the commands below to get started:<br /><br />

        &gt;&#9;<b>help</b> -- displays this message again.<br />
        &gt;&#9;<b>clear</b> -- clears the terminal.<br />
        &gt;&#9;<b>compile</b> -- compiles the WACC input and displays the ASM output.<br />
        &gt;&#9;<b>source</b> -- redirects you to the compiler source code.<br />
        &gt;&#9;<b>examples</b> -- redirects you to some example WACC files.<br />
        &gt;&#9;<b>details</b> -- redirects you to a blog post explaining the implementation details - coming soon!<br />
      </Text>
    </>
  )

  const commands = {
    whoami: "rushil",
    compile: (() => {

      const res = init().then(() => {
        const output = compile(waccText, false)
        setAssemblyText(output.asm_output)
        return output.terminal_output
      })

      return res
    }),
    help: welcomeMessage,
    source: (() => (window.open("https://github.com/r-ushil/wacc-32"))),
    examples: (() => (window.open("https://github.com/r-ushil/wacc-32/tree/master/test_integration/wacc_examples"))),
    details: "coming soon!",
  };

  return (
    <ChakraProvider theme={theme}>
    <Grid
      h='100vh'
      w='100vw'
      templateRows='repeat(5, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={4}
    >
      <GridItem colSpan={2} rowSpan={2}>
        <ReactTerminal
          commands={commands} 
          theme='dracula' 
          showControlBar={false} 
          errorMessage={'command not found'} 
          welcomeMessage={<>Welcome to the WACC Compiler! Type "help" for the list of commands. <br/><br/> </>} />
      </GridItem>

      <GridItem rowSpan={3} colSpan={[2, 1]}>
        <AceEditor
          value={waccText}
          mode="julia"
          theme="dracula"
          name="Some Editor"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="100%"
          fontSize={'1em'}
          onChange={(e) => setWaccText(e)}
        />

      </GridItem>


      <GridItem rowSpan={3} colSpan={[2, 1]}>
        <AceEditor
          value={assemblyText}
          mode="assembly_x86"
          theme="dracula"
          name="Some Editor"
          editorProps={{ $blockScrolling: true }}
          fontSize={'1em'}
          width="100%"
          height="100%"

          readOnly={true}
        />
      </GridItem>



    </Grid>
    </ChakraProvider>
  );
}