import React, { useState } from "react";

//include images into your bundle



//create your first component
const Title = (props) => {
	return (
		<div className="row">
			<div className="col">
				<h1 className="text-center" style={{ fontSize: "9rem" }}>{props.text}</h1>
			</div>
		</div>
	);
};

export default Title;