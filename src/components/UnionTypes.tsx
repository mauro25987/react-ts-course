type Color = 'red' | 'blue' | 'green' | 'yellow' // Union types

type UnionTypesProps = {
  title: string
  subtitle?: string
  color?: Color
  backgroundColor?: Color
  size?: 30 | 40 | 50
}

function UnionTypes({ title, backgroundColor }: UnionTypesProps) {
  return (
    <button>
      {title} - {backgroundColor}
    </button>
  )
}

export default UnionTypes
