function validateForm() {
		const name = document.getElementById('name').value.trim();
		const email = document.getElementById('email').value.trim();
		const gender = document.querySelector('input[name="gender"]:checked');
		const education = document.querySelectorAll('input[name="education"]:checked');

		if (name === '' || email === '' || !gender || education.length === 0) {
			alert('Please fill in all the fields.');
			return false;
		}

		const emailRegex = /^\S+@\S+\.\S+$/;
		if (!emailRegex.test(email)) {
			alert('Please enter a valid email address.');
			return false;
		}

		const confirmation = confirm('Confirm Form Submission');
		if (!confirmation) {
		  return false;
		}

		return true;
	}
