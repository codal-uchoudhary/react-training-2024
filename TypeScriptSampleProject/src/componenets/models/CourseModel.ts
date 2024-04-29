
class CourseModel{
    id:string;
    name:string;
    rating:number;
    price:number;

    constructor(name:string, rating:number, price:number){
        this.name=name;
        this.id = name;
        this.rating = rating;
        this.price = price
    }
}

export default CourseModel;