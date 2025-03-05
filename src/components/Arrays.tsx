type ArraysProps = {
  padding: number[]
  paddingTuple: [number, number, number?, number?]
  paddingTupleSting?: [string, string, string?, string?]
}

function Arrays({ padding, paddingTuple }: ArraysProps) {
  return (
    <button>
      {padding} - {paddingTuple}
    </button>
  )
}

export default Arrays
