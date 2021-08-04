import express, { Application, Request, Response } from 'express';

const app: Application = express();

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

const person1: IPerson = {
  firstName: 'Adam',
  lastName: 'Cold',
  age: 20,
};

const getFullName = (person: IPerson): string =>
  person.firstName + ' ' + person.lastName;

app.get('/', (req: Request, res: Response) => {
  res.send('Fullname: ' + getFullName(person1));
});

app.listen(5000, () => console.log('Server running'));
