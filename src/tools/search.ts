import { z } from "zod";
import { server } from "../server";

server.registerTool(
    "notes_search",
    {
        title: "Search Notes",
        description: `Full-text keyword search across all markdown notes.

Searches note filenames and contents for the given query string. Returns
matching notes with a short context snippet around each match. Useful for
finding notes on a specific topic before reading the full content with
notes_get.

Args:
  - query  (string): Search term to match against note names and content.
    Case-insensitive. Minimum 2 characters.
  - folder (string, optional): Restrict search to a subdirectory.
  - limit  (number, optional): Maximum results to return (1-50, default 20).
  - offset (number, optional): Pagination offset (default 0).

Returns:
  A JSON object with:
  {
    "total": number,
    "count": number,
    "offset": number,
    "results": [
      {
        "filename": string,
        "matches": number,
        "snippet": string
      }
    ],
    "has_more": boolean,
    "next_offset": number | undefined
  }`,
        inputSchema: {
            query: z
                .string()
                .min(2, "Query must be at least 2 characters")
                .max(200, "Query must not exceed 200 characters")
                .describe("Search term to find in note names and content"),
            folder: z
                .string()
                .optional()
                .describe("Restrict search to a subdirectory within NOTES_DIR"),
            limit: z
                .number()
                .int()
                .min(1)
                .max(50)
                .default(20)
                .describe("Maximum results to return"),
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
    async ({ query, folder, limit, offset }) => {
        // TODO: Implement — glob *.md in NOTES_DIR (+ folder), search content
        //       case-insensitively, extract snippets, paginate, return results.
        return {
            content: [
                {
                    type: "text" as const,
                    text: "TODO: implement notes_search",
                },
            ],
        };
    },
);
