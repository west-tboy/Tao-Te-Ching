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

      <div className="chapter-layout">
        {/* 左侧：原文 */}
        <div className="chapter-original-section">
          <h2 className="section-type-title">原文</h2>
          <div className="original-content">
            {chapter.sections.map((section, index) => (
              <p key={index} className="original-line">{section.original}</p>
            ))}
          </div>
        </div>

        {/* 右侧：译文 */}
        <div className="chapter-translation-section">
          <h2 className="section-type-title">译文</h2>
          <div className="translation-content">
            {chapter.sections.map((section, index) => (
              <div key={index} className="translation-block">
                <p className="translation-line">{section.translation}</p>
                {section.notes && (
                  <div className="section-notes">
                    <span className="section-label">注：</span>
                    <span>{section.notes}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 现代生活中的例子 */}
      <div className="chapter-examples">
        <h2 className="section-type-title">💡 现代生活中的例子</h2>
        {chapter.sections.map((section, index) => (
          <div key={index} className="example-block">
            <p>{section.modernExample}</p>
          </div>
        ))}
      </div>

      {/* 反思问答 */}
      <div className="chapter-reflections">
        <h2 className="section-type-title">🤔 反思与问答</h2>
        {chapter.sections.map((section, index) => (
          <Reflection
            key={index}
            question={section.reflection}
            answer={section.answer}
          />
        ))}
      </div>
    </article>
  );
}
