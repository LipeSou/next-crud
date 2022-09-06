import { NextPage } from "next"
import { useState } from "react"
import ButtonAdd from "../components/ButtonAdd"
import Form from "../components/Form"
import Layout from "../components/Layout"
import TableCrud from "../components/TableCrud"
import Client from "../core/Client"


const Home: NextPage = () => {
  const [client, setClient] = useState<Client>(Client.vazio)
  const [clients, setClients] = useState<Client[] | Array<any>>([])
  const [visible, setVisible] = useState<'tabela' | 'formulario'>('tabela')

  function newClient() {
    setClient(Client.vazio())
    setVisible('formulario')
   
  }
  const clientSelected = (client: Client) => {
    setClient(client)
    setVisible('formulario')
  }
  const clientExcluded = (client: Client) => {
    console.log('Excluir', client.name)
  }
  function saveClient(client: Client) {
    console.log(client)
    setVisible('tabela')
   
  }
  return (
    <div
      className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-orange-100 text-white
      `}
    >
      <Layout title='Cadastro Simples'>
      {visible === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <ButtonAdd
                color='green'
                className='mb-4'
                onClick={newClient}
              >
                Novo Cliente{' '}
              </ButtonAdd>
            </div>
            <TableCrud
              clients={clients}
              clientSelected={clientSelected}
              clientExcluded={clientExcluded}
            />
          </>
        ) : (
          <Form
            clientChange={saveClient}
            client={client}
            cancelled={() => setVisible('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}

export default Home
