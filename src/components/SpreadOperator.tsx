type SpreadOperatorProps = React.ComponentPropsWithoutRef<'button'>

// function SpreadOperator(props: SpreadOperatorProps) {
//   return <button {...props}>SpreadOperator</button>
// }

function SpreadOperator({ onClick, ...rest }: SpreadOperatorProps) {
  const handleClick = () => {
    if (onClick) {
      alert('click sobrescribir')
    }
  }
  return (
    <button onClick={handleClick} {...rest}>
      SpreadOperaor
    </button>
  )
}

export default SpreadOperator
