

interface ReviewProps {
  date: Date;
  avatarUrl: string;
  userName: string;
  comment: string;
  rating: number;
  isInOffer?: boolean;
}

export function ReviewComponent({
  date,
  avatarUrl,
  userName,
  comment,
  rating,
  isInOffer,
}: ReviewProps): React.JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          {isInOffer && (
            <span className="offer__rating-value rating__value">{rating}</span>
          )}
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date.toDateString()}>
          {date.toLocaleDateString('en-US', {})}
        </time>
      </div>
    </li>
  );
}
