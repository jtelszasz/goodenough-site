# Good Enough Background Pattern

This folder contains the site's background pattern as an exportable file.

## Files

- **good-enough-background.svg** - Scalable vector background with 20px grid pattern

## Color Values

- **Background**: `#D6D5C9` (warm beige/tan)
- **Grid lines**: `rgba(11, 79, 138, 0.04)` (subtle blue at 4% opacity)
- **Grid size**: 20px × 20px squares

## Usage

### In PowerPoint/Keynote
1. Insert → Image → Select `good-enough-background.svg`
2. Right-click image → Send to Back
3. Resize to fill slide

### In Figma/Sketch
1. Import SVG file
2. Use as background or create component
3. SVG scales perfectly to any size

### Export as PNG
If you need a raster image:

**Using browser:**
1. Open `good-enough-background.svg` in Chrome/Firefox
2. Right-click → Save Image As → PNG

**Using ImageMagick:**
```bash
# 1920x1080 (HD presentation)
magick good-enough-background.svg -resize 1920x1080 background-1080p.png

# 3840x2160 (4K)
magick good-enough-background.svg -resize 3840x2160 background-4k.png

# Custom size
magick good-enough-background.svg -resize 2000x2000 background-custom.png
```

### Using Inkscape:
```bash
inkscape good-enough-background.svg --export-type=png --export-width=1920 --export-height=1080
```

## Customization

To change grid size or colors, edit the SVG file:
- Grid size: Change `width="20" height="20"` in the pattern definition
- Background color: Change `#D6D5C9` values
- Grid opacity: Change `rgba(11, 79, 138, 0.04)` to adjust transparency
