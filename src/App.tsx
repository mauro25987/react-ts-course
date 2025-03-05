import Arrays from './components/Arrays'
import CSSProperties from './components/CSSProperties'
import RecordType from './components/RecordType'
import TipadoPropsButton from './components/TipadoPropsButton'
import UnionTypes from './components/UnionTypes'

function App() {
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
    </div>
  )
}

export default App
