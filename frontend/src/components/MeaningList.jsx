//File to return the meanings got from the api of the specific word

function MeaningList({ mean }) {
    return (
        <div >
            {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
                <div key={def.definition} className="" >
                    <li className="text-wrap space-x-10 hover:bg-gray-200 hover:p-3 hover:rounded-lg transition-transform duration-700 transform hover:scale-125 hover:z-30 hover:shadow-2xl">{def.definition}</li>
                </div>
            ))))}
        </div>
    )
}

export default MeaningList
