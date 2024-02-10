import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
  }
});

// Establish database connection.
const db = sql('meals.db');

export async function getMeals() {
  // Simulating an asynchronous operation.
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}

// Get single meal.
export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Storing image to AWS S3 bucket.
  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}-${new Date().getTime()}.${extension}`;

  const bufferImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: 'nextjs-food-users-images',
    Key: fileName,
    Body: Buffer.from(bufferImage),
    ContentType: meal.image.type
  });

  meal.image = fileName;

  // Store the data in the database.
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
