import React from 'react';

const Editor = ({ markdown, handleChange }) => {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={handleChange}
      placeholder="Enter Markdown..."
    />
  );
};

export default Editor;
