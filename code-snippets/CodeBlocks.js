import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import duotoneLight from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-light";

export const CodeBlockJS = props => {
    return (
        <SyntaxHighlighter
            language="javascript"
            style={duotoneLight}
            showLineNumbers={true}
            customStyle={{
                fontSize: 14
            }}
            codeTagProps={{
                fontSize: 14
            }}>
            {props.code}
        </SyntaxHighlighter>
    );
};
