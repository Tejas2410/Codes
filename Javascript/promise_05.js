
// call download function and go to url download data and print data using promises

function download(url) {
    return new Promise(function exec(res,rej) {
        console.log("Download stated");
        setTimeout(()=>{
            let data = "Some data from " + url;
            console.log("Download data from" , url);
            res(data);
        },3000)
    })
}

download("www.example.com")
.then(function f(value) {
    console.log("downloaded data is", value);
    
})