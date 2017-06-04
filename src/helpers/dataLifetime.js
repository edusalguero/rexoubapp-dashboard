import {DEFAULT_DATA_TTL} from "../constants/app";
export const isTimeout = (date, ttl = DEFAULT_DATA_TTL) => {
    const currentTime = + new Date();
    return !(date !== null && currentTime > date + ttl);
};