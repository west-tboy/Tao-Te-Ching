import { ThemeToggle } from './ThemeToggle';
import './Header.css';

interface HeaderProps {
  currentChapter: number;
  totalChapters: number;
  onPrev: () => void;
  onNext: () => void;
}

export function Header({ currentChapter, totalChapters, onPrev, onNext }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-nav">
        <button
          className="nav-btn"
          onClick={onPrev}
          disabled={currentChapter === 1}
        >
          ← 上一章
        </button>
        <span className="chapter-progress">
          第 {currentChapter} / {totalChapters} 章
        </span>
        <button
          className="nav-btn"
          onClick={onNext}
          disabled={currentChapter === totalChapters}
        >
          下一章 →
        </button>
      </div>
      <ThemeToggle />
    </header>
  );
}
