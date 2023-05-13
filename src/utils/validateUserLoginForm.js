export const validateUserLoginForm = (values) => {
    const errors = {};

    if ( values.username.length < 6) {
        errors.username ="Must be at least 6 characters"
    } else if (values.username.length > 15) {
        errors.username ="Must be 15 characters or less"
    }

    if ( values.password.length < 8) errors.password ="Must be at least 8 characters"

    return errors;
}