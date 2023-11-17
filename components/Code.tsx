import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = () => {
  const codeString = "(num) => num + 1";
  return (
    <div className="bg-gray-500 grid place-items-center h-screen">
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
