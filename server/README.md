# HOW TO START SERVER

1. Install node package modules.

    ```bash
    npm i
    ```

2. Setup environment variables. Create `.env` file.
    
    ```
    PORT=8080
    SERVER_BANNER=
    DB_USER_NAME=root
    DB_USER_PASSWORD=
    DB_DATABASE_NAME=HALP_ME
    DB_HOST=127.0.0.1
    DB_DIALECT=mysql
    ```

3. Create database `HALP ME`. 

    For example, using mysql cli:

    ```bash
    mysql -u root -p
    ```
    ```shell
    # mysql shell
    CREATE DATABASE HALP ME;
    ```

4. Start the project.

    ```bash
    npm start
    ```

5. Modify some codes in `db.js` file.

    ```javascript
    // line 4
    //.sync({ force: true })
    .sync({ force: false })

    // line 84
    Test();
    ```