export async function CheckUser(username, password) {
    const base64 = btoa(`${username}:${password}`);
    let result = await fetch("/OpenData-backend/resources/userResources/Check", {
        method: "POST",
        headers: {
            "Authorization": `Basic ${base64}`
        }
    });

    const data = await result;

    return data;
}