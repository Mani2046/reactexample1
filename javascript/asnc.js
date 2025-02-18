async function fetchinfo() {
    try{
        let response = await (await fetch("https://fakestoreapi.com/products"));
        let data=await response.json();
        console.log("after fetch the data is ",data);


    }
    catch(error){
        console.log("url does not exist");

    }
}
fetchinfo();