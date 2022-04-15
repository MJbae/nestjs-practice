import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dtos/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllboards(): Board[] {
    return this.boards;
  }

  findBoardById(id: string): Board {
    const board = this.boards.find((board) => board.id === id);

    if (!board) {
      throw new NotFoundException('Cannot find board with the id');
    }

    return board;
  }

  removeBoard(id: string) {
    this.boards = this.boards.filter((board) => board.id != id);
  }

  createBoard(CreateBoardDto: CreateBoardDto): Board {
    const { title, discription } = CreateBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      discription,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.findBoardById(id);
    board.status = status;
    return board;
  }
}
