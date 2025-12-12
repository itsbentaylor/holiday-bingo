# Movie Poster Image Files

This document lists all the image files needed in the `Src` folder for the Holiday Movie Bingo game.

## Required Image Files (35 total)

All images should be in `.jpg` format and placed in the `Src/` folder.

### File Naming Convention
- Replace spaces with underscores
- Replace apostrophes with nothing
- Use title case
- File extension: `.jpg`

### Complete List of Required Files:

1. `Home_Alone.jpg`
2. `Elf.jpg`
3. `The_Polar_Express.jpg`
4. `A_Christmas_Story.jpg`
5. `The_Grinch.jpg`
6. `Home_Alone_2.jpg`
7. `Miracle_on_34th_Street.jpg`
8. `Its_a_Wonderful_Life.jpg`
9. `The_Santa_Clause.jpg`
10. `National_Lampoons_Christmas_Vacation.jpg`
11. `Jingle_All_the_Way.jpg`
12. `The_Nightmare_Before_Christmas.jpg`
13. `Love_Actually.jpg`
14. `The_Holiday.jpg`
15. `Fred_Claus.jpg`
16. `The_Christmas_Chronicles.jpg`
17. `Klaus.jpg`
18. `A_Christmas_Carol.jpg`
19. `The_Muppet_Christmas_Carol.jpg`
20. `White_Christmas.jpg`
21. `Die_Hard.jpg`
22. `The_Family_Stone.jpg`
23. `Four_Christmases.jpg`
24. `Last_Christmas.jpg`
25. `Gremlins.jpg`
26. `Scrooged.jpg`
27. `Arthur_Christmas.jpg`
28. `The_Year_Without_a_Santa_Claus.jpg`
29. `Jack_Frost.jpg`
30. `Rise_of_the_Guardians.jpg`
31. `Rudolph_the_Red-Nosed_Reindeer.jpg`
32. `Frosty_the_Snowman.jpg`
33. `A_Charlie_Brown_Christmas.jpg`
34. `How_the_Grinch_Stole_Christmas.jpg`
35. `Deck_the_Halls.jpg`

## Directory Structure

```
holiday-bingo/
├── Src/
│   ├── Home_Alone.jpg
│   ├── Elf.jpg
│   ├── The_Polar_Express.jpg
│   ├── A_Christmas_Story.jpg
│   ├── The_Grinch.jpg
│   ├── Home_Alone_2.jpg
│   ├── Miracle_on_34th_Street.jpg
│   ├── Its_a_Wonderful_Life.jpg
│   ├── The_Santa_Clause.jpg
│   ├── National_Lampoons_Christmas_Vacation.jpg
│   ├── Jingle_All_the_Way.jpg
│   ├── The_Nightmare_Before_Christmas.jpg
│   ├── Love_Actually.jpg
│   ├── The_Holiday.jpg
│   ├── Fred_Claus.jpg
│   ├── The_Christmas_Chronicles.jpg
│   ├── Klaus.jpg
│   ├── A_Christmas_Carol.jpg
│   ├── The_Muppet_Christmas_Carol.jpg
│   ├── White_Christmas.jpg
│   ├── Die_Hard.jpg
│   ├── The_Family_Stone.jpg
│   ├── Four_Christmases.jpg
│   ├── Last_Christmas.jpg
│   ├── Gremlins.jpg
│   ├── Scrooged.jpg
│   ├── Arthur_Christmas.jpg
│   ├── The_Year_Without_a_Santa_Claus.jpg
│   ├── Jack_Frost.jpg
│   ├── Rise_of_the_Guardians.jpg
│   ├── Rudolph_the_Red-Nosed_Reindeer.jpg
│   ├── Frosty_the_Snowman.jpg
│   ├── A_Charlie_Brown_Christmas.jpg
│   ├── How_the_Grinch_Stole_Christmas.jpg
│   └── Deck_the_Halls.jpg
├── index.html
├── host.html
├── start.html
└── README.md
```

## Image Specifications

**Recommended:**
- Format: JPG/JPEG
- Aspect Ratio: 2:3 (standard movie poster)
- Minimum Width: 400px
- Recommended Width: 500-800px
- File size: Keep under 500KB per image for faster loading

## Notes

- All apostrophes in movie titles are removed from filenames (e.g., "It's a Wonderful Life" → `Its_a_Wonderful_Life.jpg`)
- "National Lampoon's" becomes "National_Lampoons" (no apostrophe)
- Hyphens are kept in filenames (e.g., `Rudolph_the_Red-Nosed_Reindeer.jpg`)
- The code expects exact filename matches (case-sensitive on some systems)

## Testing

After adding all images to the `Src/` folder, open the pages and verify all posters load correctly:
- `index.html` - Player bingo card page
- `host.html` - Host controller page

If an image doesn't appear, check:
1. Filename matches exactly (including case)
2. File is in the `Src/` folder
3. File extension is `.jpg`
4. File is not corrupted

