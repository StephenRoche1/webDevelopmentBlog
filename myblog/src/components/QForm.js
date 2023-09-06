import React, { useState } from "react";

function QForm(props) {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function from props and pass the question and category
    props.onSubmit(question, category);
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <button type="submit">Post Question</button>
    </form>
  );
}

export default QForm;
