//import bcrpyt from 'bcryptjs'


const data = {
    users:[
{
    name:"Admin",
    email:'admin@ex.com',
    password:   '1234',
    isAdmin:true
},
{
    name:"John",
    email:'john@ex.com',
    password:   '1234',
    isAdmin:false
}
    ],
    products: [
        {
            
            name: 'graps plant',
            category: 'vine',
            price: 120,
            countInStock: 0,
            image: '/images/grapes.jpeg',
    
            rating: 4.5,
            numReviews: 10,
            description: "high quality graps plants",
        },
        {
            
            name: 'papaya plant',
            category: 'woody',
            price: 120,
            countInStock: 10,
            image: '/images/papaya.jpg',
            rating: 2.3,
            numReviews: 20,
            description: "high quality plants",
        },
        {
            
            name: 'mango plant',
            category: 'woody',
            price: 120,
            countInStock: 10,
            image: '/images/mango.jpg',
        
            rating: 4.2,
            numReviews: 12,
            description: "high quality plants",
        },
        {
            
            name: 'Banana plant',
            category: 'vine',
            price: 130,
            countInStock: 10,
            image: '/images/banana.jpg',
        
            rating: 4.8,
            numReviews: 30,
            description: "high quality graps plants",
        },
        {
            
            name: 'Rose plant',
            category: 'floribundas',
            price: 200,
            countInStock: 8,
            image: '/images/rose.jpg',
    
            rating: 4.4,
            numReviews: 10,
            description: "high quality mixi plants",
        },

        {
            
            name: 'Apple plant',
            category: 'woody',
            price: 500,
            countInStock: 10,
            image: '/images/apple.jpg',
            
            rating: 5,
            numReviews: 35,
            description: "high quality mixi plants",
        }
    ]
};
export default data;