import fs from 'fs';



export default class productManager {


    constructor(path) {
        this.path = path;

    }


    getProducts = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                console.log(data);
                const prods = JSON.parse(data);
                return prods;
            } else {
                return [];
            }


        } catch (error) {
            console.log(error);

        }
    }




    addProduct = async (product) => {


        try {

            const prods = await this.getProducts();
            if (prods.length === 0) {
                product.id = 1;
            } else {
                product.id = prods[prods.length - 1].id + 1;
            }

            prods.push(product);

            await fs.promises.writeFile(this.path, JSON.stringify(prods, null, '\t'));
            return product;



        } catch (error) {
            console.log(error);

        }
    }


    getProductByID = async (prodID) => {
        let allProds = await this.getProducts();
        const idProd = allProds.find((prod) => prod.id === prodID);
        if (idProd) {
            console.log(idProd);
            return idProd;


        } else {
            console.log(' no encontrado');
        }

    }
    upDateById = async ({ id, ...product }) => {
        await this.deleteById(id);
        let oProds = await this.getProducts();

        let updateProduct = [{ id, ...product }, ...oProds];
        await fs.writeFile(this.path, JSON.stringify(oProds,null,'\t'));

    }
    deleteById = async (id) => {
        let product = await fs.readFile(this.path, 'utf-8');

        let allProds = JSON.parse(product);
        let deleteProduct = allProds.filter((product) => product.id !== id);
        fs.writeFile(this.path, JSON.stringify(allProds,null,'\t'));

        console.log('Producto eliminado de la lista');
        console.log(deleteProduct);




    }

















}