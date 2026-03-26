import { Chapter } from '../types';
import './Sidebar.css';

interface SidebarProps {
  chapters: Chapter[];
  currentChapter: number;
  onSelectChapter: (id: number) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ chapters, currentChapter, onSelectChapter, isCollapsed, onToggle }: SidebarProps) {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button
        className="sidebar-toggle"
        onClick={onToggle}
      >
        {isCollapsed ? '→' : '←'}
      </button>

      <nav className="sidebar-nav">
        <h2 className="sidebar-title">目录</h2>
        <ul className="chapter-list">
          {chapters.map(chapter => (
            <li key={chapter.id}>
              <button
                className={`chapter-item ${currentChapter === chapter.id ? 'active' : ''}`}
                onClick={() => onSelectChapter(chapter.id)}
              >
                <span className="chapter-num">第{chapter.id}章</span>
                {!isCollapsed && (
                  <span className="chapter-summary">{chapter.summary}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
