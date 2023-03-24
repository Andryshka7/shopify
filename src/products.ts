import image1 from 'assets/products/1.png'
import image2 from 'assets/products/2.png'
import image3 from 'assets/products/3.png'
import image4 from 'assets/products/4.png'
import image5 from 'assets/products/5.png'
import image6 from 'assets/products/6.png'
import image7 from 'assets/products/7.png'
import image8 from 'assets/products/8.png'
import image9 from 'assets/products/9.png'
import image10 from 'assets/products/10.png'
import image11 from 'assets/products/11.png'
import image12 from 'assets/products/12.png'
import image13 from 'assets/products/13.png'
import image14 from 'assets/products/14.png'
import image15 from 'assets/products/15.png'
import image16 from 'assets/products/16.png'
import image17 from 'assets/products/17.png'
import image18 from 'assets/products/18.png'
import image19 from 'assets/products/19.png'
import image20 from 'assets/products/20.png'
import image21 from 'assets/products/21.png'
import image22 from 'assets/products/22.png'
import image23 from 'assets/products/23.png'
import image24 from 'assets/products/24.png'
import image25 from 'assets/products/25.png'
import image26 from 'assets/products/26.png'
import image27 from 'assets/products/27.png'
import image28 from 'assets/products/28.png'
import image29 from 'assets/products/29.png'
import image30 from 'assets/products/30.png'
import image31 from 'assets/products/31.png'
import image32 from 'assets/products/32.png'
import image33 from 'assets/products/33.png'

const products = [
	{
		id: 1,
		name: 'Beats series 2',
		price: 285,
		image: image16,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 2,
		name: 'Samsung Y Go',
		price: 40,
		image: image7,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 3,
		name: 'JBL Power 2',
		price: 45,
		image: image8,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 4,
		name: 'JBL Power 1',
		price: 20,
		image: image9,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 5,
		name: 'HyperX Cloud Mini',
		price: 25,
		image: image10,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 6,
		name: 'JBL Charge 3',
		price: 65,
		image: image27,
		category: 'speakers',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 7,
		name: 'JBL Go Mini 2',
		price: 20,
		image: image4,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 8,
		name: 'JBL Charge 4',
		price: 120,
		image: image28,
		category: 'speakers',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 9,
		name: 'HyperX Cloud 2',
		price: 155,
		image: image23,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 10,
		name: 'HyperX Cloud Flight',
		price: 175,
		image: image24,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 11,
		name: 'Logitech G PRO',
		price: 265,
		image: image25,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 12,
		name: 'Logitech G PRO X',
		price: 290,
		image: image26,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 13,
		name: 'Apple Watch Y',
		price: 215,
		image: image31,
		category: 'smart watches',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 14,
		name: 'Apple Watch SE',
		price: 300,
		image: image32,
		category: 'smart watches',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 15,
		name: 'Beats series 3',
		price: 255,
		image: image20,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 16,
		name: 'JBL Go Mini',
		price: 15,
		image: image3,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 17,
		name: 'Samsung X Go',
		price: 25,
		image: image6,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 18,
		name: 'Logitech G',
		price: 15,
		image: image12,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 19,
		name: 'Apple Air Mini',
		price: 45,
		image: image13,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 20,
		name: 'Apple Air Mini 2',
		price: 50,
		image: image14,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 21,
		name: 'JBL Flip 3',
		price: 105,
		image: image29,
		category: 'speakers',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 22,
		name: 'Apple Watch 6',
		price: 230,
		image: image30,
		category: 'smart watches',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 23,
		name: 'JBL flip 4',
		price: 80,
		image: image1,
		category: 'speakers',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 24,
		name: 'JBL Boom 2',
		price: 280,
		image: image15,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 25,
		name: 'Beats series 3',
		price: 290,
		image: image21,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 26,
		name: 'Samsung X+',
		price: 10,
		image: image11,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 27,
		name: 'Samsung Sound 2',
		price: 270,
		image: image17,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 28,
		name: 'Apple Air Pods 2',
		price: 315,
		image: image18,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 29,
		name: 'Apple Air Max',
		price: 450,
		image: image19,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 30,
		name: 'HyperX cloud',
		price: 100,
		image: image22,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 31,
		name: 'JBL Go Mini 3',
		price: 30,
		image: image5,
		category: 'mini-headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 32,
		name: 'Apple Watch X',
		price: 275,
		image: image33,
		category: 'smart watches',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
	{
		id: 33,
		name: 'Beats series 2',
		price: 290,
		image: image2,
		category: 'headphones',
		rating: 1 + Math.random() * 4,
		reviews: Math.floor(Math.random() * 100),
	},
]

export default products
