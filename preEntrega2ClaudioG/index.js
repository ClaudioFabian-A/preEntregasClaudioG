
import productManager from "./managers/productManager.js";

const manager = new productManager('./files/Products.json');


const env = async () => {

    const Products = await manager.getProducts();

    console.log(Products);


    const prods = {
        title: 'A',
        descripcion: 'caja',
        price: 10,
        thumbsnail: '',
        code: 1,
        stock: 100,



    }
    const prods3 = {
        title: 'A',
        descripcion: 'caja',
        price: 10,
        thumbsnail: '',
        code: 1,
        stock: 100,



    }

    await manager.addProduct(prods);
    await manager.addProduct(prods3);
    await manager.getProductByID(20);
    await manager.upDateById({
        title: 'A',
        descripcion: 'caja',
        price: 10,
        thumbsnail: '',
        code: 1,
        stock: 100,
        id: 56
    });

    const ProdsResult = await manager.getProducts();
    console.log(ProdsResult);





}





env();