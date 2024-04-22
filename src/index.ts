import * as data from "./data.json";

import {OneStatement, OneUser} from "./types";

const allStatements: OneStatement[] = data.PolicyDocument.Statement;
const allUsersArray: OneUser[] = [];

for (const statement of allStatements) {
    const {Sid, Resource} = statement;

    if (Array.isArray(Resource)) {
        allUsersArray.push({
            name: Sid,
            output: true,
        });
    } else {
        allUsersArray.push({
            name: Sid,
            output: Resource.split("*").length - 1 !== 1,
        });
    }
}
console.log(allUsersArray);
