import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlayerService {
  constructor(private readonly db: PrismaService) {}

  async create(createPlayerDto: CreatePlayerDto) {
    try {
      const player = await this.db.player.create({
        data: createPlayerDto,
      });
      return player;
    } catch (error) {
      throw new HttpException('could not create player', 400);
    }
  }

  async findAll() {
    const players = await this.db.player.findMany({
      include: { team: true },
      orderBy: { createdAt: 'desc' },
    });
    return players;
  }

  async findOne(id: number) {
    const player = await this.db.player.findUnique({
      where: { id },
    });
    return player;
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    const player = await this.db.player.update({
      where: { id },
      data: updatePlayerDto,
    });
    return player;
  }

  async remove(id: number) {
    const player = await this.db.player.delete({
      where: { id },
    });
    return player;
  }
}
