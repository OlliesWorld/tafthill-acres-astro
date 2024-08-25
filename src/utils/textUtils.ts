// src/utils/textUtils.ts

// Function to decode HTML entities
export function decodeHtmlEntities(text: string) {
    const entities: { [key: string]: string } = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39': "'",
        '&nbsp;': ' ',
        // Add more entities as needed
    };
    return text.replace(/&[a-zA-Z0-9#]+;/g, (match) => entities[match] || match);
}

// Function to clean unwanted characters and replace commas with line breaks
export function cleanText(text: string) {
    return text.replace(/[^\x20-\x7E]/g, "").replace(/,/g, '\n');
}