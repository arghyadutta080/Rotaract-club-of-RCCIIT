import { CognitoUserPool } from 'amazon-cognito-identity-js';

//test
/*const poolData = {
    UserPoolId: 'ap-south-1_j5dQKEw4r',
    ClientId: '6p89asc9gsjbrkmknips8lbvgq'
};*/

//test2
const poolData = {
    UserPoolId: 'ap-south-1_aj52RWboF',
    ClientId: '34pasul48v28vvp75fm4ci3ine'
};

export default new CognitoUserPool(poolData);