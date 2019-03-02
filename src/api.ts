import { IPlayerStoreProps, IPlayer } from "./store";

const apiUrl = "https://spiderpigs-covertops.azurewebsites.net";

export async function getUsers(): Promise<IPlayer[]> {
    var httpRes = await fetch(apiUrl + "/api/NSAFiles", {
        method: "GET",
        // headers: {
        //     "Content-Type": "application/json"
        // },
    });

    //console.log(httpRes.statusText);
    var content = await httpRes.json();

    let users: IPlayer[] = content.map((userData: any)=>{
            const id = userData.id;
            const position = {
                lat: userData.location[0].lat,
                lng: userData.location[0].lng
            };
            const icon = userData.icon;
            const firstName = userData.firstName;
            const lastName = userData.lastName;
            const movementPattern = userData.location.map((loc: any)=>(loc.id, loc.lat, loc.lng));

            const retVal = {
                id,
                position,
                icon,
                firstName,
                lastName,
                movementPattern
            }
            console.log(retVal);
            return retVal;
        })

    return users;
}


// export async function postUserMovement() {
//     await fetch(apiUrl + )
// }