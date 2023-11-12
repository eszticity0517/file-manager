import { FS } from "./fs";

import * as config from "./config.json";

// Let's kick it off with an immediately invoked function.
(function ()
{
// Example usage
    const directoryPath = config.fileDir;

    if (!config.fileDir)
    {
        console.error("No file directory to work with.");
        return;
    }

    const fileSystem = new FS(directoryPath);

    fileSystem.store("filename1", "a very long string1");
    fileSystem.store("filename2", "a very long string1");
    fileSystem.store("filename3", "a very long string3");
    fileSystem.store("filename2", "a very long string3");

    const strContent1 = fileSystem.get("filename1");
    const strContent2 = fileSystem.get("filename2");
    const strContent3 = fileSystem.get("filename3");

    console.log(strContent1); // gets 'a very long string1'
    console.log(strContent2); // gets 'a very long string3'
    console.log(strContent3); // gets 'a very long string3'
})();

