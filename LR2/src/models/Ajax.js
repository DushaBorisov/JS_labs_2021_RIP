class Ajax {
    async get(url) {

        const response = await fetch(url, {
            method: "GET"
        });

        const responseData = await response.json();

        return responseData;

    }
}

export const ajax = new Ajax();