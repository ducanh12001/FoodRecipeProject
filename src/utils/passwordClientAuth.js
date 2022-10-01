export const passwordClientAuth = (password: string) => {
	if (password.length < 6) {
			return false;
	}
	
	return true;
}