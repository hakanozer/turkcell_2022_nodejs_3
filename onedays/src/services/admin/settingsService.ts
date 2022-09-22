import axios from "axios"
import { IPlaceUser } from "../../models/IPlaceUser"

export const allUser = async () => {
    const url = "https://jsonplaceholder.typicode.com/users"
    const sendData = {
        id: 1
    }
    // Send data
    //return await axios.get<IPlaceUser[]>(url, { params: sendData })
    return await axios.get<IPlaceUser[]>(url)
}