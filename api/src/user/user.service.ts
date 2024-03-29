import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  // async create(createUserDto: CreateUserDto): Promise<UserDocument> {
  //   try {
  //     const newUser = new this.userModel({
  //       ...createUserDto,
  //     });

  //     return await newUser.save();
  //   } catch (error) {
  //     throw new BadRequestException('Error creating user');
  //   }
  // }

  // async findAll(): Promise<UserDocument[]> {
  //   try {
  //     return await this.userModel.find({}, '-createdAt -updatedAt -__v').exec();
  //   } catch (error) {
  //     throw new NotFoundException('Error fetching users');
  //   }
  // }

  // async findById(id: mongoose.Types.ObjectId): Promise<UserDocument | null> {
  //   try {
  //     const user = await this.userModel
  //       .findById(id, '-createdAt -updatedAt -__v')
  //       .exec();
  //     if (!user) {
  //       return null;
  //     }
  //     return user;
  //   } catch (error) {
  //     throw new NotFoundException('User not found');
  //   }
  // }

  // async findByUsername(username: string): Promise<UserDocument | null> {
  //   try {
  //     return await this.userModel
  //       .findOne({ username }, '-createdAt -updatedAt -__v')
  //       .exec();
  //   } catch (error) {
  //     throw new NotFoundException('Error fetching user by username');
  //   }
  // }

  // async findByEmail(email: string): Promise<UserDocument | null> {
  //   try {
  //     return await this.userModel.findOne({ email }).exec();
  //   } catch (error) {
  //     throw new NotFoundException('Error fetching user by email');
  //   }
  // }

  // async update(
  //   id: mongoose.Types.ObjectId,
  //   updateUserDto: UpdateUserDto | any,
  // ): Promise<UserDocument | null> {
  //   try {
  //     const user = await this.userModel
  //       .findByIdAndUpdate(id, updateUserDto, { new: true })
  //       .exec();
  //     if (!user) {
  //       return null;
  //     }
  //     return user;
  //   } catch (error) {
  //     throw new NotFoundException('User not found');
  //   }
  // }

  // async remove(id: mongoose.Types.ObjectId): Promise<UserDocument | null> {
  //   try {
  //     const user = await this.userModel.findByIdAndDelete(id).exec();
  //     if (!user) {
  //       return null;
  //     }
  //     user.isActive = false;
  //     await user.save();
  //     return user;
  //   } catch (error) {
  //     throw new NotFoundException('User not found');
  //   }
  // }

  // async addCoin(
  //   id: mongoose.Types.ObjectId,
  //   coin: number,
  // ): Promise<UserDocument | null> {
  //   try {
  //     const user = await this.userModel
  //       .findById(id, '-createdAt -updatedAt -__v')
  //       .exec();
  //     if (!user) {
  //       throw new BadRequestException('Error add coin');
  //     }
  //     user.coin = parseInt(user.coin.toString()) + parseInt(coin.toString());
  //     console.log(user.coin);
  //     await user.save();
  //     return user;
  //   } catch (error) {
  //     throw new BadRequestException('Error add coin');
  //   }
  // }

  // async saveUser(
  //   id: mongoose.Types.ObjectId,
  //   coin: number,
  //   upgrade: number,
  // ): Promise<UserDocument | null> {
  //   try {
  //     const user = await this.userModel
  //       .findById(id, '-createdAt -updatedAt -__v')
  //       .exec();
  //     if (!user) {
  //       throw new BadRequestException('Error save data');
  //     }
  //     user.coin = coin;
  //     user.upgrade = upgrade;

  //     await user.save();
  //     return user;
  //   } catch (error) {
  //     console.log(error.message);
  //     throw new BadRequestException('Error save data');
  //   }
  // }
}
