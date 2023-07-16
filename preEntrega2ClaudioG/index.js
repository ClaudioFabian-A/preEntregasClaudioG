
import productManager from "./managers/productManager.js";

const manager = new productManager('./files/Products.json');


const env = async () => {

    // const Products = await manager.getProducts();
    // console.log(Products);


    const prods = {
        title: 'A',
        description: 'caja',
        price: 10,
        thumbnail: 'https',
        code: 36,
        stock: 100
    };
    const prods2 = {
        title: 'B',
        descripcion: 'caja2',
        price: 100,
        thumbsnail: 'jhss',
        code: 2,
        stock: 560,



    };
    const prods3 = {
        title: 'g',
        descripcion: 'caja3',
        price: 100,
        thumbsnail: 'j568',
        code: 2,
        stock: 50,



    };



    // cargar por id


    const ProdResultID = await manager.upDateById({
        title: 'A',
        descripcion: 'caja',
        price: 10,
        thumbsnail: '',
        code: 1,
        stock: 100,
        id: 59
    });
    console.log(ProdResultID);



    // cargar datos


    // await manager.updateProduct(prods);
    // await manager.updateProduct(prods2);
    // // await manager.updateProduct(prods3);  
    // const ProdsResults = await manager.getProducts();
    // console.log(ProdsResults);







    // // por id
    // const ProdsResult = await manager.getProductByID(3);
    // console.log(ProdsResult);


}





env();