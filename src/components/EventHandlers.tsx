function EventHandlers() {
  function HandleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e)
  }

  function handleChange(e: React.FormEvent<HTMLButtonElement>) {
    console.log(e)
  }

  return (
    <button onClick={HandleClick} onChange={handleChange}>
      EventHandlers
    </button>
  )
}

export default EventHandlers
