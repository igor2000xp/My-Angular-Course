#!/bin/bash
# Wrapper script to run Angular CLI MCP server with version 21.0.5
# This ensures we use the correct version even when local node_modules exists

PROJECT_DIR="/Volumes/MAC_DOCS/repos/angular/simonov/My-Angular-Course"

# Change to project directory  
cd "$PROJECT_DIR"

# Use npm exec with explicit package version to bypass local node_modules
# This forces npm to use the specified version from the registry
exec npm exec --yes --package=@angular/cli@21.0.5 -- ng mcp "$@"
