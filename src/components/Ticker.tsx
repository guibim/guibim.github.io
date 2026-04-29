import { useLang } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';

const Ticker = () => {
  const { lang } = useLang();
  const items = content[lang].ticker;
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-5" style={{ background: 'var(--ticker-bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display mx-10 shrink-0"
            style={{
              fontSize: 'clamp(40px, 4.5vw, 64px)',
              lineHeight: 1,
              color: 'rgba(34,195,182,0.18)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
