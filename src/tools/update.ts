import { z } from "zod";
import { server } from "../server";

server.registerTool(
    "notes_update",
    {
        title: "Update Note",
        description: `Update the content of an existing markdown note.

Overwrites the content of the specified note with the new content provided.
The note must already exist — use notes_create for new notes.

Args:
  - filename (string): Path to the note relative to NOTES_DIR.
  - content  (string): The new markdown content to replace the file with.

Returns:
  Confirmation message with the updated filename.

Error Handling:
  - Returns an error if the file does not exist.
  - Returns an error if the path escapes NOTES_DIR.`,
        inputSchema: {
            filename: z
                .string()
                .min(1, "Filename is required")
                .describe("Path to the existing note relative to NOTES_DIR"),
            content: z
                .string()
                .describe("New markdown content to replace the note with"),
        },
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: true,
            openWorldHint: false,
        },
    },
    async ({ filename, content }) => {
        // TODO: Implement — resolve filename against NOTES_DIR, verify it
        //       exists, validate path doesn't escape directory, write new
        //       content, return confirmation.
        return {
            content: [
                {
                    type: "text" as const,
                    text: "TODO: implement notes_update",
                },
            ],
        };
    },
);
