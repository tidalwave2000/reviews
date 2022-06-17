import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, SetIndex] = useState(0);
	//destructure people array to extract specific items from array
	const { name, job, image, text } = people[index];
//check to see if index is greater than or less than the number of items in the array
	const checkNumber = (number) => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}
		return number;
	};
//Advance the review to the next person
	const nextPerson = () => {
		SetIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};
//Advance the review to the prev person
	const prevPerson = () => {
		SetIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button className="prev-btn" onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn">surprise me</button>
		</article>
	);
};

export default Review;
