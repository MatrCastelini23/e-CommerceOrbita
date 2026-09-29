import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const NoRoute = () => {
    return (
        <>
            <Header />
            <h1>404</h1>
            <p>Essa página não existe ou não foi criada ainda</p>
            <Footer />
        </>
    )
}