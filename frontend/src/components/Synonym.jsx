function Synonym({mean}) {

    return (
      <div className="colums-2 md:columns-3">
        {mean.map(val => val.meanings.map(means =>  {
            return means.synonyms?.map(syn => (
                <li>{syn}</li>
            ))
        }))}
      </div>
    )
  }
  
  export default Synonym