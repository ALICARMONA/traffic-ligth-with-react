import React, { useState } from "react";
export function Traffic(props) {
	const [state, setState] = useState({ clickedLight: null });

	let redSelected = "";
	if (state.clickedLight === "red") redSelected = "selected";
	let yellowSelected = "";
	if (state.clickedLight === "yellow") yellowSelected = "selected";
	let greenSelected = "";
	if (state.clickedLight === "green") greenSelected = "selected";

	return (
		<>
			<div id="trafficTop">
				<div id="container">
					<div
						className={"red light " + redSelected}
						onClick={() => setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellow light" + yellowSelected}
						onClick={() => setState({ clickedLight: "yellow" })}
					/>
					<div
						className={"green light" + greenSelected}
						onClick={() => setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		</>
	);
}
