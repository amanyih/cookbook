class AuthorDto {
  id: number;
  email: string;
  profile: {
    name: string;
    bio?: string;
    profilePicture?: string;
  };

  constructor({
    id,
    email,
    profile,
  }: {
    id: number;
    email: string;
    profile: {
      name: string;
      bio?: string;
      profilePicture?: string;
    };
  }) {
    this.id = id;
    this.email = email;
    this.profile = profile;
  }
}

export default AuthorDto;
