class Ajax {
    async get(url) {

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });

        const response = await fetch(url, {
            method: "GET"
        });

        const responseData = await response.json();

        return responseData;

    }
}

export const ajax = new Ajax();