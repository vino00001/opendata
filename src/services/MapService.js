export async function GetCoordinates() {
    let result = await fetch("/OpenData-backend/resources/coordinates");

    if(result.ok){
        const data = await result.json();

        return data;
    }

    throw new Error("Failed to fetch coordinate data.");
}