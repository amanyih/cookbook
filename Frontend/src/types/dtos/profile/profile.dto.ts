class ProfileDto {
  id: number;
  name: string;
  bio?: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  user: {
    id: number;
    email: string;
    username: string;
    createdAt: Date;
  };

  constructor({
    id,
    name,
    bio,
    profilePicture,
    createdAt,
    updatedAt,
    userId,
    user,
  }: {
    id: number;
    name: string;
    bio?: string;
    profilePicture?: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user: {
      id: number;
      email: string;
      username: string;
      createdAt: Date;
    };
  }) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.profilePicture = profilePicture;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userId = userId;
    this.user = user;
  }
}

export default ProfileDto;

// "profile": {
//     "id": 1,
//     "name": "Amanuel Yihunie",
//     "bio": "Third year software engineering student at AAiT",
//     "profilePicture": "https://res.cloudinary.com/dapttyuqx/image/upload/v1694688356/hyv8t9uzfpagko9oqy6u.jpg",
//     "createdAt": "2023-09-15T21:24:29.245Z",
//     "updatedAt": "2023-09-15T21:24:42.078Z",
//     "userId": 1,
//     "user": {
//         "id": 1,
//         "email": "amanuelyihunie27@gmail.com",
//         "createdAt": "2023-09-15T21:24:29.229Z",
//         "username": "amanyih"
//     }
// }
