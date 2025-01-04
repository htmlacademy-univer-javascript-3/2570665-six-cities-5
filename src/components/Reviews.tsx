import { ReviewForm } from './ReviewForm.tsx';
import { ReviewsList } from './ReviewsList.tsx';
import { Review } from '../DataTypes/review-type.ts';

interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps): React.JSX.Element {
  return (
    <section className="offer__reviews reviews">
      {reviews && reviews.length !== 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <span className="reviews__item" style={{justifyContent: 'center',fontSize: 12,color: 'lightgray',}}>
          No reviews available
        </span>
      )}
      <ReviewForm />
    </section>
  );
}
