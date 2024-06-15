# codecommit: AI Commit Message Generator

The codecommit npm package automates the generation of commit messages using AI, ensuring they adhere to GitMoji and Conventional Commit conventions. This tool is designed to enhance your workflow by generating smart, consistent, and informative commit messages.

## Installation

To install the codecommit package globally, run the following command:

```
npm install -g codecommit
```

## Usage

After installing, navigate to your git repository and run the command:

```
codecommit
```

This will initiate the script, which will generate and suggest a commit message for you based on the staged changes. You will have the option to review and approve the message before it gets committed.

## Overview

### Purpose

The `codecommit` module:

-   Checks if the current directory is a git repository.

-   Generates a commit message using GPT-4 based on the git diff of staged files.
-   Prompts the user to review and approve the generated commit message.
-   Commits the changes with the approved commit message.

### Main Features

-   Automated Commit Message Generation: Uses GPT-4 to create detailed and clear commit messages.
-   GitMoji and Conventional Commit Conventions: Ensures commit messages follow popular conventions for better readability and organization.
-   User Approval: Allows users to review and approve commit messages before committing.

## Detailed Instructions

### Prerequisites

-   Node.js: Ensure you have Node.js installed.
-   NPM: Ensure you have npm installed.

### Running the Script

1. Navigate to your git repository.

2. Stage your changes:

```
git add .
```

3. Run the `codecommit` command:

```
codecommit
```
