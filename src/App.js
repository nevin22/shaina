import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	useEffect(() => {
		console.log('ahey');
		console.log(window.innerWidth);
	}, []);

	const [size, setSize] = useState({ height: 80, width: 100 });
	const [visible, setVisible] = useState(false);
	return (
		<div
			style={
				{
					// backgroundImage: `url("https://i.imgur.com/PjlxG7i.jpg")`,
					// backgroundPosition: 'center',
					// backgroundSize: `${window.innerWidth}px 100%`,
					// backgroundRepeat: 'no-repeat',
					// height: window.innerHeight,
				}
			}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					margin: 20,
					marginTop: 0,
				}}
			>
				<h1 style={{ paddingBottom: 20, paddingTop: 20 }}>Hello Baby !</h1>
				<p style={{ paddingBottom: 20 }}>
					We've come this far in our relatioship despite having a lot of
					boundaries.
				</p>

				<p style={{ paddingBottom: 20 }}>
					Thank you for always sticking up on me. I appreciate it a lot my baby.
				</p>

				<p style={{ paddingBottom: 20 }}>
					My baby Shaina samamaaaaaa I love you so so so so so so muchhhhyyyy..
					I can't wait till the day na mag kita tayo.
				</p>

				<p style={{ paddingBottom: 20 }}>
					Eveything would be a 100x better if we're together right now.
				</p>

				<p style={{ paddingBottom: 20 }}>You make me happy. You make me sad.</p>

				<p style={{ paddingBottom: 20 }}>
					You make me sane and also insane haha.
				</p>

				<p style={{ paddingBottom: 20 }}>You gave hope to my life :P</p>

				<p style={{ paddingBottom: 20 }}>You complete me</p>

				{visible && (
					<>
						<h1>
							WILL YOU BE MY VALENTINE MY BABY ?
						</h1>
						<img
							src="https://i.imgur.com/kORTv8M.jpg"
							height={150}
							width={150}
							onClick={() => {
								setVisible(true);
							}}
						/>
					</>
				)}

				{!visible && (
					<img
						src="https://i.imgur.com/Cc4tsZD.png"
						height={size.height}
						width={size.width}
						onMouseEnter={() => setSize({ height: 100, width: 120 })}
						onMouseLeave={() => setSize({ height: 80, width: 100 })}
						onClick={() => {
							setVisible(true);
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
