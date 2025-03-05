type RecordTypeProps = {
  userAges: Record<'Mauro' | 'Emiliano' | 'Micaela', number>
}

function RecordType({ userAges }: RecordTypeProps) {
  return (
    <div>
      RecordType
      {Object.entries(userAges).map(([name, age]) => (
        <div key={name}>
          {name}: {age}
        </div>
      ))}
    </div>
  )
}

export default RecordType
