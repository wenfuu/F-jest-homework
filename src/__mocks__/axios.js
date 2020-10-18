export default {
  get: jest.fn(() => Promise.resolve({ data: { mock: "get" } })),
  post: jest.fn(() => Promise.resolve({ data: { mock: "post" } })),
};
