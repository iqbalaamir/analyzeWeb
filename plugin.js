document.addEventListener("DOMContentLoaded", function () {
    const summaryButton = document.getElementById("summaryButton");
    const majorPointsButton = document.getElementById("majorPointsButton");
    const copyButton = document.getElementById("copyButton");

    let currentAnalysisResult = "";

    summaryButton.addEventListener("click", function () {
        analyzePage("summary");
    });

    majorPointsButton.addEventListener("click", function () {
        analyzePage("majorPoints");
    });

    copyButton.addEventListener("click", function () {
        copyToClipboard(currentAnalysisResult);
    });

    function analyzePage(analysisType) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs.length > 0) {
                const url = tabs[0].url;

                fetch(url)
                    .then(response => response.text())
                    .then(html => {
                        const analysisResult = analyzeWebPage(html, analysisType);
                        displayAnalysisResult(analysisResult);
                        currentAnalysisResult = analysisResult; // Store the result for copying
                    })
                    .catch(error => {
                        console.error("Error fetching web page:", error);
                        alert("An error occurred while fetching the web page.");
                    });
            } else {
                alert("No active tab found.");
            }
        });
    }

    function analyzeWebPage(html, analysisType) {
        let result = "";

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        if (analysisType === "summary") {
            const paragraphs = doc.querySelectorAll("p");
            const firstFewParagraphs = Array.from(paragraphs).slice(0, 3);
            result = Array.from(firstFewParagraphs).map(p => p.textContent).join(' ');
        } else if (analysisType === "majorPoints") {
            const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
            const majorPoints = Array.from(headings).map(heading => heading.textContent);
            result = "<ul>" + majorPoints.map(point => `<li>${point}</li>`).join('') + "</ul>";
        }

        return result;
    }

    function displayAnalysisResult(result) {
        const contentDiv = document.getElementById("contentDiv");
        contentDiv.innerHTML = result;
    }

    function copyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Copied to clipboard: " + text);
    }
});
