import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  filename: string;

  @ApiProperty()
  path: string;
}

export class DeleteResponse {
  @ApiProperty()
  msg: string;

  @ApiProperty()
  success: boolean;
}
