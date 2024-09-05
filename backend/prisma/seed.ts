import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.team.createMany({
    data: [
      { name: 'Manchester United' },
      { name: 'Flamengo' },
      { name: 'Barueri' },
      { name: 'Internacional' },
      { name: 'Corinthians' },
      { name: 'Santos' },
      { name: 'Botafogo' },
      { name: 'Fluminense' },
      { name: 'Palmeiras' },
      { name: 'Internacional' },
    ],
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
