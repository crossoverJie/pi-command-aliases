/**
 * Adds /exit and /clear as aliases for pi's built-in /quit and /new commands.
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.registerCommand("exit", {
		description: "Quit pi",
		handler: async (_args, ctx) => {
			ctx.shutdown();
		},
	});

	pi.registerCommand("clear", {
		description: "Start a new session",
		handler: async (_args, ctx) => {
			const result = await ctx.newSession();
			if (!result.cancelled) {
				ctx.ui.notify("New session started", "info");
			}
		},
	});
}
