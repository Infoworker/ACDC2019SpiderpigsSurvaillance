import { IPlayerStoreProps, IPlayer } from "./store";

const apiUrl = "https://spiderpigs-covertops.azurewebsites.net";

export async function getUsers(): Promise<IPlayerStoreProps> {
    var httpRes = await fetch(apiUrl + "/api/NSAFiles", {
        method: "GET"
    });

    var content = await httpRes.json();

    let users: IPlayerStoreProps = {

        players: content.map((userData: any)=>{
            const id = userData.id;
            const position = {
                lat: userData.location[0].lat,
                lng: userData.location[0].lng
            };
            const icon = userData.icon;
            const firstName = userData.firstName;
            const lastName = userData.lastName;
            const movementPattern = userData.location.map((loc: any)=>(loc.id, loc.lat, loc.lng));

            return {
                id,
                position,
                icon,
                firstName,
                lastName,
                movementPattern
            }
        })
    }

    return users;
}