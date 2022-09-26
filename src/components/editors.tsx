import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-julia";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

export default function Editor() {

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

  return (
    <>
    <AceEditor
      mode="julia"
      theme="tomorrow_night_bright"
      name="Some Editor"
      editorProps={{ $blockScrolling: true }}
      width='inherit'
      minLines={50}
      maxLines={100}
      fontSize={'1em'}
    />
    <AceEditor
      mode="assembly_x86"
      theme="tomorrow_night_bright"
      name="Some Editor"
      editorProps={{ $blockScrolling: true }}
      width='inherit'
      minLines={50}
      maxLines={100}
    />
    
    </>
  );
}