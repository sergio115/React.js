import { FC } from 'react';

interface Props {
	title: string,
	subTitle?: string,
	name?: string,
}

const defaultProps = {
	subTitle: 'No hay subtitulo',
	name: 'Sergio Pérez',
};

export const FirstApp: FC<Props> = ({ title, name, subTitle }) => {

	return (
		<>
			<h1 data-testid="test-title"> {title} </h1>
			<p>{subTitle}</p>
			<p>{subTitle}</p>
			<p>{name}</p>
		</>
	);
};

FirstApp.defaultProps = defaultProps;
