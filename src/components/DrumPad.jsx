import { useEffect } from "react";

function DrumPad(props) {
	const onClickHandler = () => {
		const drumPad = document.getElementById(props.pad.id),
			  audio = document.getElementById(props.pad.key);
		audio.currentTime = 0;
		audio.play();

		drumPad.classList.add('pressed');
		setTimeout(() => drumPad.classList.remove('pressed'), 200);

		props.onClick(props.pad.id);
	}

	const onKeyDownHandler = e => {
		const key = e.key.toUpperCase();

		if(key === props.pad.key) onClickHandler();
	}

	useEffect(() => {
		document.addEventListener('keydown', onKeyDownHandler);

		return () => {
			document.removeEventListener('keydown', onKeyDownHandler);
		}
	}, []);

	return (
		<button className="drum-pad flex" id={props.pad.id} onClick={onClickHandler} >
			<audio className="clip" id={props.pad.key} src={props.pad.src} onKeyDown={onKeyDownHandler}></audio>
			{props.pad.key}
		</button>
	);
}

export default DrumPad;