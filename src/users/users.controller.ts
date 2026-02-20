import { Controller, Get, Query, } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(
        @Query('role') role: string,
        @Query('active') active: boolean
    ): string {
        return 'Lista de usuarios';
    }

    // GET /users/1 id es 1
    // GET /users/2 id es 2
    //GET /users/321 id es 321
    @Get(':id')
    getUser(@Param('id') comodin: string): string {
        return "Usuario especifico encontrado este engloba a " + comodin;
    }

 


}
