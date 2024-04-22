import * as data from "./data.json";
import * as fs from "fs";
import {OneStatement, OneUser, RolePolicy} from "./types";

const rolePolicyData: RolePolicy = data;
const allStatements: OneStatement[] = rolePolicyData.PolicyDocument.Statement;
const allUsers = {
    allUsersArray: [] as OneUser[]
};

for (const statement of allStatements) {
    const {Sid, Resource} = statement;

    if (Array.isArray(Resource)) {
        allUsers.allUsersArray.push({
            name: Sid,
            output: true,
        });
    } else {
        allUsers.allUsersArray.push({
            name: Sid,
            output: Resource.split("*").length - 1 !== 1,
        });
    }
}

// Save JSON file with outputs
fs.writeFile("allUsers.json", JSON.stringify(allUsers), (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
    }
});
