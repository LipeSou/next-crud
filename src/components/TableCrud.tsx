import Client from '../core/Client'
import { IconView, IconDelete } from './icons'

interface TabelProps {
  clients: any[] | Client[]
  clientSelected?: (client: Client) => void
  clientExcluded?: (client: Client) => void
}
const TableCrud = ({clientSelected, clientExcluded, clients}: TabelProps) => {
  const displayActions = clientExcluded || clientSelected
  function renderHeader() {
    return (
      <thead
        className={`bg-gradient-to-r from-purple-800 to-purple-500 w-full text-gray-100 font-sans`}
      >
        <tr>
          <th className={`text-left p-4`}>Codigo</th>
          <th className={`text-left p-4`}>Nome</th>
          <th className={`text-left p-4`}>Idade</th>
          {displayActions && <th className={`text-center p-4 justify-center content-center`}>Açoes</th>}
        </tr>
      </thead>
    )
  }

  function renderClients() {
    return clients?.map((client, index) => {
      return (
        <tbody key={index}>
          <tr
            className={`${index % 2 === 0 ? 'bg-purple-100' : 'bg-purple-300'}`}
          >
            <td className={`text-left p-4`}>{client.id}</td>
            <td className={`text-left p-4`}>{client.name}</td>
            <td className={`text-left p-4`}>{client.age}</td>
            {displayActions && renderActions(client)}
          </tr>
        </tbody>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className='flex flex-col justify-center items-center content-center'>
        {clientSelected ? (
          <button
            className='flex justify-center items-center content-center text-blue-500 hover:opacity-60 hover:bg-white hover:border-2 hover: rounded-full'
            onClick={() => clientSelected?.(client)}
            title={`Editar ${client.name}`}
          >
            <IconView />
          </button>
        ) : (
          false
        )}
        {clientExcluded ? (
          <button
            className='flex justify-center items-center content-center text-red-500 hover:opacity-60 hover:bg-white hover:border-2 hover: rounded-full'
            onClick={() => clientExcluded?.(client)}
            title={`Deletar ${client.name}`}
          >
            <IconDelete />
          </button>
        ) : (
          false
        )}
      </td>
    )
  }
  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      {renderHeader()}
      {renderClients()}
    </table>
  )
}

export default TableCrud
