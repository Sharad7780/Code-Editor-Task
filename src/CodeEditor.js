import React, { useState } from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";
import 'prismjs/components/prism-jsx.min';

const CodeEditor = () => {
  const [code, setCode] = useState(`
    const greet = () => {
      console.log("Hello, world!");
    };
    greet();
  `);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const highlightCode = (code) => {
    return Prism.highlight(code, Prism.languages.jsx, 'jsx');
  };

  return (
    <div className="editor-container" style={{ position: 'relative', fontFamily: 'monospace' }}>
      <pre
        className="editor-highlighted"
        dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          margin: 0,
          pointerEvents: 'none',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          color: 'inherit',
          backgroundColor: 'inherit',
        }}
      />
      <textarea
        className="editor-textarea"
        value={code}
        onChange={handleChange}
        spellCheck="false"
        style={{
          position: 'relative',
          background: 'none',
          color: 'transparent',
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          padding: 0,
          resize: 'none',
          fontSize: '16px',
          fontFamily: 'monospace',
          lineHeight: '1.5',
          whiteSpace: 'pre-wrap',
          overflowWrap: 'break-word',
          caretColor: '#000',  // Ensure the caret is visible
        }}
      />
    </div>
  );
};

export default CodeEditor;
