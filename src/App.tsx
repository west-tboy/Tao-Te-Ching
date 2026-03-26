import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ChapterContent } from './components/ChapterContent';
import { chapters } from './data/chapters';
import './App.css';

function App() {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [showHero, setShowHero] = useState(true);

  const handlePrev = useCallback(() => {
    setCurrentChapter(prev => Math.max(1, prev - 1));
    setShowHero(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentChapter(prev => Math.min(chapters.length, prev + 1));
    setShowHero(false);
  }, []);

  const handleSelectChapter = useCallback((id: number) => {
    setCurrentChapter(id);
    setShowHero(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const chapter = chapters.find(c => c.id === currentChapter);

  return (
    <div className="app">
      {/* Hero Banner - Purpose Statement */}
      {showHero && (
        <div className="hero-banner">
          <div className="hero-content">
            <h1 className="hero-title">道德经</h1>
            <p className="hero-purpose">
              我们的目的是让读者实现作为人的更好的发展，<br />
              为个人、家庭、社会、国家能够做一些美好的事，<br />
              <strong>切忌为了个人一已私利滥用。</strong>
            </p>
          </div>
        </div>
      )}

      <Header
        currentChapter={currentChapter}
        totalChapters={chapters.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <div className="app-body">
        <Sidebar
          chapters={chapters}
          currentChapter={currentChapter}
          onSelectChapter={handleSelectChapter}
        />

        <main className={`main-content ${showHero ? 'with-hero' : ''}`}>
          {chapter && <ChapterContent chapter={chapter} />}
        </main>
      </div>
    </div>
  );
}

export default App;
