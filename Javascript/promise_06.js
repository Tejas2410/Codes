
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

function writeFile(data , filename) {
    return new Promise((res,rej) => {
        console.log("Writing", data, "to file");
        setTimeout(() => {
            console.log("Writing to file ", filename, "is done");
            let status = "Success";
            res(status);
        },2000)
        
    })
}

function upload(filename, url) {
    return new Promise((res,rej) => {
        console.log("Uploading file ", filename , " to " , url);
        setTimeout(() => {
            console.log("Upload is done");
            let uploadStatus = "Success";
            res(uploadStatus);
        }, 3000)
        
    })
}

// // Parallel execution of each function
// download("www.example.com")
// .then(function f(value) {
//     console.log("downloaded data is", value);
// })

// writeFile("Some data" , "file.txt")
// .then(function f(value) {
//     console.log("Write status is" , value); 
// })

// upload("file.txt" , "www.example.com")
// .then(function f(value) {
//     console.log("Upload is successful",value);
// })

const p2 = download("www.example.com").then(function f(value){
    console.log("Downloaded data is" , value);
    return writeFile(value , "file.txt");   
})

const p3 = p2.then(function g(value) {
    console.log("file written", value);
    return upload("file.txt" , "www.example.com" )
})

p3.then(function h(value) {
    console.log("File Uploaded" , value);
    
})


// alternate way of doing the same thing
// .then chaining

download("www.example.com").then(function f(value){
    console.log("Downloaded data is" , value);
    return writeFile(value , "file.txt");   
})
.then(function g(value) {
    console.log("file written", value);
    return upload("file.txt" , "www.example.com" )
})
.then(function h(value) {
    console.log("File Uploaded" , value);
    
})
.catch(function i(value){
    console.log("Error occured", value);
    
})


// .catch function will run when promise is rejected