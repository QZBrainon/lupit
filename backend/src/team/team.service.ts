import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private readonly db: PrismaService) {}

  async create(createTeamDto: CreateTeamDto) {
    try {
      const team = await this.db.team.create({
        data: createTeamDto,
      });
      return team;
    } catch (error) {
      throw new NotFoundException('Team not found');
    }
  }

  async findAll() {
    const teams = await this.db.team.findMany();
    return teams;
  }

  async findOne(id: number) {
    const team = await this.db.team.findUnique({
      where: { id },
    });
    if (!team) {
      throw new NotFoundException('Team not found');
    }
    return team;
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    const team = await this.db.team.update({
      where: { id },
      data: updateTeamDto,
    });
    if (!team) {
      throw new NotFoundException('Team not found');
    }
    return team;
  }

  async remove(id: number) {
    const team = await this.db.team.delete({
      where: { id },
    });
    if (!team) {
      throw new NotFoundException('Team not found');
    }
    return team;
  }
}
