import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import QModal from './components/QModal';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Set the initial state to false
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [questionsList, setQuestionsList] = useState([]);
  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };
  const handleSubmit = (question, category) => {
    const newQuestion = {
      text: question,
      date: new Date().toLocaleString(),
      category,
    };
  
    setQuestionsList([...questionsList, newQuestion]);
  
    // Clear the form fields
    setQuestion('');
    setCategory('');
    closeModal();
  };
  
  return (
    <div>
      <Header />
      <Navigation />
      <MainContent />
      <div>
        <button onClick={openModal}>Ask a Question?</button>
        <QModal isOpen={isModalOpen}
        onClose={closeModal}
        question={question}
        setQuestion={setQuestion}
        category={category}
        setCategory={setCategory}
        onSubmit={handleSubmit} />
      </div>
      <ul>
  {questionsList.map((q, index) => (
    <div className="question-row" key={index}>
      <div>
        <strong>Question:</strong> {q.text}
      </div>
      <div>
        <strong>Date:</strong> {q.date}
      </div>
      <div>
        <strong>Category:</strong> {q.category}
      </div>
    </div>
  ))}
</ul>

      <Footer />
    </div>
  );
}

export default App;
