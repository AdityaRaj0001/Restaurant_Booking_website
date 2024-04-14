import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const defaultFormData = {
	firstname: "",
	lastname: "",
	email: "",
	enquiry: "",
};

const EnquiryForm = () => {
	const [formData, setFormData] = useState(defaultFormData);
	const [verified, setVerified] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormData(defaultFormData);
	};

    const handleRecptcha = () => {
        console.log("Recaptcha verified");
        setVerified(true);
    }

	return (
		<div className="max-w-md mx-auto mb-12 md:mb-24">
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="firstname" className="block mb-1">
						First Name:
					</label>
					<input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} className="w-full px-4 py-2 border" required />
				</div>
				<div>
					<label htmlFor="lastname" className="block mb-1">
						Last Name:
					</label>
					<input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className="w-full px-4 py-2 border" required />
				</div>
				<div>
					<label htmlFor="email" className="block mb-1">
						Email:
					</label>
					<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border" required />
				</div>
				<div>
					<label htmlFor="enquiry" className="block mb-1">
						Enquiry:
					</label>
					<textarea id="enquiry" name="enquiry" value={formData.enquiry} onChange={handleChange} className="w-full px-4 py-2 border" rows="4" required></textarea>
				</div>

				<div className="text-center">
					<div style={{ display: "inline-block" }}>
						{" "}
						<ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={handleRecptcha} />
					</div>
				</div>

				<button type="submit" className={` mt-3 w-full px-4 py-2 rounded-md hover:bg-violet-900 ${!verified ? "bg-violet-900 text-white cursor-not-allowed" : "bg-violet-900 text-white"}`} disabled={!verified}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default EnquiryForm;
