import { Code } from "@mantine/core"

export default function MantineCode({ content = 'code', isBlock = true }: { content: string, isBlock: boolean }) {
    return (
        <Code block={isBlock}>{content}</Code>
    )
}
