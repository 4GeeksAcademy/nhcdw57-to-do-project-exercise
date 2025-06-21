import React, {useState} from "react";
import Title from "./Title";
import ToDoListComponent from "./TodoList";

//include images into your bundle



//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Title text="Todos"/>
			<div className="row d-flex justify-content-center">
				<div className="col-4">
					<ToDoListComponent/>
				</div>
			</div>
		</div>
	);
};

export default Home;