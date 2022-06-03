function ModelResultBox({ message }:{ message:any }):any{

    function SubModelResult(props:{ doGoogleSearch:boolean, value:string, title:string}){

      const NameBox = () => props.doGoogleSearch ? 
      ( <div> 
        <a href={"http://www.google.com/search?q=" + props.value} target="_blank" rel="noreferrer">
          <h3>{props.value}</h3> 
        </a>
       </div>
      ):
      ( <div> <h3>{props.value}</h3> </div> );

        return( 
          <div className="d-flex justify-content-between" key={props.title}>
            <div> <h3>{props.title}</h3> </div>
            <NameBox />
          </div>
        )
    }

    const obj = [
      {title: "Top 1:", value: message.top1 && message.top1.label, search: true },
      {title: "Confident Top 1:", value: message.top1 && (message.top1.confident * 100).toFixed(3) + "%" , search: false},

      {title: "Top 2:", value: message.top2 && message.top2.label , search: true},
      {title: "Confident Top 2:", value: message.top2 && (message.top2.confident * 100).toFixed(3) + "%" , search: false },
      
      {title: "Top 3:", value: message.top3 && message.top3.label, search: true },
      {title: "Confident Top 3:", value: message.top3 && (message.top3.confident * 100).toFixed(3) + "%" , search: false },
      
      {title: "Top 4:", value: message.top4 && message.top4.label, search: true },
      {title: "Confident Top 4:", value: message.top4 && (message.top4.confident * 100).toFixed(3) + "%" , search: false },
      
      {title: "Top 5:", value: message.top5 && message.top5.label, search: true },
      {title: "Confident Top 5:", value: message.top5 && (message.top3.confident * 100).toFixed(3) + "%" , search: false },

      {title: "", value: "" , search: false},
      {title: "Model Predicte Time:", value: message.timeTaken , search: false},
      {title: "Actual time Taken:", value: message.timeTaken, search: false},
      //{title: "Target object" , value: currentModelInfo.label},
    ]

    //console.log(message);
    
    return obj.map( (v) => <SubModelResult title={v.title} value={v.value} key={v.title} doGoogleSearch={v.search} /> )
}

export default ModelResultBox