
import {Product,taxCalculation} from './06-functions-destructuring'

const shoppingCart: Product[]=[
    {
        description:'Nokia',
        price:250.0
    },
    {
        description:'Ipad',
        price:350.0
    }
];

const taxes=0.15;

const [total,tax] = taxCalculation({
    products:shoppingCart,
    tax:taxes
});


console.log('Total', total);
console.log('Tax',tax)