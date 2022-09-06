import { NextPage } from "next"
import Layout from "../components/Layout"


const Home: NextPage = () => {
  return (
    <div
      className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-orange-100 text-white
      `}
    >
      <Layout title='Cadastro Simples'>
        teste
      </Layout>
    </div>
  )
}

export default Home
