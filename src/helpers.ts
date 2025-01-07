import { Review } from './dataTypes/review-type';

export function getRightSpelling(value: string, count: number): string {
  const wordEnd = count === 1 ? value : `${value}s`;
  return `${count} ${wordEnd}`;
}

export function formatDate(dateString: Date): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export const validateEmail = (email: string) => {
  const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const sortReviews = (reviews: Review[], maxCount: number) => reviews
  .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, maxCount);
