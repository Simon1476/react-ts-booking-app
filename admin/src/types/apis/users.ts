type UserDetails = {
  _id: string;
  username: string;
  email: string;
  country: string;
  img: string;
  city: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type UserDataResponse = {
  details: UserDetails;
  token: string;
  isAdmin: boolean;
};
