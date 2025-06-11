function Lista(props) {
    return (
        <>
            <h3>Lista de tarefas</h3>
            {
                props.itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            }
        </>
    )
}

export default Lista
