// No precisa props, ya que tiene un valor por defecto

type DefaultPropsProps = {
  title?: string
}

function DefaultProps({ title = 'defecto' }: DefaultPropsProps) {
  return <div>{title}</div>
}

export default DefaultProps
