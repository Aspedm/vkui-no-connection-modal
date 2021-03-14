import { storiesOf } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { View, Panel, PanelHeader, Group, List, Cell, Button, Header, Div } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import NoConnectionModal from '../lib/NoConnectionModal.es';
import useConnection from '../lib/useConnection.es';

storiesOf("No internet modal", module).add("Default props", () => {
	const [modal, setModal] = useState(null);
	const isOnline = useConnection();

	useEffect(() => {
		if (!isOnline) return setModal(
			<NoConnectionModal 
				onClose={() => setModal(null)}
			/>
		);

		return setModal(null);
	}, [isOnline]);

	return (
		<View activePanel="modals" modal={modal}>
			<Panel id="modals">
				<PanelHeader>VKUI T-REX</PanelHeader>
	
				<Group title="How show modal" description="Google Chrome recomended for test">
					<List>
						<Cell>
							1. Open browser developer tools
						</Cell>
						<Cell>
							2. Open «Network» tab
						</Cell>
						<Cell>
							3. Open «Throttling»
						</Cell>
						<Cell>
							4. Select «Offline» option
						</Cell>
					</List>
				</Group>
			</Panel>
		</View>
	);
});


storiesOf("No internet modal", module).add("Custom props", () => {
	const [modal, setModal] = useState(null);
	const isOnline = useConnection();

	useEffect(() => {
		if (!isOnline) return setModal(
			<NoConnectionModal 
				header="Нет сети"
				subHeader="Похоже, что у Вас проблемы с интернет соединением."
				actionText="Проверить соединение"
				onClose={() => setModal(null)}
			/>
		);

		return setModal(null);
	}, [isOnline]);

	return (
		<View activePanel="modals" modal={modal}>
			<Panel id="modals">
				<PanelHeader>VKUI T-REX</PanelHeader>
	
				<Group title="How show modal" description="Google Chrome recomended for test">
					<List>
						<Cell>
							1. Open browser developer tools
						</Cell>
						<Cell>
							2. Open «Network» tab
						</Cell>
						<Cell>
							3. Open «Throttling»
						</Cell>
						<Cell>
							4. Select «Offline» option
						</Cell>
					</List>
				</Group>

				<Group header={<Header mode="secondary">Custom props</Header>}>
					<List>
						<Cell>
							title="Нет сети"
						</Cell>
						<Cell>
							caption="Похоже, что у Вас проблемы с интернет соединением."
						</Cell>
						<Cell>
							actionText="Проверить соединение"
						</Cell>
					</List>
				</Group>
			</Panel>
		</View>
	);
});

storiesOf("No internet modal", module).add("Themes supported", () => {
	const [modal, setModal] = useState(null);
	const isOnline = useConnection();

	useEffect(() => {
		if (!isOnline) return setModal(
			<NoConnectionModal 
				onClose={() => setModal(null)}
			/>
		);

		return setModal(null);
	}, [isOnline]);

	/**
	 * @param {String} theme
	 */
	const changeTheme = theme => {
		document.body.setAttribute('scheme', theme);
	};

	return (
		<View activePanel="modals" modal={modal}>
			<Panel id="modals">
				<PanelHeader>VKUI T-REX</PanelHeader>
	
				<Group title="How show modal" description="Google Chrome recomended for test">
					<List>
						<Cell>
							1. Open browser developer tools
						</Cell>
						<Cell>
							2. Open «Network» tab
						</Cell>
						<Cell>
							3. Open «Throttling»
						</Cell>
						<Cell>
							4. Select «Offline» option
						</Cell>
					</List>
				</Group>

				<Group header={<Header mode="secondary">Support themes</Header>}>
					<Div style={{display: 'flex'}}>
						<Button size="l" stretched style={{ marginRight: 8 }} onClick={() => changeTheme('bright_light')}>Bright light</Button>
						<Button size="l" stretched mode="secondary" onClick={() => changeTheme('space_gray')}>Space gray</Button>
					</Div>
				</Group>
			</Panel>
		</View>
	);
});