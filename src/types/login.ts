export type LoginResponse = {
  data: {
    token: string;
    user: {
      email: string;
      id: number;
      username: string;
    };
  };
  messagge: string;
  status: string;
};
