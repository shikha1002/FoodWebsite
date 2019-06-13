import { Ingrident } from '../shared/Ingrident.model';

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient:Ingrident[];

    constructor(name:string, desc: string, imagepath: string, ingredient:Ingrident[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagepath;
        this.ingredient=ingredient;
    }
}

