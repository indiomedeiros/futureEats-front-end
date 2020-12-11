export const goToInitialPage = (history) => {
  history.push("/");
};

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToSignUpPage = (history) => {
  history.push("/sign_up");
};

export const goToFeedPage = (history) => {
  history.push("/feed");
};

export const goToProfilePage = (history) => {
  history.push("/profile");
};

export const goToEditProfilePage = (history) => {
  history.push("/update_profile");
};

export const goToEditAddressPage = (history) => {
  history.push("/update_address");
};

export const goToRestaurantPage = (history, id) => {
  history.push(`/restaurant/${id}`);
};

export const goToAddressPage = (history) => {
  history.push("/address_form");
};

export const goToCartPage = (history) => {
  history.push("/cart");
};
