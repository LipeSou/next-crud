interface ButtonAddProps {
  color?: 'green' | 'blue' | 'gray' | 'red'
  className?: string
  children: any
  onClick?:() => void
}

const ButtonAdd = ({color, className, children, onClick}: ButtonAddProps) => {
  const cor = color ?? 'gray'
  return (
    <button
    onClick={onClick}
      className={`
  bg-gradient-to-r from-${cor}-400 to-${cor}-700
  text-white px-4 py-2 rounded-md 
  ${className}
  `}
    >
      {children}
    </button>
  )
}

export default ButtonAdd
