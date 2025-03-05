type CompProps = React.ComponentPropsWithoutRef<'button'>

function CompProps({ children, color }: CompProps) {
  return (
    <button style={{ color }}>
      {children}
      {color}
    </button>
  )
}

export default CompProps
