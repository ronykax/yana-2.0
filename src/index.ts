#!/usr/bin/env node
/**
 * Yana MCP Server — Talk to your notes.
 *
 * Exposes tools for listing, reading, searching, creating, updating, and
 * deleting markdown notes stored in the directory specified by the NOTES_DIR
 * environment variable.
 *
 * Transport: stdio (designed to be spawned by an MCP-aware client).
 */

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { server } from "./server";

// Register all tools (side-effect imports)
import "./tools/list";
import "./tools/get";
import "./tools/search";
import "./tools/create";
import "./tools/update";
import "./tools/delete";

const NOTES_DIR = process.env.NOTES_DIR;

async function main() {
    if (!NOTES_DIR) {
        console.error(
            "ERROR: NOTES_DIR environment variable is required. Set it to the absolute path of your notes folder.",
        );
        process.exit(1);
    }

    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error(`Yana MCP server running (notes dir: ${NOTES_DIR})`);
}

main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
