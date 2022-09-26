import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-julia";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import { useContext, useState } from "react";
import init, { compile } from "wacc_32";

import { ReactTerminal } from "react-terminal";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

export default function Editors() {

  const [waccText, setWaccText] = useState("# write your .wacc code here!")
  const [assemblyText, setAssemblyText] = useState("assembly output will be displayed here.")

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
  };

  return (
    <Grid
      h='100vh'
      w='100vw'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={4}
    >
      <GridItem colSpan={2}>
        <ReactTerminal commands={commands} theme='dracula' showControlBar={false} />
      </GridItem>

      <GridItem rowSpan={2} colSpan={[2, 1]}>
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


      <GridItem rowSpan={2} colSpan={[2, 1]}>
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
  );
}