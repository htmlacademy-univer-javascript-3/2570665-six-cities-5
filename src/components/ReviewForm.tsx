import React from 'react';

export function ReviewForm() {
  const [formData, setFormData] = React.useState({
    review: '',
    rating: 0
  });

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" onChange={handleFieldChange} name="rating" value={1} id={`${1}-stars`} type="radio" />
        <label htmlFor={`${1}-stars`} className="reviews__rating-label form__rating-label" title='terribly'>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" onChange={handleFieldChange} name="rating" value={2} id={`${2}-stars`} type="radio" />
        <label htmlFor={`${2}-stars`} className="reviews__rating-label form__rating-label" title='badly'>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" onChange={handleFieldChange} name="rating" value={3} id={`${3}-stars`} type="radio" />
        <label htmlFor={`${3}-stars`} className="reviews__rating-label form__rating-label" title='not bad'>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" onChange={handleFieldChange} name="rating" value={4} id={`${4}-stars`} type="radio" />
        <label htmlFor={`${4}-stars`} className="reviews__rating-label form__rating-label" title='good'>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" onChange={handleFieldChange} name="rating" value={5} id={`${5}-stars`} type="radio" />
        <label htmlFor={`${5}-stars`} className="reviews__rating-label form__rating-label" title='perfect'>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={handleFieldChange} value={formData.review} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
