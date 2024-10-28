function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Gautam",
                url: "example.com",
            });
        }, 3000);
    });
}

async function getUserData() {
    try {
        console.log("Fetching user data ....");
        const userData = await fetchUserData();
        console.log(userData);
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

getUserData();
