import { useTranslation } from 'next-i18next';

export const Header = () => {
	const { t } = useTranslation(['common']);
	return (
		<header>
			<h2></h2>
		</header>
	);
};
