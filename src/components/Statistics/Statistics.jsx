import React from 'react';
import css from './Statistics.module.css';

export function Statistics(props) {
  return (
    <ul className={css.stats_list}>
      <li className={css.stats_item}>
        <p className={css.stats_item_text}>
          Good:<span className={css.stats_item_number}>{props.good}</span>
        </p>
      </li>
      <li className={css.stats_item}>
        <p className={css.stats_item_text}>
          Neutral:<span className={css.stats_item_number}>{props.neutral}</span>
        </p>
      </li>
      <li className={css.stats_item}>
        <p className={css.stats_item_text}>
          Bad:<span className={css.stats_item_number}>{props.bad}</span>
        </p>
      </li>
      <li className={css.stats_item}>
        <p className={css.stats_item_text}>
          Total:<span className={css.stats_item_number}>{props.total}</span>
        </p>
      </li>
      <li className={css.stats_item}>
        <p className={css.stats_item_text}>
          Positive feedback:
          <span className={css.stats_item_number}>
            {props.positivePercentage}%
          </span>
        </p>
      </li>
    </ul>
  );
}
