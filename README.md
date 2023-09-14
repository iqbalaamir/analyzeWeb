# Web Page Analysis Plugin

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Limitations](#limitations)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Web Page Analysis Plugin is a Chrome extension designed to analyze web pages and extract useful information. It can generate a summary of a web page or list its major points, providing a quick way to understand the content without reading the entire page.


## Features

- **Summary Extraction**: Generates a summary by concatenating the first three paragraphs of the web page.
- **Major Points Extraction**: Lists all the major points by extracting headings (h1, h2, h3, h4, h5, h6) from the web page.
- **Copy to Clipboard**: Allows you to copy the analysis result to the clipboard with a single click.

## Installation

1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/iqbalaamir/analyzeWeb
    ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode by clicking the toggle switch.
4. Click "Load unpacked" and select the directory where you cloned the repository.

## Usage

1. Navigate to a web page you want to analyze.
2. Click the plugin icon in the Chrome toolbar to open the popup.
3. Choose either "Summary" or "Major Points" to perform the analysis.
4. Click "Copy to Clipboard" to copy the analysis result.

## Documentation

For more details on how the plugin works, please refer to the [Documentation](./DOCUMENTATION.md).

## Limitations

- The summary is limited to the first three paragraphs of the web page.
- May not work as expected on web pages with complex structures or client-side rendering.

## Future Enhancements

- Support for more types of analyses.
- Improved accuracy and comprehensiveness in summaries.

## Contributing

We welcome contributions from the community. If you'd like to contribute, please fork the repository and make your changes, then create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

For any issues, please [create an issue](https://github.com/yourusername/WebPageAnalysisPlugin/issues) on GitHub. Thank you for using the Web Page Analysis Plugin!
