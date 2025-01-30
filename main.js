/* eslint-disable import-x/unambiguous -- CLI */
const {
	Command
} = Deno;

const npxKnipCommand = new Command(
	"npx",
	{
		args: ["knip"],
		stderr: "inherit",
		stdout: "inherit"
	}
);

await npxKnipCommand.output();
