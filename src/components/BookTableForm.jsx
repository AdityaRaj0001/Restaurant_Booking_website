import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";

const defaultFormData = {
	partySize: "",
	date: new Date(),
	time: "",
	name: "",
	email: "",
};
const TableBookingForm = () => {
	const [formData, setFormData] = useState(defaultFormData);
	const [verified, setVerified] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleDateChange = (date) => {
		setFormData({
			...formData,
			date: date,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormData(defaultFormData); // You can handle form submission here
	};

	const handleRecptcha = () => {
		console.log("Recaptcha verified");
		setVerified(true);
	};

	return (
		<div className="max-w-md mx-auto">
			<h2 className="text-xl font-bold mb-4 text-center">Table Booking</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="partySize" className="block mb-1">
						Party Size:
					</label>
					<input type="number" id="partySize" name="partySize" value={formData.partySize} onChange={handleInputChange} className="w-full px-4 py-2 border" required />
				</div>
				<div>
					<label htmlFor="date" className="block mb-1">
						Date:
					</label>
					<DatePicker id="date" name="date" selected={formData.date} onChange={handleDateChange} dateFormat="MMMM d, yyyy" className="w-full px-4 py-2 border" required />
				</div>
				<div>
					<label htmlFor="time" className="block mb-1">
						Time:
					</label>
					<select id="time" name="time" value={formData.time} onChange={handleInputChange} className="w-full px-4 py-2 border" required>
						<option value="">Select Time</option>
						{/* Populate available timings here */}
						<option value="12:00 PM">12:00 PM</option>
						<option value="1:00 PM">1:00 PM</option>
						<option value="1:00 PM">2:00 PM</option>
						<option value="1:00 PM">3:00 PM</option>
						<option value="1:00 PM">4:00 PM</option>
						<option value="1:00 PM">5:00 PM</option>
						{/* Add more options as needed */}
					</select>
				</div>
				<div>
					<label htmlFor="name" className="block mb-1">
						Name:
					</label>
					<input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border" required />
				</div>
				<div>
					<label htmlFor="email" className="block mb-1">
						Email:
					</label>
					<input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border" required />
				</div>

				<div className="text-center">
					<div style={{ display: "inline-block" }}>
						{" "}
						<ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={handleRecptcha} />
					</div>
				</div>

				<button type="submit" className={` mt-3 w-full px-4 py-2 rounded-md hover:bg-blue-600 ${!verified ? "bg-blue-300 text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white"}`} disabled={!verified}>
					Book Table
				</button>
			</form>
		</div>
	);
};

export default TableBookingForm;
