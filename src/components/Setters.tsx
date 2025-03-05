type SettersProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>
}

function Setters({ setCount }: SettersProps) {
  return <button onClick={() => setCount(count => count + 1)}>Setters</button>
}

export default Setters
