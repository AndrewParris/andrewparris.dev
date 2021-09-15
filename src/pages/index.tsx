import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

interface IPageProps {}

const HomePage: React.FC<IPageProps> = () => {
	return (
		<Flex>
			<Text>Home Page</Text>
		</Flex>
	);
};

export default HomePage;
