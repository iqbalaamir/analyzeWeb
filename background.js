function analyzeWebPage(html, analysisType) {
    let result = "";

    // Parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    if (analysisType === "summary") {
        // Implement summary extraction logic
        const paragraphs = doc.querySelectorAll("p"); // Extract all paragraphs
        const firstFewParagraphs = Array.from(paragraphs).slice(0, 3); // Get the first 3 paragraphs

        // Concatenate the first 3 paragraphs as the summary
        result = Array.from(firstFewParagraphs).map(p => p.textContent).join(' ');
    } else if (analysisType === "majorPoints") {
        // Implement major points extraction logic
        const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6"); // Extract all headings

        // Extract text content of headings
        const majorPoints = Array.from(headings).map(heading => heading.textContent);

        // Combine major points as a list
        result = "<ul>" + majorPoints.map(point => `<li>${point}</li>`).join('') + "</ul>";
    }

    return result;
}
