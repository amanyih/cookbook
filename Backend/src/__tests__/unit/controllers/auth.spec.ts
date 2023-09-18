import { authController } from "../../../controllers";
import User from "../../../models/sequelize/user";
import UserProfile from "../../../models/sequelize/userProfile";

jest.mock("../../../models/sequelize/user");
jest.mock("../../../models/sequelize/userProfile");

const mockRequest = (body?: Record<string, unknown>) => ({
  body,
});

const mockResponse = () => {
  const res: Partial<{
    json: jest.Mock<any, any>;
    status: jest.Mock<any, any>;
  }> = {
    json: jest.fn(),
    status: jest.fn(() => res),
  };
  return res;
};

const mockNext = () => jest.fn();

it("should return 201", async () => {
  (User.findOne as any).mockImplementationOnce(() => {
    return null;
  });
  UserProfile;
});
