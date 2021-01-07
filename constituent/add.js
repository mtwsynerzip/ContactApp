//import * as uuid from "uuid";
var AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

async function main(event, context) {
    // Request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);

    const params = {
        TableName: "TransactionalData",
        Item: {
            PK: "CONSTITUENT#${userid}",
            SK: "CONSTITUENT#${userid}",
            ID: "${userid}",
            FirstName: "${user_first_name}",
            LastName: "${user_last_name}",
            createdAt: Date.now(),
        },
    };

    try {
        await dynamoDb.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
    } catch (e) {
        console.log(e.message);

        return {
            statusCode: 500,
            body: JSON.stringify({error: e.message}),
        };
    }
}
