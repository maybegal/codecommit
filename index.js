#!/usr/bin/env node

/**
 * AI Commit Message Generator Module
 *
 * This script ensures commit messages adhere to the GitMoji and Conventional Commit conventions.
 * It checks if the current directory is a git repository, gets the git diff of staged files,
 * generates a commit message using GPT-4, and allows the user to review and approve the message.
 */

import { readFileSync, existsSync } from "fs";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import { G4F } from "g4f";

const g4f = new G4F();

/**
 * Checks if the current directory is a git repository.
 * @returns {boolean} True if inside a git repository, otherwise false.
 */
const isGitRepository = () => {
	try {
		const output = execSync("git rev-parse --is-inside-work-tree", {
			encoding: "utf-8",
		});
		return output.trim() === "true";
	} catch (err) {
		return false;
	}
};

/**
 * Executes the git commit command with the provided commit message.
 * @param {string} commitMessage - The commit message.
 */
const commitWithMessage = (commitMessage) => {
	console.log("Committing message... 🚀");
	try {
		execSync("git commit -F -", { input: commitMessage });
		console.log("Commit successful! 🎉");
	} catch (err) {
		console.error("Error committing changes:", err.message);
	}
};

/**
 * Sends a prompt to GPT-4 to generate a response.
 * @param {string} prompt - The prompt to send to GPT-4.
 * @returns {Promise<string>} The generated response from GPT-4.
 */
const getAIResponse = async (prompt) => {
	const messages = [{ role: "user", content: prompt }];
	const options = {
		provider: g4f.providers.GPT,
		model: "gpt-4",
	};
	try {
		const response = await g4f.chatCompletion(messages, options);
		return response;
	} catch (error) {
		console.error("Error communicating with G4F:", error.message);
		process.exit(1);
	}
};

/**
 * Generates a prompt for creating a single commit message.
 * @param {string} gitDiff - The output of the git diff --staged command.
 * @returns {string} The generated prompt.
 */
const createPrompt = (gitDiff) => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const promptFilePath = path.join(__dirname, "prompt.txt");

	if (!existsSync(promptFilePath)) {
		console.error("Prompt file (prompt.txt) not found.");
		process.exit(1);
	}

	const promptContent = readFileSync(promptFilePath, "utf-8");
	return `${promptContent.trim()}\n${gitDiff}`;
};

/**
 * Generates a commit message based on the git diff, reviews it with the user, and commits it.
 * @param {string} gitDiff - The output of the git diff --staged command.
 */
const generateAndCommitMessage = async (gitDiff) => {
	const prompt = createPrompt(gitDiff);
	const commitMessage = await getAIResponse(prompt);

	console.log(
		`Proposed Commit:\n------------------------------\n${commitMessage}\n------------------------------`
	);

	const { continue: shouldContinue } = await inquirer.prompt([
		{
			type: "confirm",
			name: "continue",
			message: "Do you want to continue?",
			default: true,
		},
	]);

	if (!shouldContinue) {
		console.log("Commit aborted by user.");
		process.exit(1);
	}

	commitWithMessage(commitMessage);
};

/**
 * Main function to generate an AI-based commit message.
 */
const runAICommit = async () => {
	if (!isGitRepository()) {
		console.error("This is not a git repository.");
		process.exit(1);
	}

	let gitDiff;
	try {
		gitDiff = execSync("git diff --staged", { encoding: "utf8" }).trim();
	} catch (error) {
		console.error("Error fetching git diff:", error.message);
		process.exit(1);
	}

	if (!gitDiff) {
		console.log("No changes to commit.");
		console.log(
			"Maybe you forgot to add the files? Try git add . and then run this script again."
		);
		process.exit(1);
	}

	await generateAndCommitMessage(gitDiff);
};

// Entry point: Invoke the main function to start the AI-based commit process.
(async () => {
	await runAICommit();
})();
