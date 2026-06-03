# Good Enough Background Pattern

This folder contains the site's background pattern as an exportable file.

## Files

- **good-enough-background.svg** - Scalable vector background with 20px grid pattern
- **good-enough-background-1080p.png** - PNG version at 1920×1080 (HD presentation size)
- **good-enough-background-4k.png** - PNG version at 3840×2160 (4K)
- **good-enough-background-square.png** - PNG version at 2000×2000 (square format)

## Color Values

- **Background**: `#D6D5C9` (warm beige/tan)
- **Grid lines**: `rgba(11, 79, 138, 0.10)` (subtle blue at 10% opacity)
- **Grid size**: 20px × 20px squares

## Usage

### In PowerPoint/Keynote
1. Insert → Image → Select `good-enough-background-1080p.png` (or SVG for scalability)
2. Right-click image → Send to Back
3. Resize to fill slide

### In Figma/Sketch
1. Import SVG file
2. Use as background or create component
3. SVG scales perfectly to any size

### PNG Files Included
Pre-rendered PNG versions are included in three sizes:
- **1080p** (1920×1080) - Standard HD presentation size (~61KB)
- **4K** (3840×2160) - High resolution for print/large displays (~238KB)
- **Square** (2000×2000) - For social media or square formats (~210KB)

### Create Custom PNG Sizes
If you need a different size, you can convert the SVG:

**Using ImageMagick:**
```bash
magick good-enough-background.svg -resize 2560x1440 background-custom.png
```

**Using Inkscape:**
```bash
inkscape good-enough-background.svg --export-type=png --export-width=2560 --export-height=1440
```

## Customization

To change grid size or colors, edit the SVG file:
- Grid size: Change `width="20" height="20"` in the pattern definition
- Background color: Change `#D6D5C9` values
- Grid opacity: Change `rgba(11, 79, 138, 0.10)` to adjust transparency
