import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/hooks';
import { Orders } from '@/pages';

function App() {
	const { name } = useAppSelector((state) => state.userState);
	console.log(name);
	
	return (
		<>
			<h1 className='font-bold text-7xl'>
				hello there 👽
			</h1>
			<Button 
				variant='destructive' 
				size='lg' 
				onClick={() => console.log('нажата кнопка')}
			>
				нажать
			</Button>
			<Orders />
		</>
	);
}

export default App;
