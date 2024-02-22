# TodoApp Backend API

Welcome to the TodoApp Backend API! This API provides endpoints for managing todos, allowing you to create, read, update, and delete todo items.

## Endpoints

### Create Todo

- **URL:** `/api/v1/createTodo`
- **Method:** `POST`
- **Description:** Create a new todo item.
- **Request Body:** JSON object with `title` and `description` fields.
- **Response:** Newly created todo object.

### Get All Todos

- **URL:** `/api/v1/getTodos`
- **Method:** `GET`
- **Description:** Retrieve all todo items.
- **Response:** Array of all todo objects.

### Get Todo by ID

- **URL:** `/api/v1/getTodos/:id`
- **Method:** `GET`
- **Description:** Retrieve a specific todo item by its ID.
- **Response:** Todo object with the specified ID.

### Update Todo

- **URL:** `/api/v1/updateTodo/:id`
- **Method:** `PUT`
- **Description:** Update an existing todo item.
- **Request Body:** JSON object with updated `title` and/or `description` fields.
- **Response:** Updated todo object.

### Delete Todo

- **URL:** `/api/v1/deleteTodo/:id`
- **Method:** `DELETE`
- **Description:** Delete a todo item by its ID.
- **Response:** Success message indicating the deletion operation.

## Getting Started

To use the TodoApp backend API, clone the repository, install dependencies, and set up your environment variables as described in the project's README.

## Contributing

Contributions to the TodoApp backend API are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

