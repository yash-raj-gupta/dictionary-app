// File to return the anonyms got from the api of the specific word

function Antonym({mean}) {

    return (
      <div className="colums-2 md:columns-3">
        {mean.map(val => val.meanings.map(means =>  {
            return means.antonyms?.map(ant => (
                <li className="text-wrap space-x-10 hover:bg-gray-200 hover:p-3 hover:rounded-lg transition-transform duration-700 transform hover:scale-125 hover:z-30 hover:shadow-2xl">{ant}</li>
            ))
        }))}
      </div>
    )
  }
  
  export default Antonym