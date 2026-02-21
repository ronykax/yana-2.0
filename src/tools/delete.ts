import { z } from "zod";
import { server } from "../server";

server.registerTool(
    "notes_delete",
    {
        title: "Delete Note",
        description: `Delete a markdown note.

Permanently removes the specified note file from NOTES_DIR. This action
cannot be undone.

Args:
  - filename (string): Path to the note relative to NOTES_DIR
    (e.g. "old-note.md").

Returns:
  Confirmation message with the deleted filename.

Error Handling:
  - Returns an error if the file does not exist.
  - Returns an error if the path escapes NOTES_DIR.`,
        inputSchema: {
            filename: z
                .string()
                .min(1, "Filename is required")
                .describe("Path to the note to delete, relative to NOTES_DIR"),
        },
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: false,
            openWorldHint: false,
        },
    },
    async ({ filename }) => {
        // TODO: Implement — resolve filename against NOTES_DIR, verify it
        //       exists, validate path doesn't escape directory, delete file,
        //       return confirmation.
        return {
            content: [
                {
                    type: "text" as const,
                    text: "TODO: implement notes_delete",
                },
            ],
        };
    },
);
