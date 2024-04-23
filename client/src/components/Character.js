function Character(props) {
    return (
        <>
            <h1>Character:</h1>
            {props.character &&
                <div>
                    <label>Name: {props.character.name}</label>
                    <br></br>
                    <label>Species: {props.character.species}</label>
                    <br></br>
                    <label>Gender: {props.character.gender}</label>
                    <br></br>
                    <label>Status: {props.character.status}</label>
                    <br></br>
                    <label>Id: {props.character.id}</label>
                    <br></br>
                    <label>URL: {props.character.url}</label>
                </div>}
        </>
    )
}

export default Character