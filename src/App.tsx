import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ChapterContent } from './components/ChapterContent';
import { chapters } from './data/chapters';
import './App.css';

function App() {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [showHome, setShowHome] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handlePrev = useCallback(() => {
    setCurrentChapter(prev => Math.max(1, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentChapter(prev => Math.min(chapters.length, prev + 1));
  }, []);

  const handleSelectChapter = useCallback((id: number) => {
    setCurrentChapter(id);
  }, []);

  const handleEnter = useCallback(() => {
    setShowHome(false);
  }, []);

  const handleToggleSidebar = useCallback(() => {
    setSidebarCollapsed(prev => !prev);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showHome) {
        if (e.key === 'Enter') {
          handleEnter();
        }
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showHome, handlePrev, handleNext, handleEnter]);

  const chapter = chapters.find(c => c.id === currentChapter);

  // Home Page
  if (showHome) {
    return (
      <div className="home-page">
        <div className="home-content">
          <h1 className="home-title">道德经</h1>
          <p className="home-subtitle">老子</p>
          <div className="home-purpose">
            <p>我们的目的是让读者实现作为人的更好的发展，</p>
            <p>为个人、家庭、社会、国家能够做一些美好的事，</p>
            <p className="home-purpose-strong">切忌为了个人一已私利滥用。</p>
          </div>
          <button className="home-enter-btn" onClick={handleEnter}>
            开始阅读
          </button>
          <p className="home-hint">按 Enter 键或点击按钮进入</p>
        </div>
      </div>
    );
  }

  // Main Content Page
  return (
    <div className="app">
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
          isCollapsed={sidebarCollapsed}
          onToggle={handleToggleSidebar}
        />

        <main className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
          {chapter && <ChapterContent chapter={chapter} />}
        </main>
      </div>
    </div>
  );
}

export default App;
