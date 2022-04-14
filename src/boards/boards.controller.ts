import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardService.getAllboards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('discription') discription: string,
  ): Board {
    return this.boardService.createBoard(title, discription);
  }
}
