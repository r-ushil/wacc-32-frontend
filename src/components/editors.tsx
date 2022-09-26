import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-julia";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

import { ReactTerminal } from "react-terminal";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

export default function Editors() {

  const [waccText, setWaccText] = useState("")
  const [assemblyText, setAssemblyText] = useState("")
  const [terminalText, setTerminalText] = useState("")


  /*

  type compile in the terminal, press enter
  get terminalText
  run compile wasm function
  paste assemblyText
  paste terminalText

  type clear in the terminal, press enter
  set terminalText to ""

  type help in the terminal, press enter
  paste help const into terminal text

  */

  const commands = {
    whoami: "rushil",
  };

  return (
    <Grid
      h='100vh'
      w='100vw'
      templateRows='repeat(4, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={4}
    >
      <GridItem colSpan={2}>
        <ReactTerminal commands={commands} theme='dracula' showControlBar={false} />
      </GridItem>

      <GridItem rowSpan={3}>
        <AceEditor
          mode="julia"
          theme="dracula"
          name="Some Editor"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="100%"
          fontSize={'1em'}
        />

      </GridItem>


      <GridItem rowSpan={3}>
        <AceEditor
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
  );
}