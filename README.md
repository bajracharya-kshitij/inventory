The front-end has been developed in React. To run the front-end, cd into the front-end folder and run

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The back-end has been developed in Spring-Boot. To run the back-end, cd into the back-end folder and run

### `mvn spring-boot:run`

The database used is H2. To view the tables, open [http://localhost:8080/h2-console](http://localhost:8080/h2-console) in the browser.
On the login page, use the following to connect:

```
JDBC URL: jdbc:h2:mem:inventory
User Name: sa
Password: <blank>
```