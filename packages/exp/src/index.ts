import {
  Get,
  Query,
  Post,
  SetHeader,
  HttpCode,
  ContentType,
  Redirect,
  Controller,
  Provide,
  Inject,
  Init,
} from '@decorator-server/decorator';

@Provide()
export class Test {
  @Init()
  aaaa() {
    console.log(12344);
  }
}

@Provide()
@Controller('/api')
export class SomeClass {
  @Inject()
  useTest: Test;

  @Get('/')
  @Get('/main')
  @SetHeader({ accept: '*/*' })
  @HttpCode(301)
  @ContentType('json')
  @Redirect('/ccc')
  someGetMethod(@Query() id: string) {
    console.log(id);
    return 'hello world';
  }

  @Post('/b')
  somePostMethod(@Query() key: string) {
    console.log(key);
  }
}

// const provideGroup = new Map();
// console.log(JSON.stringify(assemble(Test, provideGroup)));
// console.log(JSON.stringify(assemble(SomeClass, provideGroup)));
