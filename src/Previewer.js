import React from 'react';
import {marked} from "https://esm.sh/marked";

const Previewer = ({ markdown }) => {
  const createMarkup = () => {
    return { __html: marked(markdown) }; // Use 'marked' directly here
  };

  return <div id="preview" dangerouslySetInnerHTML={createMarkup()} />;
};

export default Previewer;
