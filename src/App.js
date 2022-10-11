import "./App.css";
import gocows from "./img/Screenshot_gocows.png";
import seedra from "./img/Screenshot_seedra.png";
import vaxi from "./img/Screenshot_vaxi.png";
import pets from "./img/Screenshot_pets.png";
import travel from "./img/Screenshot_travel.png";
import ann from "./img/Screenshot_Ann-portfolio.png";
import { Profiler, useState } from "react";

function App() {
	const [elem, setElem] = useState([]);
	const [show, setShow] = useState(true);

	let proj = [
		{
			src: gocows,
			href: "https://dimazhv.github.io/GOCOWS/",
			category: "HTML/CSS",
		},
		{
			src: seedra,
			href: "https://dimazhv.github.io/seedra/",
			category: "HTML/CSS/JS",
		},
		{
			src: vaxi,
			href: "https://dimazhv.github.io/vaxishield/",
			category: "React",
		},
		{
			src: pets,
			href: "https://dimazhv.github.io/Pets/",
			category: "HTML/CSS/JS",
		},
		{
			src: travel,
			href: "https://dimazhv.github.io/Travel/",
			category: "HTML/CSS/JS",
		},
		{
			src: ann,
			href: "https://dimazhv.github.io/Portfolio-Ann/",
			category: "HTML/CSS",
		},
	];

	function filt(stack) {
		setElem(proj.filter((item) => item.category == stack));
		setShow(false);
	}
	const buttons = ["ALL", "HTML/CSS", "HTML/CSS/JS", "React"];
	return (
		<div className="App">
			<div className="header">
				<h1>Dima Zhuravlov</h1>
			</div>
			<div className="main">
				<div className="nav">
					<ul>
						{buttons.map((el) =>
							el == "ALL" ? (
								<li key={el}>
									<div
										onClick={() => (setShow(true), setElem([]))}
										className={show ? "el-button clicked" : "el-button"}
									>
										ALL
									</div>
								</li>
							) : (
								<li key={el}>
									<div
										onClick={() => filt(el)}
										className={
											elem[0]?.category == el
												? "el-button clicked"
												: "el-button"
										}
									>
										{el}
									</div>
								</li>
							)
						)}
					</ul>
				</div>
				<div className="portfolio">
					<div className="portfolio-elements">
						{show
							? proj.map((el) => (
									<div key={el.href} className="portfolio-element">
										<a href={el.href} target={"_blank"}>
											<img src={el.src} alt="" />
										</a>
									</div>
							  ))
							: elem.map((el) => (
									<div key={el.href} className="portfolio-element">
										<a href={el.href} target={"_blank"}>
											<img src={el.src} alt="" />
										</a>
									</div>
							  ))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
