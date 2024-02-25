// File to return the example usage got from the api of the specific word

function Example ({mean}) {

    return (
      <div>
        {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
          <div key={def.example}>
            {def.example && (<>
                <li className="text-wrap space-x-10 hover:bg-gray-200 hover:p-3 hover:rounded-lg transition-transform duration-700 transform hover:scale-125 hover:z-30 hover:shadow-2xl">{def.example}</li>
                </>
            )}
              
          </div>
        ))))}
      </div>
    )
  }
  
  export default Example