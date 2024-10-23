function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched successfuly !");
            } else {
                reject("Error fetching data");
            }
        }, 3000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
        return "John doe";
    })
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });
