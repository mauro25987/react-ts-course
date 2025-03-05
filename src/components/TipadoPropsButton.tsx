// Componente que recibe props tipadas
// function TipadoPropsButton(props: { title: string; subtitulo: string; color: string }) {
//   const { title, subtitulo, color } = props
//   return (
//     <button>
//       {title} - {subtitulo} - {color}
//     </button>
//   )
// }

type TipadoPropsButtonProps = {
  title: string
  subtitulo?: string
  color?: string
}

// function TipadoPropsButton(props: TipadoPropsButtonProps) {
//   const { title, subtitulo, color } = props
//   return (
//     <button>
//       {title} - {subtitulo} - {color}
//     </button>
//   )
// }

function TipadoPropsButton({ title }: TipadoPropsButtonProps) {
  return <button>{title}</button>
}

// Con const
// const TipadoPropsButton = ({ title }: TipadoPropsButtonProps) => {
//   return <button>{title}</button>
// }

// Mas Verboso
// const TipadoPropsButton: React.FC<TipadoPropsButtonProps> = ({ title }) => {
//   return <button>{title}</button>
// }

export default TipadoPropsButton
