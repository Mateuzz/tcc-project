export async function postJson(data) {
    const json = JSON.stringify(data, undefined, 4);
    console.log(json);

    try {
        const res = await fetch("http://localhost:8000/", {
            method: "POST",
            body: json,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const text = await res.text();
        console.log(text);
        return { success: true, text };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}
