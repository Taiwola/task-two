# Person RESTful API Documentation

## Table of Contents

- [Introduction](#introduction)
- [Authentication](#authentication)
- [Base URL](#base-url)
- [Endpoints](#endpoints)
  - [1. Get All Persons](#1-get-all-persons)
  - [2. Get Person by ID](#2-get-person-by-id)
  - [3. Create a Person](#3-create-a-person)
  - [4. Update a Person](#4-update-a-person)
  - [5. Delete a Person](#5-delete-a-person)
  - [6. Search Persons by Name](#6-search-persons-by-name)
- [Request/Response Formats](#requestresponse-formats)
  - [Person Object](#person-object)
- [Error Handling](#error-handling)
- [Sample API Usage](#sample-api-usage)
- [Testing Instructions](#testing-instructions)

## Introduction

Welcome to the Person RESTful API documentation. This API allows you to perform CRUD (Create, Read, Update, Delete) operations on person resources. It also provides a search feature to find persons by name.

## Authentication

Authentication is not required for public access to this API. However, it's recommended to implement authentication and authorization mechanisms in a production environment for security.

## Base URL

The base URL for all API endpoints is:

```
https://api.example.com/api/person
```

## Endpoints

### 1. Get All Persons

- **Endpoint**: `GET /`
- **Description**: Retrieve a list of all persons.
- **Response**: List of [Person Objects](#person-object).

### 2. Get Person by NAME

- **Endpoint**: `GET /api/person/{name}`
- **Description**: Retrieve a person by their unique ID.
- **Parameters**:
  - `{name}` (string): The unique identifier of the person.
- **Response**: [Person Object](#person-object).

### 3. Create a Person

- **Endpoint**: `POST /api/person`
- **Description**: Create a new person.
- **Request Body**: [Person Object](#person-object).
- **Response**: [Person Object](#person-object).

### 4. Update a Person

- **Endpoint**: `PATCH /api/person/{name}`
- **Description**: Update an existing person by their ID.
- **Parameters**:
  - `{name}` (string): The unique identifier of the person to be updated.
- **Request Body**: [Person Object](#person-object).
- **Response**: [Person Object](#person-object).

### 5. Delete a Person

- **Endpoint**: `DELETE /api/person/{name}`
- **Description**: Delete a person by their ID.
- **Parameters**:
  - `{name}` (string): The unique identifier of the person to be deleted.
- **Response**: Status code 204 (No Content) on success.

### 6. Search Persons by Name

- **Endpoint**: `GET /api/person/query`
- **Description**: Retrieve a list of persons by name.
- **Parameters**:
  - `name` (string): The name to search for.
- **Response**: List of [Person Objects](#person-object).

## Request/Response Formats

### Person Object

```json
{
  "id": 1,
 "name": john doe
}
```

- `id` (string): The unique identifier of the person (auto-generated).
- `name` (string): The name of the person.

## Error Handling

- The API returns appropriate HTTP status codes and error messages in case of errors. Common status codes include:
  - 200 OK: Successful request.
  - 201 Created: Successful creation of a resource.
  - 204 No Content: Successful deletion of a resource.
  - 400 Bad Request: Invalid request format or missing parameters.
  - 404 Not Found: Resource not found.
  - 500 Internal Server Error: Server-side error.

## Sample API Usage

Here are some examples of how to use the API:

- **Get all persons**:
  ```
  GET https://api.example.com/api/person
  ```

- **Get person by NAME**:
  ```
  GET https://api.example.com/api/person/name
  ```

- **Create a person**:
  ```
  POST https://api.example.com/api/person
  Request Body:
  {
    "name": "john doe",
  }
  ```

- **Update a person**:
  ```
  PATCH https://api.example.com/api/person/name
  Request Body:
  {
    "name": "Updated",
  }
  ```

- **Delete a person**:
  ```
  DELETE https://api.example.com/api/person/name
  ```

- **Search persons by name**:
  ```
  GET https://api.example.com/api/persons/query?name=John
  ```

## Testing Instructions

To test the API endpoints, you can use tools like `curl` or Postman. Ensure that you include valid request bodies and parameters as described in the documentation.

POSTMAN DOCUMENTATION: https://documenter.getpostman.com/view/26737003/2s9YC1XZwj

UML DIAGRAM: https://drive.google.com/file/d/1QjrJMf0nOPFAI0E1HlB1Pgna5zc71A-B/view?usp=sharing
