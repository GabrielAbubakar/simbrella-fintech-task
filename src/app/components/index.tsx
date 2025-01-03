




function H2({ text }: { text: string }) {
    return (
        <h2 className="font-bold text-xl mb-2">
            {text}
        </h2>
    )
}

function H3({ text }: { text: string }) {
    return (
        <h3 className="font-bold text-lg">
            {text}
        </h3>
    )
}


export {
    H2,
    H3
}