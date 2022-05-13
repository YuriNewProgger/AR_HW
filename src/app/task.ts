export class Task {
    id: number = 0;
    name: string = "";
    isComplete: boolean = false;
    constructor () {}
   }

export interface Task{
    id: number;
    name: string;
    isComplete: boolean;
}