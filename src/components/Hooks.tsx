import { useRef, useState } from 'react'

type User = {
  name: string
  age: number
}

function Hooks() {
  const [count, setCount] = useState<number>(0)
  const [text, setText] = useState<string>('hola')
  const [active, setActive] = useState<boolean>(true)

  const [user, setUser] = useState<User | null>(null)

  const myButton = useRef<HTMLButtonElement>(null)

  console.log(user?.age)
  console.log(user?.age)

  myButton.current!.innerText = 'Hola'

  return <button ref={myButton}>Hooks</button>
}

export default Hooks
