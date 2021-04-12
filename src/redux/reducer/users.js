<<<<<<< HEAD
import { normalizedUsers as defaultUsers } from '../../fixtures';

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
=======
import produce from 'immer';
import { ADD_REVIEW } from '../constants';
import { normalizedUsers } from '../../fixtures';
import { arrToMap } from '../utils';

export default produce((draft = arrToMap(normalizedUsers), action) => {
  const { type, review, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = review;
      draft[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
