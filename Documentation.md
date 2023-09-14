# Web Page Analysis Plugin Documentation

## Overview

The Web Page Analysis Plugin is a Chrome extension designed to analyze web pages and extract summaries or major points. The plugin provides a popup interface that allows users to choose between generating a summary or listing major points of the active web page.

## Features

- Extracts a summary of the web page by concatenating the first three paragraphs.
- Lists major points by extracting all headings (h1, h2, h3, h4, h5, h6) from the web page.
- Provides a "Copy to Clipboard" button to copy the analysis result.

## Installation

1. Download the plugin repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode.
4. Click "Load unpacked" and select the plugin directory.

## Manifest File

The `manifest.json` file contains metadata about the extension, such as its name, version, and permissions it requires.

```json
{
    "manifest_version": 3,
    "name": "Web Page Analysis Plugin",
    "version": "1.0",
    ...
}
```

## Popup Interface

The popup interface is built using HTML and Bootstrap. It contains two buttons for selecting the type of analysis and a div for displaying the result.

### HTML Structure

```html
<div class="container">
    <h1 class="mb-4">Web Page Analysis</h1>
    <div class="btn-group" role="group">
        <button id="summaryButton" class="btn btn-primary">Summary</button>
        <button id="majorPointsButton" class="btn btn-primary">Major Points</button>
    </div>
    <div id="contentDiv"></div>
    <button id="copyButton" class="btn btn-primary">Copy to Clipboard</button>
</div>
```

### CSS Styles

The popup interface uses custom CSS styles for layout and appearance. For example, the `.container` class sets the background color and border.

## JavaScript Logic

The main logic is implemented in JavaScript.

### Functions

- `analyzeWebPage(html, analysisType)`: Parses the HTML content and returns either a summary or a list of major points based on `analysisType`.
- `analyzePage(analysisType)`: Fetches the HTML content of the active tab and calls `analyzeWebPage`.
- `displayAnalysisResult(result)`: Displays the analysis result in the popup.
- `copyToClipboard(text)`: Copies the given text to the clipboard.

### Event Listeners

- `summaryButton`: Triggers the summary analysis.
- `majorPointsButton`: Triggers the major points analysis.
- `copyButton`: Copies the current analysis result to the clipboard.

## Usage

1. Open a web page you want to analyze.
2. Click the plugin icon to open the popup.
3. Choose either "Summary" or "Major Points" to perform the analysis.
4. Click "Copy to Clipboard" to copy the result.

## Limitations

- The summary is limited to the first three paragraphs.
- The plugin may not work on web pages with complex structures or client-side rendering.

## Future Enhancements

- Support for more types of analyses.
- Improved accuracy and comprehensiveness in summaries.

## License

MIT License

---

This documentation provides a comprehensive guide to understanding, installing, and using the Web Page Analysis Plugin.
