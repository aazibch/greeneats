import slugify from 'slugify';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';
import Meal from '@/models/Meal';
import dbConnect from './dbConnect';

const s3 = new S3({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
  }
});

export async function getMeals() {
  await dbConnect();
  const meals = await Meal.find();

  return meals;
}

// Get single meal.
export async function getMeal(slug) {
  await dbConnect();
  const meal = await Meal.findOne({ slug });

  return meal;
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

  await dbConnect();
  await Meal.create(meal);
}
