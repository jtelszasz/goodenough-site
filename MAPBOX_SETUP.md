# Mapbox City Map Setup

This document explains how to set up the interactive city map on your website.

## Overview

The city map displays all the cities you've worked with, using data from your Notion database. It uses Mapbox GL JS for rendering and includes features like:

- Interactive markers for each city
- Clustering when zoomed out
- Click markers to see city details and project count
- Responsive design for mobile devices
- Custom styling matching your brand colors (cobalt #2708A0 and teal #006D77)

## Setup Instructions

### 1. Get a Mapbox Access Token

1. Go to [mapbox.com](https://www.mapbox.com/) and sign up for a free account
2. Navigate to your [Access Tokens page](https://account.mapbox.com/access-tokens/)
3. Copy your default public token (starts with `pk.`)
   - OR create a new token with these scopes:
     - `styles:read`
     - `fonts:read`
     - `tiles:read`

### 2. Configure Environment Variable

1. Open the `.env` file in the root of your project
2. Replace the placeholder token with your actual Mapbox token:

```
PUBLIC_MAPBOX_TOKEN=pk.your_actual_token_here
```

3. Save the file

### 3. Build and Deploy

The map will now work when you build and preview your site:

```bash
npm run build
npm run preview
```

Or run the development server:

```bash
npm run dev
```

## Cost Information

**Mapbox Free Tier:**
- 50,000 free map loads per month
- 100,000 free geocoding requests per month (not used in current implementation)

**Expected Usage:**
- For a small consulting site with ~5,000 page views/month
- Assuming 80% of visitors scroll to the map section
- Estimated: ~4,000 map loads/month = **FREE**

**Overage Pricing:**
- If you exceed 50,000 loads: $5 per 1,000 additional loads
- Unlikely for most consulting websites

## How It Works

### Data Flow

1. **Build Time:** City data is statically imported from `/src/data/cities.ts`
2. **Runtime:** Mapbox GL JS loads map tiles from Mapbox's CDN
3. **Interaction:** All interactions happen client-side with no additional API calls

### File Structure

```
/src/
├── components/
│   └── MapboxCityMap.astro    # Main map component
├── data/
│   └── cities.ts               # Static city data
└── pages/
    └── index.astro             # Home page with map section
```

### Updating City Data

Currently, city data is hard-coded in `/src/data/cities.ts`. To update:

1. Edit the `cities` array in that file
2. Rebuild the site: `npm run build`
3. Deploy the updated build

**Future Enhancement:** The plan includes connecting to Notion API at build time to automatically fetch and geocode city names. This would allow you to update cities in Notion without touching code.

## Customization

### Map Style

To change the base map style, edit `/src/components/MapboxCityMap.astro`:

```javascript
style: 'mapbox://styles/mapbox/light-v11'
```

Available built-in styles:
- `light-v11` (current)
- `dark-v11`
- `streets-v12`
- `outdoors-v12`
- `satellite-v9`

Or create a custom style in [Mapbox Studio](https://studio.mapbox.com/).

### Colors

Marker colors are defined in the component:
- Default marker: `#2708A0` (cobalt)
- Hover state: `#006D77` (teal)
- Clusters: Gradient from teal to cobalt

### Map Center and Zoom

Edit the initial view in `/src/components/MapboxCityMap.astro`:

```javascript
center: [-95, 40], // [longitude, latitude]
zoom: 3.5
```

## Troubleshooting

### Map shows "Map configuration required"

**Cause:** Mapbox token not set or still using placeholder value.

**Solution:**
1. Check your `.env` file
2. Make sure `PUBLIC_MAPBOX_TOKEN` is set to your actual token (starts with `pk.`)
3. Restart your dev server: `npm run dev`

### Map doesn't load or shows blank

**Cause:** Invalid Mapbox token or token restrictions.

**Solution:**
1. Verify your token at [mapbox.com/account/access-tokens](https://account.mapbox.com/access-tokens/)
2. Check token scopes include `styles:read`, `fonts:read`, `tiles:read`
3. Check browser console for specific error messages

### Map loads but no markers appear

**Cause:** Issue with city data format or coordinates.

**Solution:**
1. Check browser console for JavaScript errors
2. Verify city data in `/src/data/cities.ts` has valid latitude/longitude values
3. Ensure coordinates are in correct order: `[longitude, latitude]` (not lat, lng!)

## Support

For Mapbox-specific issues:
- [Mapbox GL JS Documentation](https://docs.mapbox.com/mapbox-gl-js/)
- [Mapbox Support](https://support.mapbox.com/)

For implementation questions about this site, contact your developer.
