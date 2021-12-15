export const rules = {
  required: (message: string = 'This input must be not empty') => ({
    required: true,
    message,
  }),
};
