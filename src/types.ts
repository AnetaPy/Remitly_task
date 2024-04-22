export interface OneStatement {
    Sid: string,
    Effect: string,
    Action: string | string[],
    Resource: string | string[],
}

export interface OneUser {
    name: string,
    output: boolean,
}