function Antonym({mean}) {

    return (
      <div className="colums-2 md:columns-3">
        {mean.map(val => val.meanings.map(means =>  {
            return means.antonyms?.map(ant => (
                <li>{ant}</li>
            ))
        }))}
      </div>
    )
  }
  
  export default Antonym