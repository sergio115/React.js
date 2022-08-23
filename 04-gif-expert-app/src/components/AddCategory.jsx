import { useState } from 'react';


export const AddCategory = ({ onAddCategory /*, setCategories*/ }) => {

	const [inputValue, setInputValue] = useState('Rick and Morty');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const value = inputValue.trim();

		if (value.length <= 1)
			return;

		onAddCategory(value);
		// setCategories(categories => [inputValue, ...categories]);
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};
