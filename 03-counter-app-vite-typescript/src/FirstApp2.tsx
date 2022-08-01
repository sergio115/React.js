import { FC } from 'react';

type Props = {
	title: string,
	subTitle?: string,
	name?: string,
} & typeof defaultProps

const defaultProps = {
	subTitle: 'No hay subtitulo',
	name: 'Sergio Pérez',
};

// NOTA: Este código rompe con el required de title.
// Leer https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680
// en la sección "How FC breaks defaultProps and friends ?"
// y leer https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/
export const FirstApp2: FC<Props> & { defaultProps: typeof defaultProps } = ({ title, name, subTitle }) => {
	return (
		<>
			<h1 data-testid="test-title"> {title} </h1>
			<p>{subTitle}</p>
			<p>{subTitle}</p>
			<p>{name}</p>
		</>
	);
};

FirstApp2.defaultProps = defaultProps;
