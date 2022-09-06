interface InputFormProps {
  type?: 'text' | 'number'
  text: string
  value: any
  className?: string
  onlyReading?: boolean
  valueChange?: (valor: any) => void
}

const InputForm = ({text, value, className, onlyReading, type, valueChange}: InputFormProps) => {
  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      <label className='mb-4 capitalize font-bold'>{text}</label>
      <input
        className={`
      border bg-purple-100 border-purple-300 rounded-lg font-semibold
      outline-none px-4 py-2 ${
        onlyReading ? '' : 'focus:bg-opacity-50'
      }
      `}
        type={type ?? 'text'}
        value={value}
        readOnly={onlyReading}
        onChange={e => valueChange?.(e.target.value)}
      />
    </div>
  )
}

export default InputForm
