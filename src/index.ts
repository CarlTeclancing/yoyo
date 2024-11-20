let sales: number = 123456789;
let course: string = 'typscript';
let is_published: any = true;

//any type
function render(doucment:any ){
    console.log(document)
}

//arrays in typscrip

let number = [1,2,3,4];
let numbers: number[] =[]

//tupples

let user: [number, string] = [1, 'Mosh']

//enum
const small =1
const meduim =2
const large =3


//function

function calculateTax(income:number):number{
    return 0;
}


let employee: {
    readonly id : number,
    name:string,
    retire: (date:Date) => void
}

let fname: string = 'yuven'
console.log(fname)