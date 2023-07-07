import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "./UserPool.js";

const AccountContext = createContext();

const Account = (props) => {

    // const router = useRouter();

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                if (err) {
                    reject();
                } else {
                    debugger;

                    var data = {
                        accessLevel: '',
                        url: '',
                        clubName: '',
                        username: ''
                    };

                    data.clubName = session['idToken']['payload']['name'];
                    data.username = session['idToken']['payload']['cognito:username'];
                    
                    if (session['idToken']['payload']['cognito:groups'] === undefined) {
                        data.accessLevel = 'club';
                        data.url = '-by-club/' + data.username;
                    } else if (session['idToken']['payload']['cognito:groups'][0] === 'zl') {
                        data.accessLevel = 'zone';
                    } else if (session['idToken']['payload']['cognito:groups'][0] === 'ds') {
                        data.accessLevel = 'district';
                    }

                    resolve(data);
                }
                });
            } else {
                reject();
            }
        });
    };

    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });

                const authDetails = new AuthenticationDetails({ Username, Password });
                debugger;
                console.log("I am here")
                user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    debugger;
                    console.log("onSuccess: ", data);
                    // window.location.reload();
                    resolve(data);
                },
                onFailure: (err) => {
                    console.error("onFailure: ", err);
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired: ", data);
                    resolve(data);
                },
            }
            );
            debugger;
        });
    };

  const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
            window.location.reload();
        }
  };

    return (
        <AccountContext.Provider value={{ authenticate, getSession, logout }}>
            {props.children}
        </AccountContext.Provider>
    );
};
export { Account, AccountContext };
