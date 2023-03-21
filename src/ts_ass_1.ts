interface product {
    id: number;
    pname: string;
    pdescription: String;
    price: number;
}
function getproducts(): Promise<product[]>{
    return fetch('./ts_ass_1.json')
    .then(item => item.json())
    .then(pro => {return pro as product[]})
}

getproducts()
.then(pro => {
    console.log(pro.map(a => `${a.id} '\n' ${a.pname} '\n' ${a.pdescription} '\n' ${a.price}`).toString())})
