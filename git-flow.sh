#!/bin/bash

# ---------------------------------------------------------------
# Custom Git Flow for "frontend-learning-hub"
# ---------------------------------------------------------------

# Define allowed commit types and their emojis.
declare -A EMOJI_MAP=(
  ["feat"]="✨"
  ["fix"]="🐛"
  ["docs"]="📚"
  ["style"]="💄"
  ["refactor"]="♻️"
  ["test"]="✅"
  ["chore"]="🔧"
  ["revert"]="⏪️"
)

# Allowed branch scopes based on the repository structure.
# For example: "concepts", "projects", "utils", "public", "docs"
VALID_BRANCH_SCOPES=("concepts" "projects" "utils" "public" "docs")

# Allowed commit scopes.
# Examples: "animations", "api-integration", "responsive-design", "gallery", "e-commerce", "portfolio", "js-practice", "css-advanced", "html", "docs"
VALID_COMMIT_SCOPES=("animations" "api-integration" "responsive-design" "gallery" "e-commerce" "portfolio" "js-practice" "css-advanced" "html" "docs")

DEFAULT_PR_BASE="main"        # Base branch for PRs
AUTO_FORMAT=true              # Execute Prettier before commits

# ---------------------------------------------------------------
# Parameter Validation
# ---------------------------------------------------------------
# Expected parameters:
# $1: type (feat, fix, docs, style, refactor, test, chore, revert)
# $2: branch scope (e.g., concepts, projects, utils, public, docs)
# $3: commit scope (can be multiple, separated by commas)
# $4: message (short description, in imperative lowercase)
# $5: (Optional) Issue number

if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ] || [ -z "$4" ]; then
    echo "Usage: $0 <type> <branch-scope> <commit-scope> \"<message>\" [issue-number]"
    echo "Example: $0 feat projects e-commerce \"add shopping cart functionality\" 123"
    exit 1
fi

# Validate type
if [[ -z "${EMOJI_MAP[$1]}" ]]; then
    echo "Invalid type! Valid types: feat, fix, docs, style, refactor, test, chore, revert"
    exit 1
fi

# Validate branch scope
found_branch=false
for valid in "${VALID_BRANCH_SCOPES[@]}"; do
    if [ "$2" == "$valid" ]; then
        found_branch=true
        break
    fi
done
if [ "$found_branch" = false ]; then
    echo "Invalid branch scope! Valid branch scopes: ${VALID_BRANCH_SCOPES[*]}"
    exit 1
fi

# Validate commit scope (allowing multiple scopes separated by commas)
IFS=',' read -ra commit_scopes <<< "$3"
for scope in "${commit_scopes[@]}"; do
    scope_trimmed=$(echo "$scope" | xargs)
    valid_scope=false
    for valid in "${VALID_COMMIT_SCOPES[@]}"; do
        if [ "$scope_trimmed" == "$valid" ]; then
            valid_scope=true
            break
        fi
    done
    if [ "$valid_scope" = false ]; then
        # Allow commit scopes that start with "project/" (case-insensitive)
        lowercase=$(echo "$scope_trimmed" | tr '[:upper:]' '[:lower:]')
        if [[ $lowercase == project/* ]]; then
            valid_scope=true
        fi
    fi
    if [ "$valid_scope" = false ]; then
        echo "Invalid commit scope '$scope_trimmed'! Valid commit scopes: ${VALID_COMMIT_SCOPES[*]}"
        exit 1
    fi
done

# ---------------------------------------------------------------
# Dynamic Configuration
# ---------------------------------------------------------------
# Branch name will be the branch scope (e.g., "projects")
BRANCH_NAME="$2"
EMOJI=${EMOJI_MAP[$1]}
# Compose the commit message with the provided commit scopes and message.
COMMIT_MSG="$1($3): $EMOJI $4"
PR_TITLE="$COMMIT_MSG"
PR_BODY_FILE=".github/pull_request_template.md"

# ---------------------------------------------------------------
# Helper Functions
# ---------------------------------------------------------------
branch_exists() {
    git show-ref --verify --quiet "refs/heads/$BRANCH_NAME" || \
    git ls-remote --exit-code --heads origin "$BRANCH_NAME" >/dev/null
}

format_code() {
    if [ "$AUTO_FORMAT" = true ]; then
        echo "→ Formatting code with Prettier..."
        npx prettier --write "src/**/*.{js,ts,jsx,tsx,css,scss,html}" --ignore-path .prettierignore
    fi
}

# ---------------------------------------------------------------
# Main Workflow
# ---------------------------------------------------------------
format_code

if branch_exists; then
    echo "→ Updating existing branch: $BRANCH_NAME"
    git checkout "$BRANCH_NAME"
    git pull origin "$BRANCH_NAME"
else
    echo "→ Creating new branch: $BRANCH_NAME"
    git checkout -b "$BRANCH_NAME"
fi

git add .
git commit -m "$COMMIT_MSG"

if git rev-parse --symbolic-full-name "@{u}" >/dev/null 2>&1; then
    git push
else
    git push -u origin "$BRANCH_NAME"
fi

# Create the pull request via GitHub CLI if the branch is new.
if ! branch_exists; then
    if [ -f "$PR_BODY_FILE" ]; then
        PR_BODY=$(cat "$PR_BODY_FILE")
    else
        PR_BODY="Detailed description..."
    fi
    
    gh pr create \
        --title "$PR_TITLE" \
        --body "$PR_BODY" \
        --base "$DEFAULT_PR_BASE" \
        --head "$BRANCH_NAME" \
        ${5:+--issue $5}
fi

echo "✔ Workflow completed!"
