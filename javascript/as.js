console.log("Hello World");
const display = () => {
    let sum = 0;
    for (let i = 0; i<=1000; i++) {
        
        sum=sum+i;
    }
    setTimeout(() => {
        
    console.log("result is "+sum);
},4000)
}
display();
console.log("Bye World");