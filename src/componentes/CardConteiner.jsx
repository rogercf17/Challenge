export default function CardConteiner({titulo, children}) {
    return(
        <div className="flex flex-col w-screen">
            <h2 className="text-4xl mb-5">{titulo}</h2>
            <div className="grid grid-cols-4 w-full gap-5 justify-center">
                {children}
            </div>
        </div>
    )
}