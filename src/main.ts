import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import extractDomain from 'extract-domain';

const test = async () => {
  const urls = await extractDomain(`https://www.google.com`, {
    tld: true,
  });
  console.log(urls);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await test();
}
bootstrap();
