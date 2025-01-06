export interface User {
    id:number;
    name:string;
    email:string;
}

const users : User[] = [];

export function addUser(user: User): void {
    users.push(user);
}

export function getUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}

export function updateUser(id: number, updatedUser: User): void {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = updatedUser;
    }
}

export function deleteUser(id: number): void {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
    }
}

export function getAllUsers(): User[] {
    return [...users];
}