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

## Detailed Instructions

### Prerequisites

-   Node.js: Ensure you have Node.js installed.
-   NPM: Ensure you have npm installed.

### Running the Script

1. Navigate to your git repository.

2. Install codecommit package globally:

```
npm install -g codecommit
```

2. Stage your changes:

```
git add .
```

3. Run the `codecommit` command:

```
codecommit
```

## Overview

### Purpose

The `codecommit` module:

1.  Checks if the current directory is a git repository.
2.  Generates a commit message using GPT-4 based on the git diff of staged files.
3.  Prompts the user to review and approve the generated commit message.
4.  Commits the changes with the approved commit message.

### Main Features

-   Automated Commit Message Generation: Uses GPT-4 to create detailed and clear commit messages.
-   GitMoji and Conventional Commit Conventions: Ensures commit messages follow popular conventions for better readability and organization.
-   User Approval: Allows users to review and approve commit messages before committing.

### Workflow

Below is a flowchart depicting the workflow of the `codecommit` module:
![](https://mermaid.ink/img/pako:eNpdkc9uwjAMxl_FyhleoIdNpeVPYaAJtsOW9pA1bhuNNFWSwlDFuy8LYauWU_z558-OM5BScSQRqY7qXDZMW3hJ8xbcienBuriA6fQBZkNmYCks7LFTRlilL4_XGzdzALyh8VxCl2jBFdbIPZ-KqipG4E55bknnX8KGROKldFgxA0nD2hrN3Twdm8-deYuaWYRESenct2iMawVnYRuIs2JUFBqt6LNWsrNgFcScw0Ic0QRu7okF3eNJ4PmfZ2AWnsmGV4Ma4q7T6vQ3XTaebk2DQXhCMWLCMBsafyi34hsYgLVPPY0XsvHSdiytvLS7S2RCJGrJBHd_N_wgObENSsxJ5K6c6c-c5O3Vcay36nBpSxJZ3eOEaNXXDYkqdjQu6jvu9pkKVmsmf9WOte9K3ePrN4jOpxM?type=png)

## Roadmap

-   [x] Initial Release
-   [ ] Extend AI Capabilities
-   [ ] Improve Configuration Options
-   [ ] Improve interactive prompts and console output
