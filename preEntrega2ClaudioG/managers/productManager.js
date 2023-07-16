import fs from 'fs';



export default class productManager {


    constructor(path) {
        this.path = path;
        

    }


    getProducts = async () => {
        try {
            if (fs.existsSync(this.path)) {

                const data = await fs.promises.readFile(this.path, 'utf-8');               
                // console.log(data);
                const produ = JSON.parse(data);                
                return produ;
            } else {
                return [];
            }


        } catch (error) {
            console.log(error);

        }
    };




    updateProduct = async (Products) => {
        try {
            const produ = await this.getProducts();        

            if (produ.length === 0) {
                Products.id = 1;

            } else {
                Products.id = produ[produ.length - 1].id + 1;
            }

            produ.push(Products);

            await fs.promises.writeFile(this.path, JSON.stringify(produ, null, '\t'));
            return Products;
           
           
            


        } catch (error) {
            console.log(error);

        }
    }


    getProductByID = async (prodID) => {
        let datas = await this.getProducts();
        const idProd = datas.find((prod) => prod.id === prodID);
        if (idProd) {
            // console.log(idProd);
            return idProd;


        } else {
            console.log(' no encontrado');
        }

    }
    upDateById = async ({ id, ...product }) => {
        await this.deleteById(id);
        let oProds = await this.getProducts();

        let updateProduct = [{ id, ...product }, ...oProds];
        await fs.promises.writeFile(this.path, JSON.stringify(updateProduct), "utf-8");

    }
    deleteById = async (id) => {
        let product = await fs.promises.readFile(this.path, "utf-8");

        let allProds = JSON.parse(product);
        let deleteProduct = allProds.filter((product) => product.id !== id);
        await fs.promises.writeFile(this.path, JSON.stringify(deleteProduct),"utf-8");

        console.log('Producto eliminado de la lista');
        // console.log(deleteProduct);




    }


}