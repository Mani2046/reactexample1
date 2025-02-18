fetch("https://jsonplaceholder.typicode.com/users").
then(response=>response.json()).
then(data=>console.log(data)).
catch(
    err=>console.log("Error we are getting while fetching the data",err)
);