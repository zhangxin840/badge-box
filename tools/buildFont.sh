files=`find src -type f \( -name '*.html' -or -name '*.*js' -or -name '*.*css' \) | tr '\n' ' '`
echo $files
# characters=`grep -E -o -h [^0-9a-zA-Z[:space:][:punct:]]+ $files | sort -u | paste -sd '\0' -`
# characters=`grep -E -o -h -r . $files | sort -u | paste -sd '\0' -`
characters=`grep -E -o -h -r . $files | sort -u | tr '\n' '\0'`
echo $characters

fontmin src/browser/common/fonts/*.ttf build/public/assets/fonts -t $characters
