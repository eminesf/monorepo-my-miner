export const Button = (props: any) => {
    return (
        <button className="border-sm bg-blue-button p-2 rounded-md hover:bg-blue-500 w-full h-full transition duration-300 text-xl md:text-lg font-bold text-white">
            {props.textButton}
        </button>
    )
}