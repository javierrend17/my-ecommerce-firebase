import { Login } from "../components/Login"

export const LoginPage = () => {
  return (
   <>
     <h1 className="text-center text-white">Welcome, Login User!</h1>
      <section className="container d-flex justify-content-center">
        <Login />
      </section>
   </>
  )
}
