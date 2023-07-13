# swat
It is a TaskManagementApp, I started with a client only application having:
- add task
- remove task
- clear tasks
- mark task as complete
- auto send completed tasks to bottom

but it lacked:
- tasks storage (I used localhost but not apt for scaling)
- account system (user)

Hence, the current implementation:
- MVC architecture (Models/Routes/Controllers)
- CRUD operation on user/task
- auth (cookie,jwt,bcrypt)
- user/tasks in different collections in MongoDB
- Error Handling (custom ErrorHandler Class, middleware)
- CORS implementation to prevent req blocks
- Clean UI with interactive Toast Notifications and state managemet using ContextAPI
- Tested APIs on both development and production level (Postman, Browser)
