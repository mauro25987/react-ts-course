type Props = React.ComponentPropsWithoutRef<'button'>

type InterseccionExtendProps = Props & {
  children?: string
  variant?: 'primary' | 'secondary'
}

// interface Props extends React.ComponentPropsWithoutRef<'button'> {
//   dark?: boolean
// }

// interface InterseccionExtendProps extends Props {
//   children?: string
//   variant?: 'primary' | 'secondary'
// }

function IntersectionsExtend(props: InterseccionExtendProps) {
  return <button {...props}>IntersectionsExtend</button>
}

export default IntersectionsExtend
