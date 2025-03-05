import { useState } from 'react'
import Arrays from './components/Arrays'
import CompProps from './components/CompProps'
import CSSProperties from './components/CSSProperties'
import DefaultProps from './components/DefaultProps'
import IntersectionsExtend from './components/IntersectionsExtend'
import NodeChild from './components/NodeChild'
import RecordType from './components/RecordType'
import Setters from './components/Setters'
import SpreadOperator from './components/SpreadOperator'
import TipadoFunctions from './components/TipadoFunctions'
import TipadoPropsButton from './components/TipadoPropsButton'
import UnionTypes from './components/UnionTypes'

// Alias vs Interface
type Color = 'red' | 'blue' | 'green'

interface ButtonProps {
  title: string
  backgroundColor: Color
}

// type ButtonProps = {
//   title: string
//   backgroundColor: Color
// }

function Button({ title, backgroundColor }: ButtonProps) {
  return <button style={{ backgroundColor }}>{title}</button>
}

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <TipadoPropsButton title="titulo" />
      <UnionTypes title="utypes" backgroundColor="red" />
      <Arrays padding={[10, 20, 30, 40]} paddingTuple={[10, 20]} />
      <CSSProperties
        title="CSSProperties"
        style={{ backgroundColor: 'red', color: 'white', fontSize: '160px', padding: '100px' }}
      />
      <RecordType userAges={{ Emiliano: 10, Mauro: 20, Micaela: 30 }} />
      <TipadoFunctions onClick={() => console.log('hola boton')} />
      <NodeChild>
        <div>hola</div>
        <div>como andas?</div>
      </NodeChild>
      <div>
        <h1>{count}</h1>
        <Setters setCount={setCount} />
      </div>
      <DefaultProps />
      <Button title="Click" backgroundColor="red" />
      <CompProps color="red">Btn Props</CompProps>
      <SpreadOperator
        onClick={() => alert('soy boton')}
        style={{ color: 'red', backgroundColor: 'blue' }}
      />
      <IntersectionsExtend />
    </div>
  )
}

export default App
