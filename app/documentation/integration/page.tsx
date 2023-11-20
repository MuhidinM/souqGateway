import Code from "@/components/Code";
import React from "react";

const pages = () => {
  const codeString: string = `import SyntaxHighlighter from "react-syntax-highlighter";
  import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
  
  const Code = () => {
    const codeString = "(num) => num + 1";
    return (
      <div className="bg-gray-500 grid place-items-center">
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  };
  
  export default Code;
  `;

  return (
    <div>
      <div className="">
        <Code codeString={codeString} language={"jsx"} title="Jsx Code" />
      </div>
    </div>
  );
};

export default pages;
