class AuthorDto {
  id: number;
  email: string;
  username: string;
  profile: {
    name: string;
    bio?: string;
    profilePicture?: string;
  };

  constructor({
    id,
    email,
    profile,
    username,
  }: {
    id: number;
    email: string;
    username: string;
    profile: {
      name: string;
      bio?: string;
      profilePicture?: string;
    };
  }) {
    this.id = id;
    this.email = email;
    this.profile = profile;
    this.username = username;
  }
}

export default AuthorDto;
