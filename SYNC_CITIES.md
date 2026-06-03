# Syncing Cities from Notion

## Quick Sync

Just ask Claude Code:

```
"Sync my cities from Notion"
```

or

```
"Update the map with latest cities and projects from Notion"
```

Claude Code will:
1. Use Notion MCP tools to query your cities database
2. Fetch project details for each city
3. Filter to Active and Done projects only
4. Update `src/data/cities.ts` with the data
5. Build and verify everything works

## What Gets Synced

From your Notion **cities** database:
- City name, state, country
- Latitude/longitude (from Place field)
- Linked projects

From each linked **project**:
- Status (only Active or Done are included)
- Project name (from "Project name (website)" field)
- Brief description

## After Syncing

1. Review the changes: `git diff src/data/cities.ts`
2. Test locally: `npm run dev`
3. Commit and deploy when ready

## Why This Works

You already have Notion MCP tools configured in Claude Code, so there's no need for:
- ❌ Notion API keys
- ❌ npm scripts
- ❌ Manual database IDs
- ❌ Integration setup

Just ask Claude Code and it's done! 🎉
