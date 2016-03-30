files='views/**/*.ejs src/*.js'

# characters=`grep -E -o -h [^0-9a-zA-Z[:space:][:punct:]]+ $files | sort -u | paste -sd '\0' -`
characters=`grep -E -o -h -r . $files | sort -u | paste -sd '\0' -`
echo $characters

fontmin src/*.ttf public/assets/fonts -t $characters
