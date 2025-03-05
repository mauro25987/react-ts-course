type CSSPropertiesProps = {
  style: React.CSSProperties
  title: string
}

function CSSProperties({ style, title }: CSSPropertiesProps) {
  return <button style={style}>{title}</button>
}

export default CSSProperties
