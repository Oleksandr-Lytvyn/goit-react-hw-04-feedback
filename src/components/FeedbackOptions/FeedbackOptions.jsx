import React from 'react';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options: { incGood, incNeutral, incBad } }) {
  return (
    <ul className={css.buttons_list}>
      <li>
        <button
          type="button"
          onClick={() => {
            incGood(prev => {
              return prev + 1;
            });
          }}
        >
          good
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => {
            incNeutral(prev => {
              return prev + 1;
            });
          }}
        >
          neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => {
            incBad(prev => {
              return prev + 1;
            });
          }}
        >
          bad
        </button>
      </li>
    </ul>
  );
}
