const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content)
    {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        process.env.NODE_ENV === "production" &&
        purgecss({
            content   : ['./src/**/*.js'],
            css       : ['./src/**/*.css'],
            extractors: [
                {
                    extractor : TailwindExtractor,
                    extensions: ["html", "js"]
                }
            ]
        })
    ]
};
