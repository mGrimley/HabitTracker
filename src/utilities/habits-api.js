import sendRequest from "./send-request";

const BASE_URL = "/api/habits";

export function getAll() {
    return sendRequest(BASE_URL);
    }

export function create(habit) {
    return sendRequest(BASE_URL, "POST", habit);
}

export function update(habit) {
    return sendRequest(`${BASE_URL}/${habit._id}`, "PUT", habit);
}

export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
