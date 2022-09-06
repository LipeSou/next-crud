import { useState } from 'react'
import Client from '../core/Client'
import InputForm from './InputForm'
import ButtonAdd from './ButtonAdd'

interface FormProps {
  client: Client
  clientChange?: (cliente: Client) => void
  cancelled?: () => void
}

const Form = ({client, clientChange, cancelled}: FormProps) => {
  const id = client?.id ?? null
  const [name, setName] = useState(client.name ?? '')
  const [age, setAge] = useState(client.age ?? '')

 
  return (
    <div>
      {id && (
        <InputForm
          className='mb-4'
          text={`Código: ${id}`}
          value={id}
          onlyReading
        />
      )}
      {
        <InputForm
          className='mb-4'
          text={`Nome: ${name}`}
          value={name}
          valueChange={setName}
        />
      }
      {
        <InputForm
          text={`Idade: ${age}`}
          type='number'
          valueChange={setAge}
          value={age}
        />
      }
      <div className={`flex justify-end pt-4`}>
        <ButtonAdd
          onClick={() => clientChange?.(new Client(name, +age, id))}
          className='mr-2'
          color='blue'
        >
          {id ? 'Alterar' : 'Salvar'}
        </ButtonAdd>
        <ButtonAdd onClick={cancelled} color='red'>
          Cancelar
        </ButtonAdd>
      </div>
    </div>
  )
}

export default Form
