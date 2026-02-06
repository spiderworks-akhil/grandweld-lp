import { post } from "../config";

export const SubmitApi = {
    lead: (data) => post(`/leads`, data)
}