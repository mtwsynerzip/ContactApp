import * as uuid from "uuid";
import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
    // Request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);

    const parms = {
        TableName: "TransactionalData",
        Item: {
            PK: "CONSTITUENT#${userid}",
            SK: "CONSTITUENT#${userid}",
            ID: "123",
            FirstName: "${user_first_name}",
            LastName: "${user_first_name}",
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
