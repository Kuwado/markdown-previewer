import React, { useState } from 'react';
import Editor from './Editor'; // Import the Editor component
import Previewer from './Previewer'; // Import the Previewer component
import './App.css';

const App = () => {
  const defaultMarkdown = `
# Heading 1
## Heading 2
[Visit Google](https://www.google.com/)
\`Inline Code\`

\`\`\`
// Code block
function greet(name) {
  return 'Hello, ' + name + '!';
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

**Bold text**
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <Editor markdown={markdown} handleChange={handleChange} />
      <Previewer markdown={markdown} />
    </div>
  );
};

export default App;
