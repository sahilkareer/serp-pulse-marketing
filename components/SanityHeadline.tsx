/**
 * Renders a Sanity-driven headline with:
 * - `|` treated as <br /> separators
 * - The accent text wrapped in <span className="ac">
 */
export function SanityHeadline({
  text,
  accent,
  as: Tag = 'h1',
  className,
  style,
}: {
  text: string
  accent?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  style?: React.CSSProperties
}) {
  if (!text) return null
  const lines = text.split('|')

  return (
    <Tag className={className} style={style}>
      {lines.map((line, i) => {
        const trimmed = line.trim()
        const isAccent = accent && (trimmed === accent.trim() || trimmed.includes(accent.trim()))
        return (
          <span key={i}>
            {i > 0 && <br />}
            {isAccent ? <span className="ac">{line}</span> : line}
          </span>
        )
      })}
    </Tag>
  )
}

/** Format a Sanity-stored headline as plain text (for metadata) */
export function headlineToText(headline?: string) {
  if (!headline) return ''
  return headline.replace(/\|/g, ' ')
}
