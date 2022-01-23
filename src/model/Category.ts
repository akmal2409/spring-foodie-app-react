import { Image } from './Image';
export class Category {
    constructor(public id: number,
        public name: string,
        public description: string,
        public groupId: number,
        public icon: Image) { }
}