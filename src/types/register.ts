export type RegisterResponse = {
  data: {
    email: string;
    id: number;
    username: string;
  };
  message: string;
  status: string;
};
