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

1.  Checks if the current directory is a git repository.
2.  Generates a commit message using GPT-4 based on the git diff of staged files.
3.  Prompts the user to review and approve the generated commit message.
4.  Commits the changes with the approved commit message.

### Main Features

-   Automated Commit Message Generation: Uses GPT-4 to create detailed and clear commit messages.
-   GitMoji and Conventional Commit Conventions: Ensures commit messages follow popular conventions for better readability and organization.
-   User Approval: Allows users to review and approve commit messages before committing.

### Workflow

Below is a flowchart depicting the workflow of the codecommit module:
[![](https://mermaid.ink/img/pako:eNpdkU1vwjAMhv-KlfO47dTDptJC-RgIATtsbQ8ZcdtopKmSFIYq_vuyELZoOcWvH792nIEcJEMSkeooz4eGKgP7tGjBnjjfGRuXMBo9wXiYa8i4gS12UnMj1eX5euPGFoA31I5L8gwN2MIameNTXlVlAK6l47J88sWNTyROSocZ1ZA0tK1R383T0HxizVtU1CAkUgjrvkKtbSs4c9NAttmPHsugzvea5RslRWfASIgZgyk_ovbcxBHTfIsnjud_tp6ZOmY-vGpUEHedkqe_AefhgIvcG_hXlAHjh1nm8Ye0W76BHli41Eu4k6WTVqE0c9L6LpEHIlAJypn9vuEHKYhpUGBBIntlVH0WpGivlqO9kbtLeyCRUT0-ECX7uiFRRY_aRn3H7EpTTmtFxa_a0fZdynt8_QZJOafV?type=png)](https://mermaid.live/edit#pako:eNpdkU1vwjAMhv-KlfO47dTDptJC-RgIATtsbQ8ZcdtopKmSFIYq_vuyELZoOcWvH792nIEcJEMSkeooz4eGKgP7tGjBnjjfGRuXMBo9wXiYa8i4gS12UnMj1eX5euPGFoA31I5L8gwN2MIameNTXlVlAK6l47J88sWNTyROSocZ1ZA0tK1R383T0HxizVtU1CAkUgjrvkKtbSs4c9NAttmPHsugzvea5RslRWfASIgZgyk_ovbcxBHTfIsnjud_tp6ZOmY-vGpUEHedkqe_AefhgIvcG_hXlAHjh1nm8Ye0W76BHli41Eu4k6WTVqE0c9L6LpEHIlAJypn9vuEHKYhpUGBBIntlVH0WpGivlqO9kbtLeyCRUT0-ECX7uiFRRY_aRn3H7EpTTmtFxa_a0fZdynt8_QZJOafV)

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
