import { CopyBlock, dracula } from 'react-code-blocks';

export function CodeBlock({ code }: {code: string}) {
  return <CopyBlock
    text={code}
    language={"jsx"}
    showLineNumbers
    theme={dracula}
    codeBlock
  />;
}