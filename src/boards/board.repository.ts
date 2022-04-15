import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dtos/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, discription } = createBoardDto;

    const board = this.create({
      title,
      discription,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
