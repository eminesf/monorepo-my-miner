export const Input = (props: { type: string }) => {
    return (
        <input className="border rounded-md p-2" placeholder="Digite seu usuário" type={props.type} />
    )
}