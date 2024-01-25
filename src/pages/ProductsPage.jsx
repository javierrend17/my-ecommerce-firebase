import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { app } from '../firebase'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductsPage = () => {
  const auth = getAuth(app)
  const navigate = useNavigate()

  useEffect(() => {
    const authentication = async() => {
      await onAuthStateChanged(auth, (user) => {
        if(user){
          console.log("Logueado correctamente")
        } else{
          navigate('/login')
        }
      })
    }

    authentication()
  
  
  }, [])
  


  return (
    <h1>Pagina de productos (Ruta protegida)</h1>
  )
}
