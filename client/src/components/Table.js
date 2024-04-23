function Table(props) {
    return (
        <div className='table-container'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Species</th>
                    <th>Gender</th>
                </tr>
                {props.data.map(character => (
                    <tr key={character.id}>
                        <td>{character.name}</td>
                        <td>{character.species}</td>
                        <td>{character.gender}</td>

                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Table