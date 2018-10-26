

process.stdin.setEncoding("utf-8");
const getInput = () =>
    new Promise(resolve => {
        process.stdin.once("data", data => {
            resolve(data);
        });
    });

    const main = async () => {
        console.log("What is your name?");
        const name = await getInput();
        if (name === "Dan\n"){
            console.log("Go away Dan!")
                }else if(name.length === 5){
console.log(`Go away ${name}`)
                }else{
                    
        console.log(`Hello` +` ` + name);
                }
        process.stdin.unref();
                
    }
   
    


    main();
