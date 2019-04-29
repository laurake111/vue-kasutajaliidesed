import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import MenCategory from '@/views/MenCategory'
import ProductDetailView from '@/views/ProductDetailView'
import HowToPay from '@/views/HowToPay'
import Payment from '@/views/Payment'
import ThankYou from '@/views/ThankYou'
import ShoppingCart from '@/views/ShoppingCart'
import UserContacts from '@/views/UserContacts'


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/MenCategory',
            name: 'MenCategory',
            component: MenCategory
        },
        {
            path: '/ProductDetailView',
            name: 'ProductDetailView',
            component: ProductDetailView
        },
        {
            path: '/HowToPay',
            name: 'HowToPay',
            component: HowToPay
        },
        {
            path: '/Payment',
            name: 'Payment',
            component: Payment
        },
        {
            path: '/ThankYou',
            name: 'ThankYou',
            component: ThankYou
        },
        {
            path: '/ShoppingCart',
            name: 'ShoppingCart',
            component: ShoppingCart
        },
        {
            path: '/UserContacts',
            name: 'UserContacts',
            component: UserContacts
        }
]});

export default router;