import { prisma } from '../src/lib/prisma'

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: 'Sample Project',
        slug: 'sample-project',
        description: 'A short description of this project.',
        imageUrl: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      },
    ],
  })

  await prisma.teamMember.createMany({
    data: [
      {
        name: 'Jane Doe',
        role: 'Founder & CEO',
        photoUrl: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
