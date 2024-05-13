import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteResponse, ResponseDto } from './dto/response.dto';
import { CreateImageDto } from './dto/create-image.dto';

@ApiTags('Images')
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get('all')
  @ApiOperation({ summary: 'Get All the image' })
  @ApiResponse({ type: ResponseDto })
  async getAllImages(): Promise<ResponseDto[]> {
    return this.imagesService.findAll();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload a new image' }) // Describe the operation
  @ApiResponse({ type: ResponseDto })
  @ApiConsumes('multipart/form-data') // Specify the content type
  @ApiBody({
    description: 'Image to upload',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CreateImageDto> {
    if (!file) {
      throw new HttpException('File is Missing..', HttpStatus.BAD_REQUEST);
    }
    if (!this.imagesService.isValidFileType(file)) {
      throw new HttpException('Invalid file type..', HttpStatus.NOT_FOUND);
    }
    return this.imagesService.create(file.originalname, file.buffer);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete the Image by Id' })
  @ApiResponse({ type: DeleteResponse })
  async deleteImage(
    @Param('id') id: string,
  ): Promise<{ msg: string; success: boolean }> {
    return this.imagesService.remove(id);
  }
}
