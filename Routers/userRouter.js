const userRouter = require('express').Router();

const { fetchCart, fetchCartByUser, removeCartItem, addToCart, deleteAll } = require('../Controllers/Cart');

const { Accesseries, Total, Laptops, Mobiles, AllinOne } = require('../Controllers/Category');

const { addProduct, fetchProducts, fetchCategory, fetchByBrand, search, addSingleProduct } = require('../Controllers/Product');

const { Register, Login } = require('../Controllers/userControler');

const authorization = require('../midd');


userRouter.post('/register', Register)

userRouter.post('/login',Login)

userRouter.get('/fetchcart', fetchCart)

userRouter.get('/fetchcartbyuser/:email', fetchCartByUser)

userRouter.delete('/remove/:email/:productId', removeCartItem)

userRouter.post('/addingtocart', addToCart)

userRouter.delete('/deleteall', deleteAll)


userRouter.post('/addProd', addProduct)

userRouter.post('/addsingleProd', addSingleProduct)

userRouter.get('/fetchProd',fetchProducts)

userRouter.get('/:cat', fetchCategory)

userRouter.get('/category2/:comp', fetchByBrand)

userRouter.get('/search', search)


module.exports = userRouter;