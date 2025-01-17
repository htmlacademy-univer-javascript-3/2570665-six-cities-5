import { formatDate} from '../../helpers';
import { Rating } from '../rating';

interface ReviewProps {
  comment: string;
  rating: number;
  date: Date;
  avatarUrl: string;
  userName: string;
}

export function ReviewComponent({
  comment,
  rating,
  date,
  avatarUrl,
  userName,
}: ReviewProps): React.JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{userName.split(' ')[0]}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} usePlace="reviews" />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date.toDateString()}>
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}
