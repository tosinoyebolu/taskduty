import { connect} from "./connect";

export const registerUser = async(formData) => {
    return await connect.post("/user/register", formData);
};

export const loginUser = async(formData) => {
    return await connect.post("/user/register", formData);
};