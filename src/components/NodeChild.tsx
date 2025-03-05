type NodeChildProps = {
  //children: string | React.ReactNode
  children: React.JSX.Element | React.JSX.Element[] | string // solo un elemento JSX o un string, multiple poner un array
}

function NodeChild({ children }: NodeChildProps) {
  return <button>{children}</button>
}

export default NodeChild
