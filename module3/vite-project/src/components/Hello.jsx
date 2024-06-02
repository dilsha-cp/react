function Hello(){
    let text='dilsha';
   const displaybyname=()=>{
        return 'hey from scalar'
    }
    return(
        <>
        <h1>hello from component</h1>
         <h2>{10+20},{text}</h2>
        <h2>{displaybyname()}</h2>
                  
        </>
        
    )
}
export default Hello