import { z } from "zod";
import { server } from "../server";

server.registerTool(
    "notes_list",
    {
        title: "List Notes",
        description: `List markdown notes in the notes directory.

Returns a paginated list of note filenames (*.md) with optional filtering by
subdirectory. Use this as a starting point to discover available notes before
retrieving their content with notes_get.

Args:
  - folder (string, optional): Subdirectory within NOTES_DIR to list. Defaults
    to the root notes directory.
  - limit  (number, optional): Maximum number of filenames to return (1-100,
    default 50).
  - offset (number, optional): Number of results to skip for pagination
    (default 0).

Returns:
  A JSON object with:
  {
    "total": number,
    "count": number,
    "offset": number,
    "notes": string[],
    "has_more": boolean,
    "next_offset": number | undefined
  }`,
        inputSchema: {
            folder: z
                .string()
                .optional()
                .describe(
                    "Subdirectory within NOTES_DIR to scope listing to (e.g. 'journal'). Omit to list from the root.",
                ),
            limit: z
                .number()
                .int()
                .min(1)
                .max(100)
                .default(50)
                .describe("Maximum number of note filenames to return"),
            offset: z
                .number()
                .int()
                .min(0)
                .default(0)
                .describe("Number of results to skip for pagination"),
        },
        annotations: {
            readOnlyHint: true,
            destructiveHint: false,
            idempotentHint: true,
            openWorldHint: false,
        },
    },
    async ({ folder, limit, offset }) => {
        // TODO: Implement — read NOTES_DIR (+ optional folder), glob *.md,
        //       sort, paginate, and return the list.
        return {
            content: [
                {
                    type: "text" as const,
                    text: "TODO: implement notes_list",
                },
            ],
        };
    },
);
