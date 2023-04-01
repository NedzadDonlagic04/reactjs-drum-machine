import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import DrumPad from './components/DrumPad';

const drumPadInfo = [
	{ id: 'Heater 1', key: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
	{ id: 'Heater 2', key: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
	{ id: 'Heater 3', key: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
	{ id: 'Heater 4', key: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
	{ id: 'Clap', key: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
	{ id: 'Open HH', key: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
	{ id: 'Kick n\' Hat', key: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
	{ id: 'Kick', key: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
	{ id: 'Closed HH', key: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];

function App() {
	const [displayText, displayTextSetter] = useState('Press any key');

	const onClickHandler = e => displayTextSetter(e);

	return (
		<div id="drum-machine" className='drum-machine flex'>
			<Display text={displayText} />
			<div className='drum-pad-container flex row'>
				{drumPadInfo.map((val, i) => <DrumPad key={i} pad={val} onClick={onClickHandler} />)}
			</div>
		</div>
	);
}

export default App;
