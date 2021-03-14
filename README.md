 <div align="center">
    <img align="center" width="180" src="https://github.com/Aspedm/vkui-no-connection-modal/raw/master/readme_assets/no-connection.gif" />
    <h2>VKUI NO INTERNET MODAL</h2>
    <blockquote>
        Simple UI component for show network status. Component based on <a href="https://github.com/VKCOM/VKUI">VKUI</a> and designed for vk mini apps.
    </blockquote>
</div>

<div align="center">
    <img align="center" width="360" src="https://github.com/Aspedm/vkui-no-connection-modal/raw/master/readme_assets/preview.gif" />
</div>

## Features
 - Supported all VKUI themes
 - Auto close modal when user online
 - Check connect when user try close modal

## Install

```sh
yarn add vkui-no-connection-modal
```

## Example

```javascript
import NoConnectionModal from 'vkui-no-connection-modal';
import useConnection from 'vkui-no-connection-modal/lib/useConnection';

const YourView = () => {
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
                <Group>
                    Your view
                </Group>
            </Panel>
        </View>
    );
};
```

## Options
You can passed options for component:

| Name          | Type     | Description | Default |
|---------------|----------|-------------|---------|
|`header`       | string   | Modal title | 'No internet'|
|`subHeader`    | string   | Modal description  | 'Checking the network cables, modem and router.' |
|`actionText`   | string   | Button text | 'Try again' |
|`onClose`      | function | Close modal function | **Required** |

## Demo

Start storybook

```sh
yarn start
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'Add some featureName'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request

## Credits
A big thanks to:
- [VKUI](https://github.com/VKCOM/VKUI) - Component based on VKUI