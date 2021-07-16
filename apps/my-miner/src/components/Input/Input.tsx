export const Input = (props: { type: string, placeHolder: string }) => {
    return (
        <input className="border rounded-md px-5 py-2 w-full h-full" placeholder={props.placeHolder} type={props.type} />
    )
}