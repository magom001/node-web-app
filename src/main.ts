import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const IP = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, IP, () => {
    console.log(`Listening on ${IP}:${PORT}`);
  });
}
bootstrap();
