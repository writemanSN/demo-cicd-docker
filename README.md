# Demo CI/CD — Spring Boot + MySQL + React

Petit projet pour pratiquer Docker et le CI/CD, en local d'abord, puis avec Docker Hub.

## Structure

```
backend/    Spring Boot 3.2, Java 17, Maven, Spring Data JPA, MySQL
frontend/   React (create-react-app), liste + ajout d'items via l'API
```

## Backend — lancer en local (sans Docker, pour l'instant)

Prérequis : Java 17, Maven, une base MySQL qui tourne quelque part (locale ou distante).

```bash
cd backend
export DB_HOST=localhost
export DB_PORT=3306
export DB_NAME=demo_db
export DB_USER=root
export DB_PASSWORD=root
mvn spring-boot:run
```

L'API sera disponible sur `http://localhost:8080/api/items`.

## Frontend — lancer en local

```bash
cd frontend
npm install
npm start
```

Le site sera sur `http://localhost:3000`. Il appelle `http://localhost:8080/api/items` par défaut (modifiable via la variable d'environnement `REACT_APP_API_URL`).

## Tests

```bash
cd backend
mvn test
```

Deux tests JUnit simples sont déjà présents dans `DemoApplicationTests.java`.

## Prochaine étape

Écrire le `Dockerfile` du backend, construire l'image, la tester en local, puis la pousser sur Docker Hub.
