import React from "react";
import Entry from "../components/Entry";
import emojis from "../emojipedia";

function createEntry(element) {
  return (
    <Entry
      key={element.id}
      emoji={element.emoji}
      name={element.name}
      meaning={element.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(createEntry)}</dl>
    </div>
  );
}

export default App;
