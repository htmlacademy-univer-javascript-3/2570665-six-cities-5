import { useState, useEffect } from 'react';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../consts/review';
import { ReviewStatus } from '../../types/enums/review-send-status';
import { postReview } from '../../store/actions';
import { getCurrentOffer, getReviewPostingStatus } from '../../store/current/current-selector';
import { setReviewPostingStatus } from '../../store/current/current-slice';
import { Spinner } from '../spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';

type UserReview = {
  comment?: string;
  rating?: number;
};

export function ReviewForm(): React.JSX.Element {
  const [review, setReview] = useState<UserReview>();
  const dispatch = useAppDispatch();
  const offerId = useAppSelector(getCurrentOffer)!.id;
  const reviewPostingStatus = useAppSelector(getReviewPostingStatus);
  useEffect(() => {
    let isMounted = true;
    if (isMounted && reviewPostingStatus === ReviewStatus.Success) {
      setReview({ comment: '', rating: undefined });
    }
    return () => {
      isMounted = false;
    };
  }, [reviewPostingStatus]);
  const handleRatingChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ): void => setReview({ ...review, rating: +event.target.value });
  const handleCommentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ): void => setReview({ ...review, comment: event.target.value });
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (
    event,
  ): void => {
    event.preventDefault();
    dispatch(
      postReview({
        offerId: offerId,
        rating: review?.rating || 5,
        comment: review?.comment || '',
      }),
    );
    dispatch(setReviewPostingStatus(ReviewStatus.Pending));
  };
  const isValid =
    review?.comment &&
    review?.comment?.length >= MIN_COMMENT_LENGTH &&
    review?.comment?.length <= MAX_COMMENT_LENGTH &&
    review?.rating;
  return (
    <form className="reviews__form form">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={review?.rating === 5}
          onChange={handleRatingChange}
          disabled={reviewPostingStatus === ReviewStatus.Pending}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={review?.rating === 4}
          onChange={handleRatingChange}
          disabled={reviewPostingStatus === ReviewStatus.Pending}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={review?.rating === 3}
          onChange={handleRatingChange}
          disabled={reviewPostingStatus === ReviewStatus.Pending}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={review?.rating === 2}
          onChange={handleRatingChange}
          disabled={reviewPostingStatus === ReviewStatus.Pending}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={review?.rating === 1}
          onChange={handleRatingChange}
          disabled={reviewPostingStatus === ReviewStatus.Pending}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review?.comment || ''}
        onChange={handleCommentChange}
        disabled={reviewPostingStatus === ReviewStatus.Pending}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '} <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            50 characters
          </b>{' '}
          and no more than{' '}
          <b className="reviews__text-amount">
            300 characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onClick={handleSubmit}
          disabled={!isValid || reviewPostingStatus === ReviewStatus.Pending}
        >
          {reviewPostingStatus === ReviewStatus.Pending ? (<Spinner />) : ('Submit')}
        </button>
      </div>
    </form>
  );
}
