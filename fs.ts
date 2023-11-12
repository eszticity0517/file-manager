import * as fs from "fs";
import * as path from "path";
import { calculateHash } from "./utils";

export class FS
{
    private _directory: string;
    private _filenameHashMapping: Record<string, string> = {};

    constructor(directory: string)
    {
        this._directory = directory;

        // Create the directory if it doesn't exist
        if (!fs.existsSync(directory))
        {
            try
            {
                fs.mkdirSync(directory);
            }
            catch (err: any)
            {
                console.error(err.message);
            }
        }
    }

    /** Stores the file into the directory provided at init. */
    public store(filename: string, content: string): void
    {
        const hash = calculateHash(content);
        const filePath = path.join(this._directory, hash);

        try
        {
            // Save the content to the file
            fs.writeFileSync(filePath, content);
        }
        catch (err: any)
        {
            console.error(err.message);
        }

        // Update the mapping
        this._filenameHashMapping[filename] = hash;
    }

    /** Gets the file by name from the directory provided at init. */
    public get(filename: string): string | undefined
    {
        const hash = this._filenameHashMapping[filename];

        if (hash)
        {
            const filePath = path.join(this._directory, hash);

            try
            {
                // Read the content from the file
                const content = fs.readFileSync(filePath, "utf-8");
                return content;
            }
            catch (err: any)
            {
                console.error(err.message);
                return undefined;
            }
        }
        else
        {
            console.error(`File "${filename}" does not seem to exist.`);
            return undefined;
        }
    }
}

