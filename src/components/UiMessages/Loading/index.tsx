import { ClipLoader } from "react-spinners"

export const Loading = () => {

    return (
        <div className="flex items-center justify-center h-200">
            <ClipLoader
                color="blue"
                size={50}
                aria-label="Carregando"
            />
        </div>
    )
}