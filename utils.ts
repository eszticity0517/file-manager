import * as crypto from "crypto";

export const calculateHash = (content: string): string =>
{
    const hash = crypto.createHash("md5");
    hash.update(content);
    return hash.digest("hex");
};
