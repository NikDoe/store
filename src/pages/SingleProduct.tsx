import { customFetch, formatAsDollars, type SingleProductResponse, } from '@/utils';
import { useState } from 'react';
import { type LoaderFunction, useLoaderData } from 'react-router-dom';

export const loader: LoaderFunction = async ({
	params,
}): Promise<SingleProductResponse> => {
	const response = await customFetch<SingleProductResponse>(
		`/products/${params.id}`
	);

	return { ...response.data };
};

const SingleProduct = () => {
	const { data: product } = useLoaderData() as SingleProductResponse;
	const {
		image,
		title,
		price,
		description,
		colors,
		company
	} = product.attributes;

	const dollarsAmount = formatAsDollars(price);
	const [productColor, setProductColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);

	const addToCart = () => {
		console.log('add to cart');
	};

	return <h1 className='text-4xl'>SingleProduct Page</h1>;
};

export default SingleProduct;