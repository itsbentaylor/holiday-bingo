#!/bin/bash

# Rename movie poster files to match the expected format
# This script removes years, extra spaces, and standardizes extensions to .jpg

cd "$(dirname "$0")/Src" || exit

# Function to rename a file
rename_file() {
    if [ -f "$1" ]; then
        mv "$1" "$2"
        echo "✓ Renamed: $1 → $2"
    else
        echo "✗ Not found: $1"
    fi
}

echo "Renaming movie poster files..."
echo "==============================="

# Rename each file (checking both .jpg and .jpeg)
rename_file "Home Alone 2- Lost in New York (1992) .jpeg" "Home_Alone_2.jpg"
rename_file "elf.jpeg" "Elf.jpg"
rename_file "The Polar Express (2004) .jpeg" "The_Polar_Express.jpg"
rename_file "A Christmas Story (1983) .jpeg" "A_Christmas_Story.jpg"
rename_file "The Grinch (2018) .jpeg" "The_Grinch.jpg"
rename_file "Miracle on 34th Street (1994) .jpg" "Miracle_on_34th_Street.jpg"
rename_file "It's a Wonderful Life (1946) .jpeg" "Its_a_Wonderful_Life.jpg"
rename_file "The Santa Clause (1994) .jpeg" "The_Santa_Clause.jpg"
rename_file "National Lampoon's Christmas Vacation (1989) .jpeg" "National_Lampoons_Christmas_Vacation.jpg"
rename_file "Jingle All the Way (1996) .jpg" "Jingle_All_the_Way.jpg"
rename_file "The Nightmare Before Christmas (1993) .jpeg" "The_Nightmare_Before_Christmas.jpg"
rename_file "Love Actually (2003) .jpg" "Love_Actually.jpg"
rename_file "The Holiday (2006).jpg" "The_Holiday.jpg"
rename_file "Fred Claus (2007) .jpeg" "Fred_Claus.jpg"
rename_file "The Christmas Chronicles (2018) .jpg" "The_Christmas_Chronicles.jpg"
rename_file "Klaus (2019) .jpeg" "Klaus.jpg"
rename_file "A Christmas Carol (2009) .jpeg" "A_Christmas_Carol.jpg"
rename_file "The Muppet Christmas Carol (1992) .jpg" "The_Muppet_Christmas_Carol.jpg"
rename_file "White Christmas (1954) .jpeg" "White_Christmas.jpg"
rename_file "Die Hard (1988) .jpg" "Die_Hard.jpg"
rename_file "The Family Stone (2005) .jpg" "The_Family_Stone.jpg"
rename_file "Four Christmases (2008) .jpg" "Four_Christmases.jpg"
rename_file "Last Christmas (2019) .jpg" "Last_Christmas.jpg"
rename_file "Gremlins (1984) .jpg" "Gremlins.jpg"
rename_file "Scrooged (1988) .jpg" "Scrooged.jpg"
rename_file "Arthur Christmas (2011) .jpg" "Arthur_Christmas.jpg"
rename_file "The Year Without a Santa Claus (1974) .jpeg" "The_Year_Without_a_Santa_Claus.jpg"
rename_file "Jack Frost (1998) .jpeg" "Jack_Frost.jpg"
rename_file "Rise of the Guardians (2012) .jpg" "Rise_of_the_Guardians.jpg"
rename_file "Rudolph the Red-Nosed Reindeer (1964) .jpg" "Rudolph_the_Red-Nosed_Reindeer.jpg"
rename_file "Frosty the Snowman (1969) .jpg" "Frosty_the_Snowman.jpg"
rename_file "A Charlie Brown Christmas (1965) .jpg" "A_Charlie_Brown_Christmas.jpg"
rename_file "How the Grinch Stole Christmas (2000) .jpg" "How_the_Grinch_Stole_Christmas.jpg"
rename_file "Deck the Halls (2006) .jpg" "Deck_the_Halls.jpg"

echo "==============================="
echo "Renaming complete!"
echo ""
echo "Missing file needed:"
echo "- Home_Alone.jpg (original Home Alone - not Home Alone 2)"

