"use-client";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function TerminalAnimation() {
  const [showText, setShowText] = useState(false);

  const Text = `Microsoft Windows [Version 10.0.22631.4037] \n(c) Microsoft Corporation. All rights reserved.`;
  const StaticTextOne = `C:\\Users\\hp> `;
  const StaticTextTwo = `\nC:\\Users\\hp\\Desktop\\next-portfolio> `;
  const terminalTextOne = `cd .\\Desktop\\my-portfolio\\`;
  const terminalTextTwo = `code .`;

  return (
    <div className="w-screen h-screen flex items-center justify-center text-lg">
      <div className="w-1/2 h-1/3 border-2 border-terminalBorder bg-terminalBg overflow-hidden">
        <pre className="m-5 w-full whitespace-pre-wrap break-words">{Text}</pre>
        <pre className="p-5 w-full whitespace-pre-wrap break-words">
          {StaticTextOne}
          <TypeAnimation
            sequence={[terminalTextOne, 1000, () => setShowText(true)]}
            cursor={false}
            style={{
              display: 'inline',
              fontWeight: 'bold',
              color: 'white',
            }}
          />
        </pre>

        {showText && (
          <pre className="p-5 w-full whitespace-pre-wrap break-words">
            {StaticTextTwo}
            <TypeAnimation
              sequence={[terminalTextTwo, 2000]}
              speed={5}
              cursor={false}
              style={{
                display: 'inline',
                fontWeight: 'bold',
                color: 'white',
              }}
            />
          </pre>
        )}
      </div>
    </div>
  );
}
