import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/decorator';
import { BookMarkDto } from './dto';
import { EditBookMarkDto } from './dto/edit-bookmark.dto';

@Controller('bookmark')
@UseGuards(JwtGuard)
export class BookmarkController {
  constructor(private bookmarkservice: BookmarkService) {}

  @Get('all')
  getAllBookmarks(@GetUser('id') id: number) {
    return this.bookmarkservice.getAllbookmarks(id);
  }

  @Post('add')
  addBookmark(@GetUser('id') id: number, @Body() bookmark: BookMarkDto) {
    return this.bookmarkservice.addBookmark(id, bookmark);
  }

  @Patch('update')
  updateBookMark(
    @Body('id') bookmarkid: number,
    @Body('bookmark') bookmark: EditBookMarkDto,
  ) {
    return this.bookmarkservice.updateBookmarkById(bookmarkid, bookmark);
  }

  @Delete('delete')
  deleteBookMark(@Body('id') bookmarkid: number) {
    return this.bookmarkservice.deleteBookMark(bookmarkid);
  }
}
