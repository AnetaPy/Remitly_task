# Internship assignment for Remitly

The task validates JSON data defined as AWS::IAM::Role Policy in the JSON input file (data.json in the src directory). The method returns the logical value false if the input JSON resource field contains a single asterisk, and true otherwise.
The output data is saved to the allUsers.json file as an array of objects (name - Statement Sid value, output - true or false value depending on the Statement Resource value).

## Technologies

Project is created with:
* TypeScript
* Node.js

## Setup

To run this project: 

1. Clone this repository.
```
git clone https://github.com/AnetaPy/Remitly_task
cd Remitly_task
```

2. Install dependencies.
```
npm install
```

3. Make changes to the data.json file in the Statement Resource and run this website.
```
npx ts-node src/index.ts
```

4. Check the allUsers.json file located in the src directory.
