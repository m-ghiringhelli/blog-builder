import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [font, setFont] = useState();
  const [align, setAlign] = useState();

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, font, align }}/>
      <Editor {...{ title, setTitle, subtitle, setSubtitle, setFont, setAlign }}/>
    </main>
  );
}
