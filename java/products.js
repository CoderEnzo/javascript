let productslist = [ 
    { 
        id: 1,
        name: "Reyverde",
        sabores: [
            { 
                id: 1,
                name: 'tradicional', 
                price: 400,
                image: "../products/tradicional.jpeg"
            },
            {
                id: 2,
                name: 'compuesta',
                price: 480,
                image: "../products/compuesta.jpeg"
            },
            {
                id: 3,
                name: 'premium',
                price: 600,
                image: "../products/premium.jpeg"
            }
        ]
    },
    {
        id: 2,
        name: "Canarias",
        sabores: [
            {
                id: 1,
                name: 'Tradicional',
                price: 400,
                image: "../products/tradicional-canarias.jpeg"
            },
            {
                id: 2,
                name: 'Serena',
                price: 480,
                image: "../products/serena.jpeg"
            }
        ]
    }
];

class ProductManager{
    constructor( p ) {
        this.products = p;
    }
    
    changePriceAndImage(marcaPedida, saborPedido){
        
        for (let j = 0; j < this.products.length ; j++) {
            if (this.products[j].id == marcaPedida){
                let product = this.products[j];
                for (let t = 0; t < product.sabores.length; t++){
                    let sabor = product.sabores[t];
                    if(saborPedido == sabor.id) {
                        //actualizar precio
                        let priceId = marcaPedida +'-price';
                        document.getElementById(priceId).innerText = sabor.price;
                        //actualizar imagen 
                        let imageId = marcaPedida +'-image';
                        document.getElementById(imageId).src = sabor.image;
                        break;
                    }
                }
                break;
            }    
        }
    }


    getproducts(){
        return this.products;
    }
}
const pm = new ProductManager( productslist);



var elemento = document.createElement ("h3"),
contenido = document.createTextNode ("productos");
elemento.appendChild(contenido);
document.getElementById("subtitulo1").appendChild(elemento);
