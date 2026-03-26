import { Chapter } from '../types';
import { Reflection } from './Reflection';
import './ChapterContent.css';

interface ChapterContentProps {
  chapter: Chapter;
}

export function ChapterContent({ chapter }: ChapterContentProps) {
  return (
    <article className="chapter-content">
      <header className="chapter-header">
        <h1 className="chapter-title">第 {chapter.id} 章 · {chapter.title}</h1>
        <p className="chapter-desc">{chapter.summary}</p>
      </header>

      <div className="chapter-sections">
        {chapter.sections.map((section, index) => (
          <div key={index} className="section-block">
            <div className="section-original">
              <p>{section.original}</p>
            </div>
            <div className="section-translation">
              <p>{section.translation}</p>
            </div>
            {section.notes && (
              <div className="section-notes">
                <span className="section-label">注：</span>
                <span>{section.notes}</span>
              </div>
            )}

            <div className="section-example">
              <h3>💡 现代生活中的例子</h3>
              <p>{section.modernExample}</p>
            </div>

            <Reflection
              question={section.reflection}
              answer={section.answer}
            />
          </div>
        ))}
      </div>
    </article>
  );
}
