import { z } from "zod";
import { server } from "../server";

server.registerTool(
    "notes_get",
    {
        title: "Get Note",
        description: `Get the full content of a single markdown note.

Reads and returns the raw markdown content of the specified note file. The
filename must be relative to NOTES_DIR (e.g. "ideas/project-x.md").

Args:
  - filename (string): Path to the note file relative to NOTES_DIR
    (e.g. "meeting-notes.md" or "journal/2025-01-15.md").

Returns:
  The full markdown content of the note as text.

Error Handling:
  - Returns an error if the file does not exist or is outside NOTES_DIR.`,
        inputSchema: {
            filename: z
                .string()
                .min(1, "Filename is required")
                .describe(
                    'Path to the note relative to NOTES_DIR (e.g. "ideas/project-x.md")',
                ),
        },
        annotations: {
            readOnlyHint: true,
            destructiveHint: false,
            idempotentHint: true,
            openWorldHint: false,
        },
    },
    async ({ filename }) => {
        // TODO: Implement — resolve filename against NOTES_DIR, validate it
        //       doesn't escape the directory, read file, return content.
        return {
            content: [
                {
                    type: "text" as const,
                    text: "TODO: implement notes_get",
                },
            ],
        };
    },
);
