"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "./ui/button";
import { Clipboard } from "lucide-react";

interface CodeTypes {
  codeString: string;
  title: string;
  language: string;
}

const Code: React.FC<CodeTypes> = ({ codeString,title, language }) => {
  return (
    <div className="my-4">
      <div className="min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
        <div className="flex justify-between px-4 text-white text-xs items-center">
          <p className="text-sm">{title}</p>
          <Button
            variant={"ghost"}
            onClick={() => {
              navigator.clipboard.writeText(codeString);
            }}
            className="py-1 inline-flex items-center gap-1 my-1 font-thin"
          >
            COPY
            <Clipboard className="w-4" />
          </Button>
        </div>
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{ padding: "25px" }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Code;
