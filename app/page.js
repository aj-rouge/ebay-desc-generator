"use client";
import React, { useState, useEffect } from "react";
import html from "./html.jsx";
function App() {
  const [title, setTitle] = useState("This is title");
  const [mainText, setMainText] = useState("This is Main text ");
  const [imageUrl, setImageUrl] = useState(
    "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
  );
  const [generatedHtml, setGeneratedHtml] = useState("");
  const [showHtml, setShowHtml] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Update generated HTML in real-time
  useEffect(() => {
    const sanitizedTitle = title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedMainText = mainText
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    setGeneratedHtml(html);
  }, [title, mainText, imageUrl]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedHtml).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">
        Embeddable HTML Generator
      </h2>
      <div className="flex gap-8">
        {/* Left Column: Input Form */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <label className="text-black mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-black mb-2">Main Text:</label>
          <textarea
            value={mainText}
            onChange={(e) => setMainText(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          />

          <label className="text-black mb-2">Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Column: Buttons and Preview */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <button
            onClick={() => setShowHtml(!showHtml)}
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            {showHtml ? "Hide HTML" : "Show HTML"}
          </button>

          {showHtml && (
            <div className="mb-4 h-40 overflow-auto">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Generated HTML:
              </h3>
              <pre className="bg-gray-100 p-4 rounded-md text-sm h-40 overflow-auto">
                {generatedHtml}
              </pre>
            </div>
          )}

          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            {copySuccess ? "Copied!" : "Copy HTML to Clipboard"}
          </button>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Preview:</h3>

      <iframe
        srcDoc={generatedHtml}
        title="Generated Preview"
        className="w-full min-h-screen border rounded-md overflow-auto bg-gray-200 p-4"
      />
    </div>
  );
}

export default App;
