type User = {
  id: number;
  name: string;
  age: number;
  email?: string;
};

const data: Array<User> = [
  { id: 1, name: 'John', age: 20 },
  { id: 2, name: 'Peter', age: 30 },
  { id: 3, name: 'Amy', age: 40 },
  { id: 4, name: 'Hannah', age: 50 },
  { id: 5, name: 'Michael', age: 60 },
];


export const User = {
  getUsers: (): Array<User> => data,

  getUserById: (id: number): Array<User> => {
    return data.filter(user => user.id === id)
  },
}; 
