import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-southeast-1_4ws7NbxrB",
  ClientId: "5e4eccrm2tkkc29pjskm384cq2",
};

export default new CognitoUserPool(poolData);
