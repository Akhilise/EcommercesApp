export const validateEmail = (text) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!text) return { error: "Email is required" };
  if (!emailRegex.test(text))
    return { error: "Please enter a valid email address" };
  return { error: "" };
};

export const validatePassword = (text) => {
  if (!text) return { error: "Password is required" };
  if (text.length < 8)
    return { error: "Password must be at least 8 characters" };
  if (!/[A-Z]/.test(text))
    return { error: "Password must contain at least one uppercase letter" };
  if (!/[0-9]/.test(text))
    return { error: "Password must contain at least one number" };
  return { error: "" };
};

export const validateUsername = (text) => {
  if (!text) return { error: "Username is required" };
  if (text.length < 3)
    return { error: "Username must be at least 3 characters" };
  if (!/^[a-zA-Z0-9_]+$/.test(text))
    return {
      error: "Username can only contain letters, numbers, and underscores",
    };
  return { error: "" };
};
