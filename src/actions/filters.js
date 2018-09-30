import {
  SET_NAME_FILTER,
  SET_DESCRIPTION_FILTER,
  SET_TAG_FILTER
} from './types/types';

const setNameFilter = (name = '') => {
  return {
    type: SET_NAME_FILTER,
    payload: name
  };
};

const setDescriptionFilter = (description = '') => {
  return {
    type: SET_DESCRIPTION_FILTER,
    payload: description
  };
};

const setTagFilter = (tags = []) => {
  return {
    type: SET_TAG_FILTER,
    payload: tags
  };
};

export { setNameFilter, setDescriptionFilter, setTagFilter };
