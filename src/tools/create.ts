import { z } from "zod";
import { server } from "../server";

server.registerTool(
    "notes_create",
    {
        title: "Create Note",
        description: `Create a new markdown note.

Creates a new .md file in NOTES_DIR with the given filename and content. The
filename may include subdirectories which will be created automatically
(e.g. "journal/2025-01-15.md"). Fails if a note with the same filename
already exists — use notes_update to modify existing notes.

Args:
  - filename (string): Desired path for the new note relative to NOTES_DIR.
    Must end with ".md".
  - content  (string): The markdown content to write to the file.

Returns:
  Confirmation message with the created filename.

Error Handling:
  - Returns an error if a file with that name already exists.
  - Returns an error if the path escapes NOTES_DIR.`,
        inputSchema: {
            filename: z
                .string()
                .min(1, "Filename is required")
                .describe(
                    'Path for the new note relative to NOTES_DIR (e.g. "ideas/new-idea.md")',
                ),
            content: z
                .string()
                .describe("Markdown content to write to the new note"),
        },
        annotations: {
            readOnlyHint: false,
            destructiveHint: false,
            idempotentHint: false,
            openWorldHint: false,
        },
    },
    async ({ filename, content }) => {
        // TODO: Implement — validate filename ends with .md, resolve against
        //       NOTES_DIR, check it doesn't already exist, create parent dirs
        //       if needed, write content, return confirmation.
        return {
            content: [
                {
                    type: "text" as const,
                    text: "TODO: implement notes_create",
                },
            ],
        };
    },
);
