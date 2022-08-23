# HOW TO START SERVER

1. Install node package modules.

    ```bash
    npm i
    ```

2. Setup environment variables. Create `.env` file.
    
    ```
    PORT=8080
    SERVER_BANNER=HELLO WORLD
    MYSQL_USERNAME=root
    MYSQL_PASSWORD=
    MYSQL_DATABASE=HALP_ME
    MYSQL_HOST=127.0.0.1
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