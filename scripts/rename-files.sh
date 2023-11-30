#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <parent_directory>"
  exit 1
fi

parent_directory="$1"

if [ ! -d "$parent_directory" ]; then
  echo "Error: Parent directory not found."
  exit 1
fi

# Find all JPEG files in subdirectories (excluding the starting directory)
files=$(find "$parent_directory" -mindepth 2 -type f -iname "*.jpg" -o -iname "*.jpeg")

# Loop through each file and rename based on DateTimeOriginal
for file in $files; do
  datetime=$(exiftool -Date_Time_Original -d "%b %e, %Y at %T" -s3 "$file")

  if [ -z "$datetime" ]; then
    # Try "DateTimeOriginal" if "Date_Time_Original" is not found
    datetime=$(exiftool -DateTimeOriginal -d "%b %e, %Y at %T" -s3 "$file")
  fi

  if [ -n "$datetime" ]; then
    # Convert the formatted date and time to a suitable format for a filename
    datetime=$(date -j -f "%b %e, %Y at %T" "$datetime" "+%Y%m%d_%H%M%S")

    # Extract file extension
    extension="${file##*.}"

    # Construct new filename
    new_name="${datetime}.${extension}"

    # Extract the original directory of the file
    original_dir=$(dirname "$file")

    # Construct the new path with the original directory
    new_path="$original_dir/$new_name"

    # Rename the file by moving it to the new path
    mv "$file" "$new_path"

    echo "Renamed: $file -> $new_path"
  else
    echo "Error: Unable to extract DateTimeOriginal from $file"
    exiftool "$file"  # Add this line to print all Exif metadata for debugging
  fi
done

echo "Renaming complete."
