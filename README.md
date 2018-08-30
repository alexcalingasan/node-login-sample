# node-login-sample
Under tge src folder add 'config' folder.
Inside the config folder add 'env' folder.
Inside the 'env' folder create a file 'development.js'.
Write and configure this code inside your 'development.js'.

```
export const devConfig = {
  port: 3000,
  database: 'YOUR_MONGO_DATABASE_CONNECTION_STRING',
  secret: 'QWERTYUDFGHJBN12345',
};
```
