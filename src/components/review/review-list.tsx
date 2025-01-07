import { MAX_REVIEWS_COUNT } from '../../consts/review';
import { Review } from '../../types/review-type';
import { getIsAuthorized } from '../../store/user/user-selectors';
import { ReviewForm } from './review-form';
import { useAppSelector } from '../../hooks/store-hooks';
import { getReviewsCount } from '../../store/current/current-selector';
import { ReviewComponent } from './review';
import { sortReviews } from '../../helpers';

interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps): React.JSX.Element {
  const reviewsCount = useAppSelector(getReviewsCount);
  const isAuthorized = useAppSelector(getIsAuthorized);
  const sortedReviews = sortReviews(reviews, MAX_REVIEWS_COUNT);
  return (
    <section className="offer__reviews reviews">
      {reviews && reviews.length !== 0 ? (
        <>
          <h2 className="reviews__title">
                Reviews &middot; <span className="reviews__amount">{reviewsCount}</span>
          </h2>
          <ul className="reviews__list">
            {sortedReviews.map((review: Review) => (
              <ReviewComponent
                key={review.id}
                comment={review.comment}
                rating={review.rating}
                date={new Date(review.date)}
                avatarUrl={review.user.avatarUrl}
                userName={review.user.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <span className="reviews__item">
          No reviews available
        </span>
      )}
      {isAuthorized && <ReviewForm />}
    </section>
  );
}
